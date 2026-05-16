import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 selection:bg-brand-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8 max-w-lg"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all shadow-sm">
              <img src="/logo.png" alt="OBD logo" className="p-2 object-contain w-full h-full" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full" />
            <h1 className="relative text-[12rem] font-black text-slate-900 leading-none tracking-tighter">404</h1>
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Page not found</h2>
          <p className="text-slate-500 font-medium">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/" className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg">
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-lg border-slate-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        <div className="pt-12 flex items-center justify-center gap-2 text-slate-400">
          <AlertCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-center">
            System Error: Route resolution failed
          </span>
        </div>
      </motion.div>
    </div>
  );
}
