"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log("Contact Form Data:", data)

    e.currentTarget.reset()

    setTimeout(() => {
      setIsPending(false)
      setSubmitted(true)

      window.setTimeout(() => {
        setSubmitted(false)
      }, 4000)
    }, 900)
  }

  // Nagar Panchayat Kushmara Google Maps URL
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Nagar+Panchayat+Karyalaya+Kushmara+Mainpuri+Uttar+Pradesh+205301"

  return (
    <main
      id="contact-us"
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#fffdf0] via-[#fffbeb] to-[#fef3c7] px-4 py-16 font-sans md:px-8 md:py-24"
    >
      {/* =====================================================
          PREMIUM BACKGROUND GRID (Yellow Tinted)
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#d97706 1px, transparent 1px), linear-gradient(90deg, #d97706 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* Warm Yellow & Amber Ambient Lights */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-amber-300/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-yellow-400/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-amber-800 uppercase shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            नागरिक संपर्क केंद्र
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl font-black tracking-tight text-[#451a03] md:text-6xl">
            Get in{" "}
            <span className="bg-linear-to-r from-amber-600 via-yellow-500 to-emerald-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mt-3 text-sm font-bold text-amber-900/70 md:text-base">
            संपर्क कार्यालय • Contact Nagar Panchayat Kushmara, Mainpuri
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 font-medium text-slate-700 md:text-base">
            आपके सुझाव, शिकायतें और प्रश्न हमारे लिए महत्वपूर्ण हैं।
            नगर पंचायत कुसमरा, मैनपुरी से संबंधित किसी भी जानकारी,
            नागरिक सेवा या सहायता के लिए हमसे संपर्क करें।
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-yellow-500" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300 bg-amber-50">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            </span>
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-emerald-400 to-teal-500" />
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
          {/* ===================================================
              CONTACT INFORMATION
          ==================================================== */}
          <motion.section
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="group relative h-full overflow-hidden rounded-[30px] border border-amber-200/80 bg-white/95 p-6 shadow-[0_15px_45px_rgba(217,119,6,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(217,119,6,0.15)] md:p-7">
              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-amber-400 via-yellow-500 to-emerald-500" />

              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[9px] font-black tracking-wider text-amber-800 uppercase">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Official Contact
                    </div>

                    <h2 className="font-serif text-2xl font-black tracking-tight text-[#451a03]">
                      Contact Information
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 font-medium text-slate-600">
                      किसी भी नागरिक सेवा, जानकारी या नगर पंचायत संबंधी
                      सहायता के लिए हमसे संपर्क करें।
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200 sm:flex">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="space-y-3.5">
                  <div className="group/item flex items-start gap-4 rounded-2xl border border-amber-100 bg-linear-to-r from-amber-50/80 to-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-md transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-2">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-black tracking-[0.12em] text-amber-700 uppercase">
                        Office Address
                      </p>

                      <p className="mt-1 text-xs leading-5 font-bold text-slate-800">
                        Nagar Panchayat Karyalaya,
                        <br />
                        Kushmara, Mainpuri,
                        <br />
                        Uttar Pradesh - 205301
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="group/item flex items-start gap-4 rounded-2xl border border-blue-100 bg-linear-to-r from-blue-50/80 to-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-md transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-2">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[9px] font-black tracking-[0.12em] text-blue-600 uppercase">
                        Nagar Panchayat Contact
                      </p>

                      <Link
                        href="tel:05673205301"
                        className="mt-1 block text-xs font-black text-slate-800 transition-colors hover:text-blue-600 hover:underline"
                      >
                        +91 05673 205301
                      </Link>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="group/item flex items-start gap-4 rounded-2xl border border-amber-100 bg-linear-to-r from-amber-50/80 to-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/60">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-500 text-white shadow-md transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-2">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-black tracking-[0.12em] text-amber-700 uppercase">
                        Email
                      </p>

                      <p className="mt-1 text-xs font-bold text-slate-500">
                        npkushmara@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* OFFICE DETAILS */}
                <div className="mt-7 space-y-3 border-t border-amber-100 pt-6">
                  <div className="flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50/50 p-3.5 transition-all hover:bg-amber-50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                      <Clock3 className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-[#451a03]">
                        Office Information
                      </h4>

                      <p className="mt-0.5 text-[10px] font-medium text-slate-600">
                        Nagar Panchayat Office • Kushmara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5 transition-all hover:bg-emerald-50">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="h-4 w-4" />
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-emerald-800">
                        Citizen Support
                      </h4>

                      <p className="mt-0.5 text-[10px] font-medium text-slate-600">
                        नागरिक सेवाओं एवं शिकायत संबंधी सहायता के लिए
                        संपर्क करें।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Official portal */}
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50/80 p-4">
                  <div>
                    <p className="text-[9px] font-black tracking-wider text-amber-800 uppercase">
                      Local Urban Body
                    </p>

                    <p className="mt-1 text-xs font-black text-[#451a03]">
                      Nagar Panchayat Kushmara
                    </p>

                    <p className="mt-0.5 text-[10px] font-medium text-slate-600">
                      Mainpuri, Uttar Pradesh
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ===================================================
              CONTACT FORM
          ==================================================== */}
          <motion.section
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative h-full overflow-hidden rounded-[30px] border border-amber-200/80 bg-white/95 shadow-[0_15px_45px_rgba(217,119,6,0.08)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-amber-400 via-yellow-500 to-emerald-500" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-yellow-300/15 blur-3xl" />

              <div className="relative z-10 p-6 md:p-8">
                {/* Form Header */}
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[9px] font-black tracking-wider text-amber-800 uppercase">
                      <Send className="h-3 w-3" />
                      Online Enquiry
                    </div>

                    <h2 className="font-serif text-2xl font-black tracking-tight text-[#451a03]">
                      Send Us a Message
                    </h2>

                    <p className="mt-1.5 text-xs font-medium text-slate-600">
                      अपना संदेश दर्ज करें। हमारी टीम आवश्यकतानुसार आपसे
                      संपर्क करेगी।
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200 sm:flex">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* SUCCESS STATE */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      className="flex min-h-[430px] flex-col items-center justify-center text-center"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-2xl" />

                        <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] bg-linear-to-br from-amber-400 to-yellow-600 text-white shadow-xl shadow-amber-200">
                          <CheckCircle2 className="h-12 w-12" />
                        </div>
                      </div>

                      <h3 className="mt-7 text-2xl font-black text-[#451a03]">
                        Message Sent Successfully!
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 font-medium text-slate-600">
                        धन्यवाद! आपका संदेश नगर पंचायत कुसमरा, मैनपुरी के
                        लिए सफलतापूर्वक प्राप्त हो गया है।
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-[10px] font-bold text-amber-800">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
                        Enquiry Successfully Registered
                      </div>
                    </motion.div>
                  ) : (
                    /* FORM */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={onSubmit}
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-name"
                            className="text-[10px] font-black tracking-wider text-slate-700 uppercase"
                          >
                            Your Name
                          </Label>

                          <Input
                            id="contact-name"
                            name="name"
                            required
                            type="text"
                            autoComplete="name"
                            disabled={isPending}
                            placeholder="Enter your full name"
                            className="h-11 rounded-xl border-amber-200/80 bg-amber-50/30 px-4 text-xs font-semibold transition-all placeholder:text-slate-400 hover:border-amber-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-email"
                            className="text-[10px] font-black tracking-wider text-slate-700 uppercase"
                          >
                            Email Address
                          </Label>

                          <Input
                            id="contact-email"
                            name="email"
                            required
                            type="email"
                            autoComplete="email"
                            disabled={isPending}
                            placeholder="Enter your email"
                            className="h-11 rounded-xl border-amber-200/80 bg-amber-50/30 px-4 text-xs font-semibold transition-all placeholder:text-slate-400 hover:border-amber-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                          />
                        </div>
                      </div>

                      {/* Phone + Subject */}
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-phone"
                            className="text-[10px] font-black tracking-wider text-slate-700 uppercase"
                          >
                            Phone Number
                          </Label>

                          <Input
                            id="contact-phone"
                            name="phone"
                            required
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            maxLength={10}
                            pattern="[1-9][0-9]{9}"
                            disabled={isPending}
                            placeholder="10-digit mobile number"
                            className="h-11 rounded-xl border-amber-200/80 bg-amber-50/30 px-4 text-xs font-semibold transition-all placeholder:text-slate-400 hover:border-amber-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                            onChange={(e) => {
                              e.target.value = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10)
                            }}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="contact-subject"
                            className="text-[10px] font-black tracking-wider text-slate-700 uppercase"
                          >
                            Subject
                          </Label>

                          <Input
                            id="contact-subject"
                            name="subject"
                            required
                            type="text"
                            disabled={isPending}
                            placeholder="Message subject"
                            className="h-11 rounded-xl border-amber-200/80 bg-amber-50/30 px-4 text-xs font-semibold transition-all placeholder:text-slate-400 hover:border-amber-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label
                          htmlFor="contact-message"
                          className="text-[10px] font-black tracking-wider text-slate-700 uppercase"
                        >
                          Your Message
                        </Label>

                        <Textarea
                          id="contact-message"
                          name="message"
                          required
                          disabled={isPending}
                          rows={6}
                          placeholder="Write your message or enquiry..."
                          className="resize-none rounded-xl border-amber-200/80 bg-amber-50/30 px-4 py-3 text-xs font-semibold transition-all placeholder:text-slate-400 hover:border-amber-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-100"
                        />
                      </div>

                      {/* Privacy */}
                      <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-3">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />

                        <p className="text-[9px] leading-4 font-medium text-slate-600">
                          आपकी जानकारी केवल आपकी enquiry को process करने
                          और आवश्यक संपर्क के लिए उपयोग की जाएगी।
                        </p>
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isPending}
                        className="group h-12 w-full cursor-pointer rounded-xl bg-linear-to-r from-amber-500 via-yellow-600 to-emerald-600 text-xs font-black text-white shadow-lg shadow-amber-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-amber-600 hover:via-yellow-500 hover:to-emerald-500 hover:shadow-xl hover:shadow-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <span>
                          {isPending ? "Sending Message..." : "Send Message"}
                        </span>

                        <Send
                          className={`ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                            isPending ? "animate-pulse" : ""
                          }`}
                        />
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.section>
        </div>

        {/* =====================================================
            GOOGLE MAP
        ====================================================== */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-7 overflow-hidden rounded-[30px] border border-amber-200/80 bg-white/95 p-5 shadow-[0_15px_45px_rgba(217,119,6,0.08)] backdrop-blur-xl md:p-7"
        >
          {/* Map Header */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[9px] font-black tracking-wider text-amber-800 uppercase">
                <MapPin className="h-3 w-3" />
                Find Our Office
              </div>

              <h2 className="font-serif text-2xl font-black tracking-tight text-[#451a03]">
                Nagar Panchayat Kushmara
              </h2>

              <p className="mt-1 text-xs font-medium text-slate-600">
                Kushmara, Mainpuri, Uttar Pradesh - 205301
              </p>
            </div>

            {/* Open Google Maps */}
            <Link
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-yellow-600 px-4 py-3 text-[10px] font-black text-white shadow-lg shadow-amber-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-amber-600 hover:to-yellow-500 hover:shadow-xl hover:shadow-amber-300"
            >
              <Navigation className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />

              <span>Open in Google Maps</span>

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* KUSHMARA MAP IFRAME */}
          <div className="group relative mt-6 h-[380px] w-full overflow-hidden rounded-[24px] border border-amber-200 bg-amber-50">
            <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-[#d97706]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <iframe
              src="https://www.google.com/maps?q=Nagar+Panchayat+Karyalaya+Kushmara+Mainpuri+Uttar+Pradesh+205301&output=embed"
              className="h-full w-full border-0 grayscale-[10%] transition-all duration-700 group-hover:grayscale-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nagar Panchayat Kushmara Mainpuri Location Map"
            />
          </div>

          {/* Map Footer */}
          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-600" />

              <span className="text-[10px] font-bold text-slate-700">
                Nagar Panchayat Karyalaya, Kushmara, Mainpuri, Uttar Pradesh - 205301
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />

              <span className="text-[9px] font-black tracking-wider text-amber-800 uppercase">
                Official Location
              </span>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
