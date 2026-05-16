import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, 
  Shield, 
  Zap, 
  Smartphone, 
  BarChart3, 
  Settings, 
  ChevronRight, 
  ChevronDown,
  Globe,
  CheckCircle2,
  Cpu,
  Star,
  Car,
  Search,
  Wrench,
  Award,
  CircleCheck,
  ZapIcon
} from "lucide-react";

const BRANDS = [
  { name: "BMW", logo: "https://www.carlogos.org/car-logos/bmw-logo.png" },
  { name: "Audi", logo: "https://www.carlogos.org/car-logos/audi-logo.png" },
  { name: "Volkswagen", logo: "https://www.carlogos.org/car-logos/volkswagen-logo.png" },
  { name: "Mercedes", logo: "https://www.carlogos.org/car-logos/mercedes-benz-logo.png" },
  { name: "Toyota", logo: "https://www.carlogos.org/car-logos/toyota-logo.png" },
  { name: "Ford", logo: "https://www.carlogos.org/car-logos/ford-logo.png" },
];

const FAQ_ITEMS = [
  {
    question: "How does OBDSmart work?",
    answer: "OBDSmart connects to your vehicle through an OBD2 Bluetooth adapter and gives you access to advanced vehicle diagnostics directly from your Android device. Simply plug the adapter into your vehicle’s OBD2 port, connect it to the OBDSmart App via Bluetooth, and start scanning.\n\nYou can read and clear fault codes, view live data from multiple systems, perform special functions, and generate detailed PDF scan reports. Feature availability depends on your vehicle’s make, model, and year."
  },
  {
    question: "How do I connect my vehicle to OBDSmart?",
    answer: "Connecting your vehicle to OBDSmart is simple:\n\n1. Plug a compatible ELM-chip-based Bluetooth OBD2 adapter into your vehicle’s OBD2 port.\n2. Turn the vehicle ignition ON.\n3. Enable Bluetooth on your Android device.\n4. Open the OBDSmart App and connect to the adapter.\n5. Start scanning your vehicle and access diagnostics, live data, special functions, and reports.\n\nFor the best experience and stable communication, we recommend using good-quality ELM-based adapters and avoiding very cheap knockoff devices."
  },
  {
    question: "What features are supported by OBDSmart?",
    answer: "OBDSmart offers a wide range of diagnostic and maintenance features across supported vehicles. Key features include:\n\n• Reading and clearing diagnostic trouble codes (DTCs)\n• Support for both generic and manufacturer-specific fault codes\n• Detailed fault code descriptions\n• Live data monitoring from multiple vehicle systems\n• Professional PDF diagnostic scan reports\n• Fault descriptions in multiple Indian languages\n• Special functions like Service Reset, Injector Coding, DPF Regeneration, Brake Bleeding, and many more\n\nAvailable features may vary depending on the vehicle’s make, model, year, and ECU support."
  },
  {
    question: "Which makes are supported by OBDSmart?",
    answer: "OBDSmart supports most major Indian and global vehicle manufacturers across multiple segments. Feature availability depends on the vehicle’s make, model, year, and ECU support.\n\nTo check the exact coverage and supported features for a specific vehicle, use the “Check Compatibility” feature available on our website or inside the OBDSmart App. OBDSmart is continuously updated to improve compatibility and add support for newer vehicles and functions."
  },
  {
    question: "Can I use OBDSmart for free?",
    answer: "Yes. OBDSmart offers free access to scanning and fault code clearing features for the first 7 days after activation. During the free period, you can connect your vehicle, scan various systems, read and clear diagnostic trouble codes, and explore core diagnostic capabilities of the app.\n\nAfter the trial period, OBDSmart offers three subscription plans: Basic, Standard, and Advanced. Each plan provides access to different levels of diagnostics, live data, special functions, and advanced vehicle features depending on your requirements."
  }
];

const GooglePlayButton = ({ className = "" }: { className?: string }) => (
  <motion.a
    href="https://play.google.com/store/apps/details?id=com.obdsmart.obdsmart"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`bg-black flex items-center gap-3 px-8 py-3.5 rounded-[14px] shadow-premium hover:shadow-premium-xl transition-shadow ${className}`}
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.09 2.5C3.82 2.77 3.66 3.19 3.66 3.73V20.27C3.66 20.81 3.82 21.23 4.09 21.5L4.16 21.57L12.56 13.17V12.98V12.83L4.16 2.43L4.09 2.5Z" fill="#00E5FF"/>
      <path d="M15.35 15.96L12.56 13.17V12.83L15.35 10.04L15.42 10.08L18.73 11.96C19.67 12.49 19.67 13.37 18.73 13.91L15.42 15.79L15.35 15.96Z" fill="#FBC02D"/>
      <path d="M15.42 15.79L12.56 12.93L4.09 21.5C4.4 21.82 4.9 21.85 5.48 21.52L15.42 15.79Z" fill="#FF3D00"/>
      <path d="M15.42 10.11L5.48 4.47C4.9 4.14 4.4 4.17 4.09 4.49L12.56 12.96L15.42 10.11Z" fill="#4CAF50"/>
    </svg>
    <div className="flex flex-col items-start leading-tight">
      <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest -mb-0.5">Get it on</span>
      <span className="text-xl font-bold text-white tracking-tight">Google Play</span>
    </div>
  </motion.a>
);

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-primary' : 'text-slate-900 group-hover:text-brand-primary'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-teal-50 text-brand-primary' : 'bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-brand-primary'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-500 font-medium leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {FAQ_ITEMS.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-brand-primary/10 selection:text-brand-primary overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all">
              <img src="/logo.png" alt="OBD logo" className="w-full h-full rounded-xl object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-slate-500 text-sm font-medium">
            <Link to="/supported-cars" className="hover:text-slate-900 transition-colors">Compatibility</Link>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="btn-ghost hidden sm:block">Sign in</Link>
            <Link to="/signup" className="btn-primary px-8">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Next-Gen Automotive intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
                Diagnose, Customize <br />
                <span className="text-brand-primary">Automate.</span>
              </h1>
              
              <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-lg">
                The world's most powerful car assistant in your pocket. Unlock hidden features, diagnose faults, and service your car like a software engineer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <GooglePlayButton className="w-full sm:w-auto" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white p-1.5 rounded-[2.5rem] shadow-premium-xl border border-slate-100 overflow-hidden -rotate-2"
                >
                  <img src="/app_real_1.png" alt="App UI Home" width={400} height={800} className="rounded-[2.2rem]" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white p-1.5 rounded-[2.5rem] shadow-premium-xl border border-slate-100 overflow-hidden rotate-2"
                >
                  <img src="/app_real_2.png" alt="App UI Features" width={400} height={800} className="rounded-[2.2rem]" />
                </motion.div>
              </div>

              {/* Subtle background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50/50 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Trust Bar / Logos */}
      <section id="compatibility" className="py-32 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-16"
          >
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-[0.4em] text-center">
              Integrated with automotive leaders
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-5xl">
               {BRANDS.map((brand, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -5, scale: 1.05 }}
                   className="group relative h-24 bg-slate-50/50 rounded-2xl border border-slate-100/50 flex items-center justify-center p-6 transition-all hover:bg-white hover:shadow-premium hover:border-slate-200"
                 >
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      width={60} 
                      height={60} 
                      className="h-8 w-auto object-contain transition-all grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" 
                    />
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent" />
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-32 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 uppercase">Engineered for enthusiasts.</h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              Professional-grade tools distilled into a seamless mobile experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {/* Main Feature - Diagnostics */}
            <motion.div whileHover={{ y: -4 }} className="md:col-span-2 md:row-span-2 glass-card rounded-4xl p-12 flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-50 blur-[60px] rounded-full group-hover:bg-teal-100/50 transition-all" />
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-teal-100">
                <Activity className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Advanced Diagnostics</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Read and clear fault codes (ECUs) across all systems. Stop guessing and start fixing.</p>
              <div className="mt-8">
                <Link to="/supported-cars" className="btn-secondary group flex items-center gap-2 text-sm text-brand-primary border-brand-primary/20 hover:border-brand-primary/50">
                  Explore Diagnostics 
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Customization */}
            <motion.div whileHover={{ y: -4 }} className="md:col-span-2 glass-card rounded-4xl p-10 flex items-center gap-8 group">
              <div className="p-5 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-teal-50 group-hover:text-brand-primary transition-all border border-slate-100 group-hover:border-teal-100 shadow-sm">
                <Settings className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Car Coding</h3>
                <p className="text-slate-500 font-medium text-sm">Unlock hidden features like digital speedometers, mirror-folding, and start-stop disabling.</p>
              </div>
            </motion.div>

            {/* Maintenance */}
            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-4xl p-10 flex flex-col group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                <Wrench className="w-6 h-6 text-slate-400 group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Service Reset</h3>
              <p className="text-sm text-slate-400 font-medium">Reset oil service, brake maintenance, and battery registration yourself.</p>
            </motion.div>

            {/* Realtime Data */}
            <motion.div whileHover={{ y: -4 }} className="glass-card rounded-4xl p-10 flex flex-col group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                <BarChart3 className="w-6 h-6 text-slate-400 group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Live Data</h3>
              <p className="text-sm text-slate-400 font-medium">Monitor engine parameters and performance metrics in real-time.</p>
            </motion.div>

            {/* Security */}
            <motion.div whileHover={{ y: -4 }} className="md:col-span-2 glass-card rounded-4xl p-12 flex flex-col justify-center relative overflow-hidden group">
               <div className="flex items-center gap-5 mb-4">
                 <div className="p-3 bg-teal-50 rounded-xl border border-teal-100">
                  <Shield className="w-6 h-6 text-brand-primary" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900">Guaranteed reliability</h3>
               </div>
               <p className="text-slate-500 font-medium leading-relaxed">Regular cloud updates ensure your app always has the latest diagnostic algorithms. Stay future-proof.</p>
               <div className="absolute -right-6 -bottom-6 opacity-[0.03] grayscale group-hover:opacity-[0.08] transition-all">
                 <Award className="w-40 h-40" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 uppercase">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium">
              Everything you need to know about OBDSmart and how it helps you take care of your vehicle.
            </p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-50 p-16 md:p-24 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-teal-50 blur-[80px] rounded-full z-0 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 uppercase">Start your journey <span className="text-brand-primary">today.</span></h2>
                <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium">
                  Join over 500,000 car enthusiasts worldwide. Compatible with all standard ELM327 adapters.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                  <GooglePlayButton className="w-full sm:w-auto px-10" />
                  <div className="flex items-center gap-2.5 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                    <CircleCheck className="text-teal-500 w-4 h-4" />
                    Free basic version available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                  <img src="/logo.png" alt="OBD logo" className="p-2 object-contain w-full h-full" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              </div>
              <p className="text-slate-400 max-w-xs leading-relaxed font-medium">
                Empowering car owners worldwide with professional-grade diagnostics. Engineered for reliability, built for performance.
              </p>
              <div className="flex gap-4">
                {[Globe, ZapIcon, Smartphone].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-primary hover:border-teal-100 transition-all cursor-pointer shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Product</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-slate-900 transition-colors">App Features</a></li>
                <li><Link to="/supported-cars" className="hover:text-slate-900 transition-colors">Compatibility</Link></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><Link to="/terms-and-conditions" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">© 2026 OBD Smart Automotive GmbH. All rights reserved.</p>
            <div className="flex items-center gap-10">
               <div className="flex items-center gap-2.5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                 <Globe className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">English (US)</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
