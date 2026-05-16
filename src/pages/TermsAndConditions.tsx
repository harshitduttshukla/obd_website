import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, FileText, Clock, Mail, MapPin, Phone, AlertTriangle, RefreshCw, Truck, ShieldAlert } from "lucide-react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all shadow-sm">
              <img src="/logo.png" alt="OBD logo" className="p-2 object-contain w-full h-full rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </Link>
          
          <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">
            <ChevronLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 uppercase tracking-widest">
              <FileText className="w-3 h-3" />
              Legal Framework
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Terms & Conditions</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Effective Date: 22nd Dec, 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-slate max-w-none space-y-12 text-slate-600 leading-relaxed"
          >
            <section className="bg-slate-50/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Scope Of Terms and Conditions</h2>
              <p className="font-medium text-slate-700">
                These Terms and Conditions (“Terms”) apply to your use of all features, products, services, software, mobile applications (Android & iOS), website, diagnostic tools, and related services provided by OBDSmart (“OBDSmart”, “We”, “Us”, “Our”). This includes, without limitation, any OBD diagnostic hardware, software, website features, and any additional services that may be offered now or in the future.
              </p>
              <p className="mt-4 font-bold text-slate-900">
                By accessing or using OBDSmart, whether in India or internationally, you (“User”, “you”) agree to be bound by these Terms. If you do not agree, please stop using our Services immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-slate-900" />
                Changes to the terms
              </h2>
              <p className="font-medium text-slate-500">
                We reserve the right to modify, update, or amend these Terms at any time, entirely at our discretion. Any changes become effective immediately upon posting on our website or through our app. Your continued use of the Services after such updates signifies your acceptance of the modified Terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                Limitation of Liability
              </h2>
              <div className="grid gap-6">
                <div className="p-6 bg-red-50/50 border border-red-100 rounded-3xl">
                  <ul className="space-y-4 text-sm font-medium text-slate-700 list-none p-0">
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-red-600">!</span>
                      </div>
                      <span>OBDSmart, including its affiliates, officers, directors, employees, agents, and licensors, shall not be liable for any indirect, incidental, special, or consequential damages, including loss of data, vehicle damage, or lost profits.</span>
                    </li>
                    <li className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-[10px] font-black text-red-600">!</span>
                      </div>
                      <span>Our total cumulative liability for any claim shall not exceed the amount you paid to OBDSmart for the specific product or service in question.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm font-bold text-slate-900 italic p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  Usage of OBDSmart is at your own risk. The Services are intended only as diagnostic aids and must be used in accordance with your vehicle manufacturer’s guidelines.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-teal-500" />
                Return and Refund Policy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Hardware Returns</h3>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <ul className="space-y-2 text-sm font-medium list-none p-0">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Return within 7 calendar days</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Original packaging required</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-500" /> Like-new condition required</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">App Subscriptions</h3>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <p className="text-sm font-medium">Subject to platform policies (App Store/Google Play). Refund requests within 7 days if not substantially used.</p>
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-400 text-center uppercase tracking-widest">Refunds are processed within 7–10 business days after inspection.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Truck className="w-6 h-6 text-blue-500" />
                Shipping & Delivery
              </h2>
              <div className="prose prose-slate font-medium text-slate-500">
                <p>We ship products to the delivery address you provide. All timelines are provided by third-party couriers.</p>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-900 text-sm font-bold">
                  OBDSmart holds no liability for delays, damage, or losses occurring in transit.
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-orange-500" />
                Indemnification
              </h2>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                You agree to indemnify and hold OBDSmart harmless from any claims, damages, liabilities, and expenses arising from your use or misuse of our products, violation of these Terms, or breach of any representations.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Force Majeure</h2>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                OBDSmart shall not be held liable for any failure or delay due to events beyond our reasonable control such as natural disasters, governmental actions, war, epidemics, or labor disputes.
              </p>
            </section>

            <section className="p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                      <div>
                        <p className="font-bold text-lg">OBDSmart</p>
                        <p className="text-slate-400 text-sm font-medium">Sachu Nilaya Apartment, 1st Cross Rd, Kasavanahalli<br />Bengaluru, Karnataka, India , 560035</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                      <a href="mailto:support@obdsmart.in" className="font-bold text-slate-100 hover:text-white transition-colors">support@obdsmart.in</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                      <a href="tel:+919608119919" className="font-bold text-slate-100 hover:text-white transition-colors">+91-9608119919</a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Legal Inquiry?</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">Our legal team is available for any clarifications regarding these terms.</p>
                  <a href="mailto:support@obdsmart.in" className="btn-primary w-full py-4 text-center bg-blue-600 hover:bg-blue-700 border-blue-600">Contact Support</a>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>

      {/* Footer (Simplified) */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                <img src="/logo.png" alt="OBD logo" className="p-1.5 object-contain w-full h-full" />
             </div>
             <span className="text-sm font-bold tracking-tight text-slate-900">© 2026 OBD SMART</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/signup" className="hover:text-slate-900 transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
