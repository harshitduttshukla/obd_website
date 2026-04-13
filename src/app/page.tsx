"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Activity, 
  Shield, 
  Zap, 
  Smartphone, 
  BarChart3, 
  Settings, 
  ChevronRight, 
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

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-brand-primary/10 selection:text-brand-primary overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all">
              <Image src="/logo.png" alt="OBD logo" fill className="p-2 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-slate-500 text-sm font-medium">
            <a href="#compatibility" className="hover:text-slate-900 transition-colors">Compatibility</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="btn-ghost hidden sm:block">Sign in</button>
            <button className="btn-primary px-8">
              Get Started
            </button>
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
                <a 
                  href="https://play.google.com/store/apps/details?id=com.obdsmart.obdsmart" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary px-10 py-4 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width={140} height={42} className="h-6 w-auto brightness-[10]" />
                </a>
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
                  <Image src="/app_real_1.png" alt="App UI Home" width={400} height={800} className="rounded-[2.2rem]" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-white p-1.5 rounded-[2.5rem] shadow-premium-xl border border-slate-100 overflow-hidden mt-12 rotate-2"
                >
                  <Image src="/app_real_2.png" alt="App UI Features" width={400} height={800} className="rounded-[2.2rem]" />
                </motion.div>
              </div>

              {/* Subtle background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50/50 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Trust Bar / Logos */}
      <section id="compatibility" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Integrated with automotive leaders</span>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30">
               {BRANDS.map((brand, i) => (
                 <div key={i} className="group relative">
                    <Image src={brand.logo} alt={brand.name} width={50} height={50} className="h-7 w-auto object-contain transition-all group-hover:opacity-100 group-hover:scale-110" />
                 </div>
               ))}
            </div>
          </div>
        </div>
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
                <button className="btn-secondary group flex items-center gap-2 text-sm text-brand-primary border-brand-primary/20 hover:border-brand-primary/50">
                  Explore Diagnostics 
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
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
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.obdsmart.obdsmart" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary px-12 py-5 flex items-center gap-3 w-full sm:w-auto justify-center"
                  >
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width={180} height={54} className="h-7 w-auto brightness-[10]" />
                  </a>
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
                  <Image src="/logo.png" alt="OBD logo" fill className="p-2 object-contain" />
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
                <li><a href="#" className="hover:text-slate-900 transition-colors">Compatibility</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Company</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
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

