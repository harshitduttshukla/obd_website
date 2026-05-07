"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search,
  ChevronRight, 
  Car, 
  Activity, 
  Zap, 
  Wrench, 
  ChevronLeft,
  Loader2,
  AlertCircle,
  Check
} from "lucide-react";
import { api, Brand, CoverageFunction } from "@/lib/api";

type Step = "make" | "model" | "generation" | "results";

const getLogoUrl = (brandName: string) => {
  if (!brandName) return "";
  const name = typeof brandName === 'string' ? brandName : (brandName as any).name;
  if (!name) return "";

  const trimmedName = name.toLowerCase().trim();
  const parts = trimmedName.split(/\s+/);
  const firstWord = parts[0].replace(/[^\w-]/g, '');
  const slugifiedFull = trimmedName.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  // High-fidelity mapping for known problematic brands on vl.imgix.net
  const imgixMapping: Record<string, string> = {
    "mercedes": "mercedes-benz",
    "mercedes-benz": "mercedes-benz",
    "alfa": "alfa-romeo",
    "alfa-romeo": "alfa-romeo",
    "aston": "aston-martin",
    "aston-martin": "aston-martin",
    "land": "land-rover",
    "land-rover": "land-rover",
    "range": "range-rover",
    "rolls": "rolls-royce",
    "rolls-royce": "rolls-royce",
    "great": "great-wall",
    "maruti": "maruti",
    "maruti-suzuki": "maruti-suzuki",
    "delorean": "dmc",
    "baic": "baic-motor",
    "asia": "asia",
    "asia-motors": "asia",
    "austin-healey": "austin-healey",
    "tata": "tata",
    "changan": "changan",
    "bristol": "bristol-cars",
    "hindustan": "hindustan-motors",
    "lifan": "lifan",
    "bharatbenz": "bharatbenz",
    "de-tomaso": "de-tomaso",
    "abarth": "abarth",
    "citroen": "citroen",
    "dacia": "dacia",
    "ford": "ford",
    "fiat": "fiat",
    "toyota": "toyota",
    "suzuki": "suzuki",
    "yamaha": "yamaha",
    "vinfast": "vinfast",
    "gac": "gac",
    "honda": "honda",
    "hyundai": "hyundai",
    "mahindra": "mahindra",
    "kia": "kia",
    "mg": "mg",
    "renault": "renault",
    "skoda": "skoda",
    "isuzu": "isuzu",
    "jeep": "jeep",
    "volvo": "volvo",
    "porsche": "porsche",
    "lexus": "lexus",
    "jaguar": "jaguar",
    "nissan": "nissan",
    "mitsubishi": "mitsubishi",
    "force": "force-motors",
    "piaggio": "piaggio",
    "ashok": "ashok-leyland",
    "leyland": "ashok-leyland",
    "eicher": "eicher",
    "scania": "scania",
    "man": "man",
  };

  const key = imgixMapping[firstWord] || imgixMapping[slugifiedFull] || firstWord;
  return `https://vl.imgix.net/img/${key}-logo.png`;
};

export default function SupportedCarsPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>("make");
  const [makes, setMakes] = useState<Brand[]>([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedGen, setSelectedGen] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [coverageData, setCoverageData] = useState<CoverageFunction[]>([]);

  // Mock data for models and generations since specific APIs weren't provided
  // In a real scenario, these would be fetched from api.fetchModels(make) etc.
  const [models, setModels] = useState<Brand[]>([]);
  const [generations, setGenerations] = useState<Brand[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("obd_token");
    if (!token) {
      router.push("/login?callback=/supported-cars");
      return;
    }
    fetchMakes();
  }, []);

  const fetchMakes = async () => {
    setIsLoading(true);
    try {
      const data = await api.fetchMakeList();
      // Filter out unsupported brands like Abarth and sort alphabetically
      const sortedData = [...data]
        .filter(b => {
          const name = (typeof b === 'string' ? b : b.name).toLowerCase();
          return name !== 'abarth'; // As confirmed by user
        })
        .sort((a, b) => {
          const nameA = (typeof a === 'string' ? a : a.name).toLowerCase();
          const nameB = (typeof b === 'string' ? b : b.name).toLowerCase();
          return nameA.localeCompare(nameB);
        });
      setMakes(sortedData);
    } catch {
      setError("Failed to load brands. Please check your connection or login.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMakeSelect = async (make: string) => {
    setSelectedMake(make);
    setIsLoading(true);
    setError("");
    try {
      const data = await api.fetchModelList(make);
      setModels(data);
      setCurrentStep("model");
      setSearchQuery("");
    } catch {
      setError("Failed to load models for this brand.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleModelSelect = (modelObj: Brand) => {
    const model = modelObj.name;
    setSelectedModel(model);
    setIsLoading(true);
    setError("");
    try {
      // API for years is currently unavailable (404), providing mock years for UI purposes only
      const mockYears = Array.from({ length: 15 }, (_, i) => ({ name: (2024 - i).toString() }));
      setGenerations(mockYears);
      setCurrentStep("generation");
    } catch {
      setError("Failed to prepare year selection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenSelect = async (genObj: Brand) => {
    const gen = genObj.name;
    setSelectedGen(gen);
    setIsLoading(true);
    setCurrentStep("results");
    setError("");
    try {
      // Calling fetchCoverage with ONLY the make as requested for current API setup
      const resp = await api.fetchCoverage(selectedMake);
      setCoverageData(resp.data || []);
    } catch (err: any) {
      // Handle the case where the brand is in the list but not yet supported in coverage
      if (err.message?.includes("404") || err.status === 404) {
        setError(`Full coverage details for ${selectedMake} are currently being updated and will be available soon.`);
      } else {
        setError("Failed to fetch coverage details. The team is aware and working on it.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const filteredMakes = useMemo(() => {
    if (!Array.isArray(makes)) return [];
    return makes.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [makes, searchQuery]);

  const getCategorizedCoverage = () => {
    return {
      diagnose: coverageData.filter(f => f.function_type.includes("Scanning") || f.function_type.includes("Diagnose")),
      actuation: coverageData.filter(f => f.function_type.toLowerCase().includes("actuation")),
      special: coverageData.filter(f => f.function_type.toLowerCase().includes("special")),
    };
  };

  const coverage = getCategorizedCoverage();

  const resetSelection = () => {
    setCurrentStep("make");
    setSelectedMake("");
    setSelectedModel("");
    setSelectedGen("");
    setCoverageData([]);
    setError("");
  };

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-brand-primary/10">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 glass h-20 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
               <Image src="/logo.png" alt="OBD logo" fill sizes="32px" className="p-1.5 object-contain" />
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">OBD<span className="text-brand-primary italic">SMART</span></span>
          </Link>
          
          <div className="flex items-center gap-4">
             {currentStep !== "make" && (
               <button 
                 onClick={() => {
                   if (currentStep === "model") setCurrentStep("make");
                   if (currentStep === "generation") setCurrentStep("model");
                   if (currentStep === "results") setCurrentStep("generation");
                 }} 
                 className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"
               >
                 <ChevronLeft className="w-4 h-4" /> Back
               </button>
             )}
             <button 
               onClick={() => {
                 localStorage.removeItem("obd_token");
                 router.push("/login");
               }} 
               className="btn-ghost text-xs"
             >
               Sign Out
             </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-3 mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <span className={currentStep === "make" ? "text-brand-primary" : "text-slate-900"}>{selectedMake || "1. Brand"}</span>
             <ChevronRight className="w-3 h-3" />
             <span className={currentStep === "model" ? "text-brand-primary" : selectedModel ? "text-slate-900" : ""}>{selectedModel || "2. Model"}</span>
             <ChevronRight className="w-3 h-3" />
             <span className={currentStep === "generation" ? "text-brand-primary" : selectedGen ? "text-slate-900" : ""}>{selectedGen || "3. Year"}</span>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentStep === "make" && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Check Your Car <span className="text-brand-primary">Compatibility.</span></h1>
                  <p className="text-slate-500 text-lg font-medium">Make sure your vehicle is supported before you get started.</p>
                </div>

                <div className="relative group">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                  <input 
                    type="text"
                    placeholder="Search by brand or model..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-premium-xl focus:ring-8 focus:ring-brand-primary/5 focus:border-brand-primary/30 transition-all outline-none text-lg"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {isLoading ? (
                    Array(8).fill(0).map((_, i) => (
                      <div key={i} className="h-28 bg-slate-50 rounded-2xl animate-pulse border border-slate-100" />
                    ))
                  ) : filteredMakes.length > 0 ? (
                    filteredMakes.map((make) => (
                      <motion.button
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={make.name}
                        onClick={() => handleMakeSelect(make.name)}
                        className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50 flex items-center justify-center gap-4 group transition-all hover:bg-white hover:shadow-premium hover:border-brand-primary/20 min-h-[110px]"
                      >
                        <div className="w-12 h-12 relative flex items-center justify-center">
                          <Image 
                            src={getLogoUrl(make.name)} 
                            alt={`${make.name} logo`}
                            fill
                            sizes="48px"
                            className="object-contain transition-all grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const icon = target.nextElementSibling as HTMLElement;
                              if (icon) icon.style.display = 'block';
                            }}
                          />
                          <div className="hidden">
                            <Car className="w-8 h-8 text-slate-300 group-hover:text-brand-primary transition-colors" />
                          </div>
                        </div>
                        <span className="font-bold text-slate-900 tracking-tight text-center text-sm">
                          {typeof make === 'string' ? make : make.name}
                        </span>
                      </motion.button>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-100 rounded-[2rem]">
                      <div className="space-y-2">
                        <Search className="w-10 h-10 text-slate-200 mx-auto" />
                        <p className="text-slate-400 font-medium">No brands found matching your search.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {(currentStep === "model" || currentStep === "generation") && (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-slate-900 italic">Select {currentStep === "model" ? "Model" : "Generation"}</h2>
                  <p className="text-slate-500 font-medium">Pick your vehicle to see specific feature coverage.</p>
                </div>

                {isLoading ? (
                  <div className="py-12 flex flex-col items-center justify-center gap-4 text-slate-400">
                    <Loader2 className="w-8 h-8 animate-spin text-brand-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Fetching {currentStep}...</span>
                  </div>
                ) : error ? (
                   <div className="p-12 bg-red-50 rounded-[2.5rem] border border-red-100 text-center space-y-4">
                      <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                      <p className="text-red-700 font-bold">{error}</p>
                      <button onClick={() => currentStep === "model" ? handleMakeSelect(selectedMake) : handleModelSelect({ name: selectedModel })} className="btn-primary">Try Again</button>
                   </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(currentStep === "model" ? models : generations).map((item, idx) => (
                      <motion.button
                        whileHover={{ x: 4 }}
                        key={item.name || idx}
                        onClick={() => currentStep === "model" ? handleModelSelect(item) : handleGenSelect(item)}
                        className="bg-white px-8 py-6 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-brand-primary/30"
                      >
                        <span className="font-bold text-lg text-slate-900">
                          {typeof item === 'string' ? item : item.name}
                        </span>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-primary transition-all" />
                      </motion.button>
                    ))}
                    {(currentStep === "model" ? models : generations).length === 0 && (
                      <div className="col-span-full py-12 text-center text-slate-400">No {currentStep}s available for this selection.</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {currentStep === "results" && (
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Feature Coverage</h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                      {selectedMake} • {selectedModel} • {selectedGen}
                    </p>
                  </div>
                  <button onClick={resetSelection} className="btn-secondary text-xs uppercase tracking-widest">Change Vehicle</button>
                </div>

                {isLoading ? (
                  <div className="py-24 flex flex-col items-center justify-center gap-4 text-slate-400">
                    <Loader2 className="w-12 h-12 animate-spin text-brand-primary" />
                    <span className="font-bold uppercase tracking-[0.3em] text-[10px]">Analyzing Database...</span>
                  </div>
                ) : error ? (
                   <div className="p-12 bg-red-50 rounded-[2.5rem] border border-red-100 text-center space-y-4">
                      <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                      <p className="text-red-700 font-bold">{error}</p>
                      <button onClick={fetchMakes} className="btn-primary">Try Again</button>
                   </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Diagnose Category */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-slate-900">
                        <div className="p-2 bg-teal-50 rounded-lg border border-teal-100"><Activity className="w-4 h-4 text-brand-primary" /></div>
                        <h3 className="font-black uppercase tracking-widest text-sm">Diagnose</h3>
                      </div>
                      <div className="space-y-2">
                        {coverage.diagnose.map((f, i) => (
                          <div key={i} className="flex items-center justify-between px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm group hover:border-brand-primary/20 transition-all">
                            <span className="text-sm font-bold text-slate-600 italic">{f.function_name}</span>
                            <div className="px-1.5 py-0.5 bg-teal-50 rounded text-[8px] font-black text-brand-primary border border-teal-100">PRO</div>
                          </div>
                        ))}
                        {coverage.diagnose.length === 0 && <p className="text-slate-400 text-xs italic ml-1">No modules found.</p>}
                      </div>
                    </div>

                    {/* Actuation Category */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-slate-900">
                        <div className="p-2 bg-teal-50 rounded-lg border border-teal-100"><Zap className="w-4 h-4 text-brand-primary" /></div>
                        <h3 className="font-black uppercase tracking-widest text-sm">Actuation</h3>
                      </div>
                      <div className="space-y-2">
                        {coverage.actuation.map((f, i) => (
                          <div key={i} className="flex items-center justify-between px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm group hover:border-brand-primary/20 transition-all">
                            <span className="text-sm font-bold text-slate-600 italic">{f.function_name}</span>
                            <div className="w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                          </div>
                        ))}
                         {coverage.actuation.length === 0 && <p className="text-slate-400 text-xs italic ml-1">Coming soon for this model.</p>}
                      </div>
                    </div>

                    {/* Special Functions Category */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-slate-900">
                        <div className="p-2 bg-teal-50 rounded-lg border border-teal-100"><Wrench className="w-4 h-4 text-brand-primary" /></div>
                        <h3 className="font-black uppercase tracking-widest text-sm">Special Function</h3>
                      </div>
                      <div className="space-y-2">
                        {coverage.special.map((f, i) => (
                           <div key={i} className="flex items-center justify-between px-4 py-3 bg-white border border-slate-100 rounded-xl shadow-sm group hover:border-brand-primary/20 transition-all">
                            <span className="text-sm font-bold text-slate-600 italic">{f.function_name}</span>
                            <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center"><Check className="w-3 h-3 text-white" /></div>
                          </div>
                        ))}
                         {coverage.special.length === 0 && <p className="text-slate-400 text-xs italic ml-1">Full support pending.</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      
      {/* Dynamic Background Element */}
      <div className="fixed -bottom-40 -left-40 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}
