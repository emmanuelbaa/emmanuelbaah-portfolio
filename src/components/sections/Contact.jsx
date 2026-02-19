import { AppearOnScroll } from "../AppearOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center
                 px-4 sm:px-6 lg:px-8 py-24"
    >
      <AppearOnScroll>
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2
                          h-56 w-56 sm:h-64 sm:w-64
                          rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-16 right-1/3
                          h-48 w-48 sm:h-56 sm:w-56
                          rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>

        <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
         
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl
                       font-bold mb-10 sm:mb-14 text-center
                       bg-gradient-to-r from-cyan-400 to-fuchsia-500
                       bg-clip-text text-transparent"
          >
            Get in Touch
          </h2>

        
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 sm:space-y-7
                       rounded-2xl border border-white/10
                       bg-white/5 p-6 sm:p-8 lg:p-10
                       backdrop-blur-lg transition-all
                       hover:-translate-y-1"
          >
         
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your Name"
              required
              className="w-full rounded-md px-4 py-3
                         text-white placeholder:text-white/60
                         bg-white/5 border border-white/10
                         transition focus:outline-none
                         focus:ring-2 focus:ring-cyan-400"
            />

           
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="example@email.com"
              required
              className="w-full rounded-md px-4 py-3
                         text-white placeholder:text-white/60
                         bg-white/5 border border-white/10
                         transition focus:outline-none
                         focus:ring-2 focus:ring-cyan-400"
            />

         
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message..."
              required
              className="w-full rounded-md px-4 py-3
                         text-white placeholder:text-white/60
                         bg-white/5 border border-white/10
                         transition focus:outline-none
                         focus:ring-2 focus:ring-cyan-400
                         resize-none"
            />

            
            <button
              type="submit"
              className="w-full py-3 sm:py-3.5
                         text-base sm:text-lg font-medium
                         text-white rounded-md bg-cyan-500
                         transition hover:bg-cyan-600
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.55)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </AppearOnScroll>
    </section>
  );
};
