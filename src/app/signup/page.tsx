"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Lock, User, Loader2, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { api } from "@/lib/api";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await api.signup({ name, email, password });
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-sm"
        >
          <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto border border-teal-100 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-brand-primary" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Account Created!</h1>
          <p className="text-slate-500 font-medium">Welcome to OBD Smart. Your account has been successfully registered. Redirecting you to login...</p>
          <div className="pt-4">
            <Loader2 className="w-6 h-6 animate-spin text-brand-primary mx-auto" />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 selection:bg-brand-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="relative w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all shadow-sm">
              <Image src="/logo.png" alt="OBD logo" fill sizes="48px" className="p-2 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="text-slate-500 mt-2 text-center text-sm">Join half a million car enthusiasts and unlock your car's potential.</p>
        </div>

        {/* Form Section */}
        <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-premium-xl">
          <form onSubmit={handleSignup} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/5 transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-2 text-lg"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-primary font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-[10px] text-slate-400 leading-relaxed max-w-xs mx-auto font-medium">
          By creating an account, you agree to our <Link href="/terms-and-conditions" className="underline">Terms of Service</Link> and <Link href="/privacy-policy" className="underline">Privacy Policy</Link>.
        </p>
      </motion.div>
    </div>
  );
}
