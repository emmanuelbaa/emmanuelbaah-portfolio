import { AppearOnScroll } from "../AppearOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        setStatus({ type: "success", message: "Message sent successfully." });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden
      bg-gradient-to-r from-[#4f47c8]/20 via-[#dbe5ff]/60 to-[#1dd5d0]/10
      px-4 py-24 sm:px-6 lg:px-8"
    >
      <AppearOnScroll>
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-indigo-400/15 blur-3xl" />
          <div className="absolute right-10 top-20 h-28 w-28 rounded-full border-2 border-dashed border-[#1e3a8a]/25" />
          <div className="absolute bottom-20 left-10 h-20 w-20 rounded-full border border-cyan-400/30" />
        </div>

        <div className="mx-auto w-full max-w-4xl">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#1e3a8a] sm:text-5xl">
              Let's Work Together
            </h2>

            <div className="mx-auto mt-3 h-1 w-24 rounded bg-gradient-to-r from-cyan-400 to-blue-600" />

            <p className="mx-auto mt-6 max-w-xl text-slate-700">
              Have a project idea, collaboration, or opportunity?  
              Send me a message and I'll get back to you soon.
            </p>
          </div>

          {/* Contact Card */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-white/40 bg-white/50
            p-8 shadow-2xl backdrop-blur-md transition-all hover:-translate-y-1"
          >
            {/* Name */}
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-[#1e3a8a]">
                Name
              </label>

              <User className="absolute left-3 top-[42px] h-5 w-5 text-slate-500" />

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                required
                className="w-full rounded-md border border-[#1e3a8a]/20
                bg-white/60 pl-10 pr-4 py-3 text-slate-800
                placeholder:text-slate-500 transition
                focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-[#1e3a8a]">
                Email
              </label>

              <Mail className="absolute left-3 top-[42px] h-5 w-5 text-slate-500" />

              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@email.com"
                required
                className="w-full rounded-md border border-[#1e3a8a]/20
                bg-white/60 pl-10 pr-4 py-3 text-slate-800
                placeholder:text-slate-500 transition
                focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label className="mb-2 block text-sm font-medium text-[#1e3a8a]">
                Message
              </label>

              <MessageSquare className="absolute left-3 top-[44px] h-5 w-5 text-slate-500" />

              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                required
                className="w-full resize-none rounded-md border border-[#1e3a8a]/20
                bg-white/60 pl-10 pr-4 py-3 text-slate-800
                placeholder:text-slate-500 transition
                focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2
              rounded-md bg-gradient-to-r from-cyan-500 to-blue-600
              py-3 text-lg font-medium text-white
              transition hover:-translate-y-0.5
              hover:shadow-[0_0_30px_rgba(0,255,255,0.45)]
              disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={18} />
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status.message ? (
              <p
                className={`text-center text-sm ${
                  status.type === "success"
                    ? "text-emerald-700"
                    : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>

        </div>
      </AppearOnScroll>
    </section>
  );
};