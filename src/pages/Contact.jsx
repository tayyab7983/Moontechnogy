// import { useLayoutEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Mail, Phone, MapPin, ArrowRight, Check, Loader2 } from "lucide-react";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
//  import emailjs from "@emailjs/browser";
// import { useRef } from "react";
// gsap.registerPlugin(ScrollTrigger);
//  const form = useRef();
// const initialForm = {
//   name: "",
//   email: "",
//   company: "",
//   service: "",
//   message: "",
// };

// const contactRows = [
//   { icon: Mail, label: "Email", value: "hello@moontechnogy.com" },
//   { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
//   { icon: MapPin, label: "Location", value: "India · Remote-first" },
// ];

// // Fixed-height wrapper: label + input stay put, error floats below
// // without ever shifting the row's height or the next row's position.
// function Field({ label, error, children }) {
//   return (
//     <div className="relative">
//       <label className="block text-[11px] uppercase tracking-[3px] text-gray-500 mb-2.5">
//         {label}
//       </label>
//       {children}
//       <p
//         className={`absolute left-0 top-full mt-1.5 text-xs text-red-400/90 duration-200 ${
//           error ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {error || " "}
//       </p>
//     </div>
//   );
// }

// const fieldClasses = (hasError, hasValue = true) =>
//   `w-full bg-transparent border-b ${
//     hasError ? "border-red-500/60" : "border-white/15 focus:border-[#d4af37]"
//   } outline-none py-3 text-[15px] ${
//     hasValue ? "text-white" : "text-gray-600"
//   } placeholder:text-gray-600 duration-200`;

// function Contact() {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle"); // idle | sending | sent
//   const sectionRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".contactReveal", {
//         opacity: 0,
//         y: 40,
//         duration: 0.9,
//         ease: "power3.out",
//         stagger: 0.12,
//         scrollTrigger: {
//           trigger: ".contactGrid",
//           start: "top 80%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
//   };

//   const validate = () => {
//     const next = {};
//     if (!form.name.trim()) next.name = "Name is required";
//     if (!form.email.trim()) {
//       next.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       next.email = "Enter a valid email";
//     }
//     if (!form.message.trim()) next.message = "Add a short summary";
//     setErrors(next);
//     return Object.keys(next).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setStatus("sending");
//     try {
//       // TODO: replace with your real API endpoint / email service call
//       // await fetch("/api/contact", {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify(form),
//       // });
//       await new Promise((resolve) => setTimeout(resolve, 1200));

//       setStatus("sent");
//       setForm(initialForm);
//       setTimeout(() => setStatus("idle"), 4000);
//     } catch (err) {
//       console.error("Failed to send message:", err);
//       setStatus("idle");
//       setErrors((prev) => ({
//         ...prev,
//         form: "Something went wrong. Please try again.",
//       }));
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <section
//         ref={sectionRef}
//         className="relative overflow-hidden bg-[#050505] text-white"
//       >
//         <div className="absolute inset-0 bg-grid opacity-[0.07]"></div>
//         <div className="absolute -left-52 top-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#d4af37]/[0.08] blur-[180px]"></div>
//         <div className="absolute right-0 bottom-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#d4af37]/[0.06] blur-[180px]"></div>

//         <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-10">
//           {/* HERO */}
//           <section className="min-h-[85vh] sm:min-h-screen flex items-center pt-24 lg:pt-0">
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] pl-3.5 pr-5 py-2"
//               >
//                 <span className="relative flex h-2 w-2">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
//                 </span>
//                 <span className="text-xs sm:text-sm tracking-[2px] text-gray-300">
//                   Currently accepting new projects
//                 </span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="
//                 mt-7
//                 sm:mt-9
//                 font-serif
//                 leading-[1.02]
//                 text-[42px]
//                 sm:text-[56px]
//                 md:text-[74px]
//                 lg:text-[92px]
//                 max-w-[16ch]
//                 "
//               >
//                 Let&apos;s discuss your next project.
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.35 }}
//                 className="mt-6 sm:mt-8 max-w-[560px] text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-400"
//               >
//                 Tell us where your business is headed. We&apos;ll reply
//                 within one business day with next steps.
//               </motion.p>
//             </div>
//           </section>

//           {/* CONTACT */}
//           <section className="pb-24 sm:pb-32 lg:pb-40">
//             <div className="h-px w-full bg-white/10 mb-16 sm:mb-20"></div>

//             <div className="contactGrid grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
//               {/* LEFT — info panel */}
//               <div className="contactReveal lg:col-span-5">
//                 <p className="text-xs uppercase tracking-[4px] text-[#d4af37]">
//                   Get in touch
//                 </p>
//                 <h2 className="mt-4 text-2xl sm:text-3xl font-serif leading-snug max-w-[24ch]">
//                   Reach out directly, or fill out the form.
//                 </h2>

//                 <div className="mt-10 sm:mt-12 divide-y divide-white/10 border-t border-white/10">
//                   {contactRows.map(({ icon: Icon, label, value }) => (
//                     <div
//                       key={label}
//                       className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6"
//                     >
//                       <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
//                         <Icon size={16} className="text-[#d4af37]" />
//                       </div>
//                       <div className="min-w-0">
//                         <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
//                           {label}
//                         </p>
//                         <p className="mt-1 text-sm sm:text-base text-gray-200 truncate">
//                           {value}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-10 sm:mt-12 flex items-baseline gap-3">
//                   <span className="font-serif text-3xl sm:text-4xl text-[#d4af37]">
//                     24hr
//                   </span>
//                   <span className="text-sm text-gray-500">
//                     average first response time
//                   </span>
//                 </div>
//               </div>

//               {/* RIGHT — form */}
//               <div className="contactReveal lg:col-span-7">
//                 <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-9 lg:p-10">
//                   <h2 className="text-xl sm:text-2xl font-semibold">
//                     Project inquiry
//                   </h2>

//                   <form
//                     onSubmit={handleSubmit}
//                     noValidate
//                     className="mt-8 sm:mt-9 space-y-9 sm:space-y-10"
//                   >
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9 sm:gap-y-10">
//                       <Field label="Full name" error={errors.name}>
//                         <input
//                           type="text"
//                           name="name"
//                           value={form.name}
//                           onChange={handleChange}
//                           placeholder="Jane Doe"
//                           className={fieldClasses(errors.name)}
//                         />
//                       </Field>

//                       <Field label="Email" error={errors.email}>
//                         <input
//                           type="email"
//                           name="email"
//                           value={form.email}
//                           onChange={handleChange}
//                           placeholder="jane@company.com"
//                           className={fieldClasses(errors.email)}
//                         />
//                       </Field>

//                       <Field label="Company">
//                         <input
//                           type="text"
//                           name="company"
//                           value={form.company}
//                           onChange={handleChange}
//                           placeholder="Company name"
//                           className={fieldClasses(false)}
//                         />
//                       </Field>

//                       <Field label="Service">
//                         <select
//                           name="service"
//                           value={form.service}
//                           onChange={handleChange}
//                           className={`${fieldClasses(
//                             false,
//                             !!form.service
//                           )} appearance-none cursor-pointer`}
//                         >
//                           <option value="" className="bg-[#0b0b0b] text-gray-500">
//                             Select one
//                           </option>
//                           <option value="website" className="bg-[#0b0b0b] text-white">
//                             Website Development
//                           </option>
//                           <option value="ai" className="bg-[#0b0b0b] text-white">
//                             AI Automation
//                           </option>
//                           <option value="saas" className="bg-[#0b0b0b] text-white">
//                             SaaS Product
//                           </option>
//                           <option value="mobile" className="bg-[#0b0b0b] text-white">
//                             Mobile App Development
//                           </option>
//                         </select>
//                       </Field>
//                     </div>

//                     <Field label="Project summary" error={errors.message}>
//                       <textarea
//                         name="message"
//                         value={form.message}
//                         onChange={handleChange}
//                         rows="4"
//                         placeholder="What are you building?"
//                         className={`${fieldClasses(errors.message)} resize-none`}
//                       ></textarea>
//                     </Field>

//                     {errors.form && (
//                       <p className="text-sm text-red-400">{errors.form}</p>
//                     )}

//                     <button
//                       type="submit"
//                       disabled={status === "sending"}
//                       className="
//                       group
//                       inline-flex
//                       w-full
//                       sm:w-auto
//                       items-center
//                       justify-center
//                       gap-3
//                       rounded-lg
//                       bg-[#d4af37]
//                       px-8
//                       py-3.5
//                       text-sm
//                       sm:text-base
//                       font-semibold
//                       text-black
//                       duration-300
//                       hover:bg-[#e0bd4a]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-70
//                       "
//                     >
//                       <AnimatePresence mode="wait" initial={false}>
//                         {status === "sending" ? (
//                           <motion.span
//                             key="sending"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex items-center gap-2"
//                           >
//                             <Loader2 size={16} className="animate-spin" />
//                             Sending
//                           </motion.span>
//                         ) : status === "sent" ? (
//                           <motion.span
//                             key="sent"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex items-center gap-2"
//                           >
//                             <Check size={16} />
//                             Sent — we&apos;ll be in touch
//                           </motion.span>
//                         ) : (
//                           <motion.span
//                             key="idle"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             className="flex items-center gap-2 group-hover:gap-3 duration-300"
//                           >
//                             Send inquiry
//                             <ArrowRight
//                               size={16}
//                               className="group-hover:translate-x-0.5 duration-300"
//                             />
//                           </motion.span>
//                         )}
//                       </AnimatePresence>
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Contact;
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, ArrowRight, Check, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const initialForm = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

const contactRows = [
  { icon: Mail, label: "Email", value: "hello@moontechnogy.com" },
  { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
  { icon: MapPin, label: "Location", value: "India · Remote-first" },
];

function Field({ label, error, children }) {
  return (
    <div className="relative">
      <label className="block text-[11px] uppercase tracking-[3px] text-gray-500 mb-2.5">
        {label}
      </label>
      {children}
      <p
        className={`absolute left-0 top-full mt-1.5 text-xs text-red-400/90 duration-200 ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        {error || " "}
      </p>
    </div>
  );
}

const fieldClasses = (hasError, hasValue = true) =>
  `w-full bg-transparent border-b ${
    hasError ? "border-red-500/60" : "border-white/15 focus:border-[#d4af37]"
  } outline-none py-3 text-[15px] ${
    hasValue ? "text-white" : "text-gray-600"
  } placeholder:text-gray-600 duration-200`;

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contactReveal", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".contactGrid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!form.message.trim()) next.message = "Add a short summary";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_jn6237p",
        "template_bu63ru6",
        formRef.current,
        "xzrhWjj8IRGRVU7tz"
      );

      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus("idle");
      setErrors((prev) => ({
        ...prev,
        form: "Something went wrong. Please try again.",
      }));
    }
  };

  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#050505] text-white"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.07]"></div>
        <div className="absolute -left-52 top-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#d4af37]/[0.08] blur-[180px]"></div>
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#d4af37]/[0.06] blur-[180px]"></div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-10">
          <section className="min-h-[85vh] sm:min-h-screen flex items-center pt-24 lg:pt-0">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] pl-3.5 pr-5 py-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
                </span>
                <span className="text-xs sm:text-sm tracking-[2px] text-gray-300">
                  Currently accepting new projects
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="
                mt-7
                sm:mt-9
                font-serif
                leading-[1.02]
                text-[42px]
                sm:text-[56px]
                md:text-[74px]
                lg:text-[92px]
                max-w-[16ch]
                "
              >
                Let&apos;s discuss your next project.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-6 sm:mt-8 max-w-[560px] text-[15px] sm:text-lg leading-7 sm:leading-8 text-gray-400"
              >
                Tell us where your business is headed. We&apos;ll reply
                within one business day with next steps.
              </motion.p>
            </div>
          </section>

          <section className="pb-24 sm:pb-32 lg:pb-40">
            <div className="h-px w-full bg-white/10 mb-16 sm:mb-20"></div>

            <div className="contactGrid grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
              <div className="contactReveal lg:col-span-5">
                <p className="text-xs uppercase tracking-[4px] text-[#d4af37]">
                  Get in touch
                </p>
                <h2 className="mt-4 text-2xl sm:text-3xl font-serif leading-snug max-w-[24ch]">
                  Reach out directly, or fill out the form.
                </h2>

                <div className="mt-10 sm:mt-12 divide-y divide-white/10 border-t border-white/10">
                  {contactRows.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 sm:gap-5 py-5 sm:py-6"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                        <Icon size={16} className="text-[#d4af37]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
                          {label}
                        </p>
                        <p className="mt-1 text-sm sm:text-base text-gray-200 truncate">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 sm:mt-12 flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl text-[#d4af37]">
                    24hr
                  </span>
                  <span className="text-sm text-gray-500">
                    average first response time
                  </span>
                </div>
              </div>

              <div className="contactReveal lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-9 lg:p-10">
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Project inquiry
                  </h2>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="mt-8 sm:mt-9 space-y-9 sm:space-y-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9 sm:gap-y-10">
                      <Field label="Full name" error={errors.name}>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className={fieldClasses(errors.name)}
                        />
                      </Field>

                      <Field label="Email" error={errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className={fieldClasses(errors.email)}
                        />
                      </Field>

                      <Field label="Company">
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className={fieldClasses(false)}
                        />
                      </Field>

                      <Field label="Service">
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${fieldClasses(
                            false,
                            !!form.service
                          )} appearance-none cursor-pointer`}
                        >
                          <option value="" className="bg-[#0b0b0b] text-gray-500">
                            Select one
                          </option>
                          <option value="website" className="bg-[#0b0b0b] text-white">
                            Website Development
                          </option>
                          <option value="ai" className="bg-[#0b0b0b] text-white">
                            AI Automation
                          </option>
                          <option value="saas" className="bg-[#0b0b0b] text-white">
                            SaaS Product
                          </option>
                          <option value="mobile" className="bg-[#0b0b0b] text-white">
                            Mobile App Development
                          </option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Project summary" error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="What are you building?"
                        className={`${fieldClasses(errors.message)} resize-none`}
                      ></textarea>
                    </Field>

                    {errors.form && (
                      <p className="text-sm text-red-400">{errors.form}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="
                      group
                      inline-flex
                      w-full
                      sm:w-auto
                      items-center
                      justify-center
                      gap-3
                      rounded-lg
                      bg-[#d4af37]
                      px-8
                      py-3.5
                      text-sm
                      sm:text-base
                      font-semibold
                      text-black
                      duration-300
                      hover:bg-[#e0bd4a]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                      "
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {status === "sending" ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 size={16} className="animate-spin" />
                            Sending
                          </motion.span>
                        ) : status === "sent" ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Check size={16} />
                            Sent — we&apos;ll be in touch
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 group-hover:gap-3 duration-300"
                          >
                            Send inquiry
                            <ArrowRight
                              size={16}
                              className="group-hover:translate-x-0.5 duration-300"
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;