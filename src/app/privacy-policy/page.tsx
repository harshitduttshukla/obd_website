"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Shield, Clock, Mail, MapPin, Phone, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/10 selection:text-brand-primary">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:border-brand-primary/30 transition-all shadow-sm">
              <Image src="/logo.png" alt="OBD logo" fill sizes="40px" className="p-2 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 leading-none">OBD<span className="text-brand-primary italic">SMART</span></span>
              <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Diagnostics</span>
            </div>
          </Link>
          
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-bold text-brand-primary uppercase tracking-widest">
              <Shield className="w-3 h-3" />
              Privacy Center
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Effective Date: 22nd Dec, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last Updated: 15th Aug, 2025</span>
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
              <p className="text-lg font-medium text-slate-700 italic">
                OBDSmart (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your information when you use our mobile application, website, automotive diagnostic devices, and related services (“Services”), whether in India or abroad.
              </p>
              <p className="mt-4 font-bold text-slate-900">
                By using OBDSmart, you agree to the practices described in this Privacy Policy.
              </p>
            </section>

            <div className="grid gap-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs">1</span>
                  Information We Collect
                </h2>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-brand-primary/20 transition-colors">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">a) Information You Provide</h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Account details:</strong> Name, email address, phone number, and login credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Payment information:</strong> Billing details, processed through secure third-party payment gateways</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Vehicle information:</strong> Details you enter manually (make, model, VIN, etc.)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-brand-primary/20 transition-colors">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-[10px]">b) Information Collected Automatically</h3>
                    <ul className="space-y-3 text-sm font-medium">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Vehicle diagnostics:</strong> Data retrieved from your vehicle’s OBD system (e.g., fault codes, mileage, engine data)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Device data:</strong> Device model, operating system, IP address, app version</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                        <span><strong className="text-slate-800">Usage data:</strong> Pages visited, app features used, error logs, and crash reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs">2</span>
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {[
                    "Providing and maintaining our Services",
                    "Generating diagnostic reports and performance insights",
                    "Troubleshooting and improving app performance",
                    "Sending important service-related notifications",
                    "Fraud prevention and security monitoring",
                    "Compliance with legal obligations"
                  ].map((use, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-brand-primary shadow-xs group-hover:scale-110 transition-transform">
                        <Globe className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-700 leading-tight">{use}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs">3</span>
                  Data Storage & Retention
                </h2>
                <div className="prose prose-slate font-medium text-slate-500 space-y-4">
                  <p>Your data is stored on secure servers located in India and/or abroad with industry-standard encryption.</p>
                  <p>Vehicle diagnostic data may be stored for up to <span className="text-slate-900 font-bold">3 years</span> for historical reporting and analytics.</p>
                  <p>Personal data is retained only as long as necessary for the purposes outlined in this Privacy Policy or as required by law.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs">4</span>
                  Data Sharing
                </h2>
                <div className="prose prose-slate font-medium text-slate-500 space-y-4">
                  <p className="p-4 bg-amber-50 border border-amber-100 rounded-2xl text-amber-900 font-bold">We do not sell your personal data.</p>
                  <p>We may share information in the following cases:</p>
                  <ul className="space-y-2 list-none p-0">
                    <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-brand-primary" /> <strong>Service Providers:</strong> With trusted third parties for hosting, analytics, payment processing, and technical support</li>
                    <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-brand-primary" /> <strong>Legal Obligations:</strong> When required by law, legal processes, or to protect our rights</li>
                    <li className="flex gap-3 items-center"><div className="w-2 h-2 rounded-full bg-brand-primary" /> <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-xs">5</span>
                  Your Rights
                </h2>
                <div className="prose prose-slate font-medium text-slate-500">
                  <p>Depending on your location, you may have rights to:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {[
                      "Access, correct, or delete your personal information",
                      "Withdraw consent for certain processing activities",
                      "Request a copy of your data in a portable format",
                      "Object to certain uses of your data"
                    ].map((right, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-xs">
                        <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                        <span className="text-sm font-bold text-slate-700">{right}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
                    To exercise these rights, contact <a href="mailto:support@obdsmart.in" className="text-brand-primary font-bold hover:underline">support@obdsmart.in</a>. We will respond within the time frame required by applicable law.
                  </p>
                </div>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">6. Data Security</h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    We use encryption, firewalls, and access controls to safeguard your data. However, no system is 100% secure, and we cannot guarantee absolute security of your data.
                  </p>
                </section>
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">7. Cookies & Tracking</h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Our app and website may use cookies to remember user preferences, track app performance, and improve user experience. You can disable cookies in your settings.
                  </p>
                </section>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">8. Children’s Privacy</h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    Our Services are not directed to individuals under 18. We do not knowingly collect personal data from minors.
                  </p>
                </section>
                <section className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900">9. International Users</h2>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    If you access OBDSmart from outside India, your information may be transferred to, stored, and processed in India and other jurisdictions.
                  </p>
                </section>
              </div>

              <section className="p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/10 blur-[80px] pointer-events-none" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-teal-400 mt-1 shrink-0" />
                        <div>
                          <p className="font-bold text-lg">OBDSmart</p>
                          <p className="text-slate-400 text-sm font-medium">Sachu Nilaya Apartment, 1st Cross Rd, Kasavanahalli<br />Bengaluru, Karnataka, India , 560035</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                        <a href="mailto:support@obdsmart.in" className="font-bold text-slate-100 hover:text-white transition-colors">support@obdsmart.in</a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                        <a href="tel:+919608119919" className="font-bold text-slate-100 hover:text-white transition-colors">+91-9608119919</a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
                    <h3 className="text-xl font-bold mb-4">Questions?</h3>
                    <p className="text-slate-400 text-sm font-medium mb-6">Our security and legal team is ready to help you with any privacy-related queries.</p>
                    <a href="mailto:support@obdsmart.in" className="btn-primary w-full py-4 text-center">Send Inquiry</a>
                  </div>
                </div>
              </section>

              <section className="text-center pt-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  10. Changes to This Privacy Policy
                </p>
                <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                  We may update this policy. Significant changes will be notified through the app or website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer (Simplified for Privacy Page) */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                <Image src="/logo.png" alt="OBD logo" fill className="p-1.5 object-contain" />
             </div>
             <span className="text-sm font-bold tracking-tight text-slate-900">© 2026 OBD SMART</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link href="/login" className="hover:text-slate-900 transition-colors">Login</Link>
            <Link href="/signup" className="hover:text-slate-900 transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
