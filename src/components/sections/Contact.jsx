import { AppearOnScroll } from "../AppearOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Mail, User, MessageSquare, Send, Loader2, MapPin, Globe } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        setStatus({ type: "success", message: "Message sent! I'll be in touch soon." });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: error?.text || "Something went wrong. Please try again.",
        });
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950/90 py-24 px-6 overflow-hidden text-slate-100"
    >
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[140px] -mr-56 -mt-56" />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-500/20 rounded-full blur-[140px] -ml-56 -mb-56" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }} />
      </div>

      <AppearOnScroll>
        <div className="mx-auto max-w-6xl w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Info */}
            <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black text-white md:text-7xl">
                Get in <span className="text-cyan-400">Touch.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-md">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-cyan-500" />, label: "Email", value: "your-email@example.com" },
                  { icon: <MapPin className="text-indigo-500" />, label: "Location", value: "Blacksburg, VA" },
                  { icon: <Globe className="text-emerald-500" />, label: "Availability", value: "Open for worldwide remote work" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)] transition-transform hover:scale-105">
                    <div className="p-3 rounded-xl bg-slate-800">{item.icon}</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="relative">
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-[0_25px_70px_-30px_rgba(2,6,23,0.8)] backdrop-blur-3xl md:p-10"
              >
                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="group relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                    <div className="relative mt-2">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 py-4 pl-12 pr-4 text-slate-100 transition-all focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="group relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-2xl border border-slate-700 bg-slate-900/70 py-4 pl-12 pr-4 text-slate-100 transition-all focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-400/20"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="group relative">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <div className="relative mt-2">
                      <MessageSquare className="absolute left-4 top-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        required
                        className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900/70 py-4 pl-12 pr-4 text-slate-100 transition-all focus:border-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400/20"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-cyan-500 py-4 font-bold text-slate-950 transition-all hover:bg-cyan-400 active:scale-[0.98] disabled:opacity-70"
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`rounded-xl p-4 text-center text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-900/80 text-emerald-200"
                        : "bg-red-900/80 text-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </AppearOnScroll>
    </section>
  );
};
