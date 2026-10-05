"use client"

import { m, TargetAndTransition, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Droplets,
  Eye,
  FileCheck,
  FileText,
  Landmark,
  MapPin,
  MessageSquareWarning,
  Receipt,
  ShieldCheck,
  Sparkles,
  Target,
  Trees,
  Users,
} from "lucide-react"
import Link from "next/link"
import React from "react"
import { Card } from "@workspace/ui/components/card"

const services = [
  {
    title: "संपत्ति एवं गृह कर",
    english: "Property Tax",
    description:
      "नगर पंचायत कुसमरा से संबंधित संपत्ति कर, कर विवरण, बकाया राशि एवं ऑनलाइन भुगतान की नागरिक सेवाएं।",
    icon: Receipt,
    theme: {
      card:
        "border-amber-200 bg-linear-to-br from-white via-amber-50/80 to-yellow-50",
      icon: "bg-linear-to-br from-amber-500 to-yellow-600 text-white",
      badge: "bg-amber-100 text-amber-800",
      hover:
        "group-hover:border-amber-400 group-hover:shadow-amber-200/80",
      line: "bg-linear-to-r from-amber-400 to-yellow-500",
    },
  },
  {
    title: "जल आपूर्ति एवं जलकर",
    english: "Water Services",
    description:
      "जल कनेक्शन, जलकर, जल बिल, जलापूर्ति एवं जल संबंधी नागरिक सुविधाओं तक आसान डिजिटल पहुंच।",
    icon: Droplets,
    theme: {
      card:
        "border-yellow-200 bg-linear-to-br from-white via-yellow-50/80 to-amber-50",
      icon: "bg-linear-to-br from-yellow-500 to-amber-600 text-white",
      badge: "bg-yellow-100 text-yellow-800",
      hover:
        "group-hover:border-yellow-400 group-hover:shadow-yellow-200/80",
      line: "bg-linear-to-r from-yellow-400 to-amber-500",
    },
  },
  {
    title: "जन्म एवं मृत्यु प्रमाण पत्र",
    english: "Birth & Death",
    description:
      "जन्म एवं मृत्यु पंजीकरण तथा प्रमाण पत्र संबंधी नागरिक सेवाओं तक सरल और सुविधाजनक पहुंच।",
    icon: FileText,
    theme: {
      card:
        "border-amber-200 bg-linear-to-br from-white via-orange-50/70 to-yellow-50",
      icon: "bg-linear-to-br from-orange-400 to-amber-500 text-white",
      badge: "bg-orange-100 text-orange-800",
      hover:
        "group-hover:border-orange-300 group-hover:shadow-orange-200/80",
      line: "bg-linear-to-r from-orange-400 to-amber-400",
    },
  },
  {
    title: "जन शिकायत निवारण",
    english: "Public Grievance",
    description:
      "कुसमरा क्षेत्र के नागरिक अपनी समस्याओं, सुझावों एवं शिकायतों को ऑनलाइन दर्ज कर सकते हैं।",
    icon: MessageSquareWarning,
    theme: {
      card:
        "border-orange-200 bg-linear-to-br from-white via-amber-50/70 to-orange-50",
      icon: "bg-linear-to-br from-amber-500 to-orange-500 text-white",
      badge: "bg-amber-100 text-amber-800",
      hover:
        "group-hover:border-amber-300 group-hover:shadow-amber-200/80",
      line: "bg-linear-to-r from-amber-500 to-orange-400",
    },
  },
  {
    title: "ई-टेंडर एवं निविदाएं",
    english: "E-Tender",
    description:
      "नगर पंचायत कुसमरा के विकास कार्यों, निविदाओं एवं सार्वजनिक परियोजनाओं से संबंधित जानकारी।",
    icon: FileCheck,
    theme: {
      card:
        "border-yellow-200 bg-linear-to-br from-white via-yellow-50/70 to-orange-50",
      icon: "bg-linear-to-br from-yellow-500 to-orange-500 text-white",
      badge: "bg-yellow-100 text-yellow-800",
      hover:
        "group-hover:border-yellow-300 group-hover:shadow-yellow-200/80",
      line: "bg-linear-to-r from-yellow-500 to-orange-400",
    },
  },
  {
    title: "व्यापार एवं लाइसेंस",
    english: "Trade License",
    description:
      "व्यापारिक लाइसेंस, प्रतिष्ठान संबंधी अनुमति एवं नगर पंचायत की आवश्यक अनुमतियों से जुड़ी सेवाएं।",
    icon: Award,
    theme: {
      card:
        "border-amber-200 bg-linear-to-br from-white via-amber-50/70 to-yellow-50",
      icon: "bg-linear-to-br from-amber-400 to-yellow-500 text-white",
      badge: "bg-amber-100 text-amber-800",
      hover:
        "group-hover:border-amber-300 group-hover:shadow-amber-200/80",
      line: "bg-linear-to-r from-amber-400 to-yellow-400",
    },
  },
]

export default function AboutPage() {
  const reduceMotion = useReducedMotion()

  const reveal = (animation: TargetAndTransition): TargetAndTransition | false =>
    reduceMotion ? false : animation

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#fffdf0] via-white to-[#fffbe6] font-sans text-slate-800 antialiased">
      {/* Premium Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#B45309 1px, transparent 1px), linear-gradient(90deg, #B45309 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="pointer-events-none fixed -left-40 top-20 h-[430px] w-[430px] rounded-full bg-amber-300/25 blur-[120px]" />

      <div className="pointer-events-none fixed right-[-180px] top-[25%] h-[480px] w-[480px] rounded-full bg-yellow-300/20 blur-[130px]" />

      <div className="pointer-events-none fixed bottom-[-180px] left-[25%] h-[500px] w-[500px] rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl space-y-24 px-4 py-12 md:px-8 md:py-16">
        {/* =========================================================
            INTRODUCTION
        ========================================================== */}

        <section className="relative overflow-hidden rounded-[32px] border border-amber-200/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(180,83,9,0.08)] backdrop-blur-xl md:p-10">
          {/* Decorative blobs */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />

          {/* Grid */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#B45309 1px, transparent 1px), linear-gradient(90deg, #B45309 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12">
            {/* LEFT */}

            <m.div
              initial={reveal({ opacity: 0, x: -20 })}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-5 lg:col-span-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200/80 transition-all duration-300 hover:rotate-6 hover:scale-110">
                  <Landmark className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-700">
                    About Kushmara
                  </p>

                  <h2 className="font-serif text-2xl font-black tracking-tight text-[#5B3006] md:text-3xl">
                    Overview of Kushmara, Mainpuri
                  </h2>
                </div>
              </div>

              <div className="h-[2px] w-full bg-linear-to-r from-amber-400 via-yellow-300 to-transparent" />

              <p className="text-justify text-sm leading-7 text-slate-700 md:text-base">
                <strong className="font-black text-[#5B3006]">
                  नगर पंचायत कुसमरा, मैनपुरी
                </strong>{" "}
                उत्तर प्रदेश के मैनपुरी जनपद में स्थित एक प्रमुख एवं ऐतिहासिक
                नगरीय स्थानीय निकाय है। कुसमरा अपने व्यापारिक, सांस्कृतिक एवं
                सामाजिक ताने-बाने के कारण मैनपुरी जिले में एक विशेष स्थान रखता
                है।
              </p>

              <p className="text-justify text-sm leading-7 text-slate-700 md:text-base">
                नगर पंचायत द्वारा क्षेत्र में स्वच्छता, जलापूर्ति, जल निकासी,
                सड़क एवं सार्वजनिक अवसंरचना, स्ट्रीट लाइट, ठोस अपशिष्ट
                प्रबंधन तथा अन्य आवश्यक नागरिक सुविधाओं के संचालन एवं
                रखरखाव पर निरंतर कार्य किया जाता है।
              </p>

              <p className="text-justify text-sm leading-7 text-slate-700 md:text-base">
                कुसमरा के सर्वांगीण विकास को ध्यान में रखते हुए स्वच्छ,
                सुरक्षित, सुव्यवस्थित एवं नागरिक-केंद्रित नगरीय वातावरण विकसित
                करना नगर पंचायत की प्राथमिकताओं में शामिल है।
              </p>

              <p className="text-justify text-sm leading-7 text-slate-700 md:text-base">
                डिजिटल गवर्नेंस के माध्यम से नागरिकों को नगरपालिका सेवाओं,
                शिकायत निवारण तथा आवश्यक सूचनाओं तक सरल, पारदर्शी और
                सुविधाजनक पहुंच उपलब्ध कराने के लिए निरंतर प्रयास किए जा
                रहे हैं।
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="group flex cursor-default items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-100 hover:shadow-lg hover:shadow-amber-100">
                  <MapPin className="h-4 w-4 text-amber-700 transition-transform group-hover:scale-110" />

                  <span className="text-xs font-bold text-amber-900">
                    Kushmara, Mainpuri
                  </span>
                </div>

                <div className="group flex cursor-default items-center gap-2 rounded-2xl border border-yellow-200 bg-yellow-50/80 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-100">
                  <Building2 className="h-4 w-4 text-yellow-700 transition-transform group-hover:scale-110" />

                  <span className="text-xs font-bold text-yellow-900">
                    Nagar Panchayat
                  </span>
                </div>

                <div className="group flex cursor-default items-center gap-2 rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-100 hover:shadow-lg hover:shadow-orange-100">
                  <Trees className="h-4 w-4 text-orange-600 transition-transform group-hover:scale-110" />

                  <span className="text-xs font-bold text-orange-900">
                    मैनपुरी मंडल
                  </span>
                </div>
              </div>
            </m.div>

            {/* RIGHT CARD */}

            <m.div
              initial={reveal({ opacity: 0, x: 20 })}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5"
            >
              <Card className="relative overflow-hidden rounded-[28px] border border-amber-200 bg-white p-6 shadow-[0_20px_50px_rgba(180,83,9,0.08)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-400 via-yellow-400 to-orange-500" />

                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-black text-[#5B3006]">
                      कुसमरा : एक नज़र में
                    </h3>

                    <p className="mt-1 text-[10px] font-medium text-slate-400">
                      Nagar Panchayat Kushmara, Mainpuri
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200/60">
                    <Landmark className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Location */}

                  <div className="group rounded-2xl border border-amber-200 bg-linear-to-r from-amber-50 to-yellow-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-yellow-500 text-white shadow-md">
                        <MapPin className="h-4 w-4 transition-transform group-hover:scale-110" />
                      </div>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-wider text-amber-700">
                          स्थान
                        </p>

                        <p className="mt-1 text-xs font-black leading-5 text-[#5B3006]">
                          कुसमरा
                          <br />
                          मैनपुरी, उत्तर प्रदेश
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mini Cards */}

                  <div className="grid grid-cols-2 gap-3">
                    <div className="group rounded-2xl border border-yellow-200 bg-linear-to-br from-yellow-50 to-amber-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-100">
                      <ShieldCheck className="h-5 w-5 text-amber-600 transition-transform group-hover:rotate-6 group-hover:scale-110" />

                      <p className="mt-3 text-[9px] font-black uppercase tracking-wider text-amber-700">
                        Governance
                      </p>

                      <p className="mt-0.5 text-sm font-black text-amber-800">
                        Transparent
                      </p>
                    </div>

                    <div className="group rounded-2xl border border-orange-200 bg-linear-to-br from-orange-50 to-amber-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100">
                      <Sparkles className="h-5 w-5 text-orange-600 transition-transform group-hover:rotate-12 group-hover:scale-110" />

                      <p className="mt-3 text-[9px] font-black uppercase tracking-wider text-orange-700">
                        Services
                      </p>

                      <p className="mt-0.5 text-sm font-black text-orange-800">
                        Digital
                      </p>
                    </div>
                  </div>

                  {/* Message */}

                  <div className="group rounded-2xl border border-amber-200 bg-linear-to-r from-amber-50 to-yellow-50 p-4 transition-all duration-300 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100">
                    <p className="flex items-start gap-2 text-xs font-semibold leading-5 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 transition-transform group-hover:scale-110" />

                      <span>
                        कुसमरा क्षेत्र में नागरिकों के लिए स्वच्छ, सुरक्षित,
                        सुव्यवस्थित और उत्तरदायी नगरीय सेवाएं उपलब्ध कराने के
                        लिए प्रतिबद्ध।
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            </m.div>
          </div>
        </section>

        {/* =========================================================
            MISSION & VISION
        ========================================================== */}

        <section className="grid gap-8 md:grid-cols-2">
          {/* MISSION */}

          <m.div
            initial={reveal({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[28px] border border-amber-200 bg-linear-to-br from-white via-amber-50/60 to-yellow-50/80 p-7 shadow-[0_12px_35px_rgba(180,83,9,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_55px_rgba(180,83,9,0.18)] md:p-8"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/30" />

            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-400 to-yellow-500" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-yellow-600 text-white shadow-lg shadow-amber-200 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Target className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-700">
                    Our Mission
                  </p>

                  <h3 className="font-serif text-2xl font-black text-[#5B3006]">
                    हमारा मिशन
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-700 md:text-base">
                नगर पंचायत कुसमरा का उद्देश्य नागरिकों को स्वच्छ, सुरक्षित और
                सुविधापूर्ण नगरीय वातावरण उपलब्ध कराना तथा स्थानीय सेवाओं को
                प्रभावी, पारदर्शी एवं नागरिक-केंद्रित बनाना है।
              </p>

              <ul className="mt-6 space-y-3.5">
                {[
                  "स्वच्छता एवं ठोस अपशिष्ट प्रबंधन को बेहतर बनाना",
                  "जलापूर्ति एवं जल निकासी सेवाओं को मजबूत करना",
                  "सड़क, स्ट्रीट लाइट एवं सार्वजनिक अवसंरचना का रखरखाव",
                  "कुसमरा क्षेत्र में स्वच्छ एवं सुव्यवस्थित वातावरण को बढ़ावा देना",
                  "डिजिटल एवं पारदर्शी नागरिक सेवाओं को बढ़ावा देना",
                ].map((item) => (
                  <li
                    key={item}
                    className="group/item flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 transition-transform group-hover/item:scale-150" />

                    <span className="transition-colors group-hover/item:text-amber-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-white/80 p-4 text-center text-[10px] font-black uppercase tracking-wider text-amber-800">
                स्वच्छता • पारदर्शिता • जनसेवा
              </div>
            </div>
          </m.div>

          {/* VISION */}

          <m.div
            initial={reveal({ opacity: 0, y: 20 })}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[28px] border border-yellow-200 bg-linear-to-br from-white via-yellow-50/60 to-orange-50/80 p-7 shadow-[0_12px_35px_rgba(234,179,8,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-yellow-300 hover:shadow-[0_25px_55px_rgba(234,179,8,0.18)] md:p-8"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-300/25 blur-3xl transition-all duration-500 group-hover:bg-amber-400/25" />

            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-yellow-400 to-amber-500" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-linear-to-br from-yellow-500 to-amber-600 text-white shadow-lg shadow-yellow-200 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Eye className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-yellow-800">
                    Our Vision
                  </p>

                  <h3 className="font-serif text-2xl font-black text-[#5B3006]">
                    हमारा दृष्टिकोण
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-700 md:text-base">
                हमारा लक्ष्य एक ऐसा आधुनिक, स्वच्छ, सुरक्षित और व्यवस्थित
                कुसमरा विकसित करना है जहां नागरिकों को आवश्यक नगरीय सेवाएं
                सरलता, पारदर्शिता और उत्तरदायित्व के साथ उपलब्ध हों।
              </p>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  डिजिटल गवर्नेंस, बेहतर सार्वजनिक अवसंरचना और नागरिक
                  सहभागिता के माध्यम से कुसमरा में जीवन की गुणवत्ता को
                  निरंतर बेहतर बनाना।
                </p>

                <p>
                  स्वच्छता, हरित क्षेत्र, पर्यावरण संरक्षण और जिम्मेदार
                  नागरिक भागीदारी के साथ मैनपुरी जनपद की प्रगति में कुसमरा
                  के विकास को एक नई ऊंचाई देना।
                </p>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-yellow-200 bg-white/80 p-4 transition-all duration-300 group-hover:border-amber-300">
                <Trees className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                <p className="text-xs font-semibold leading-5 text-slate-700">
                  स्वच्छ, हरित एवं उन्नत कुसमरा के निर्माण के लिए नागरिकों और
                  प्रशासन का निरंतर सहयोग आवश्यक है।
                </p>
              </div>
            </div>
          </m.div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}

        <section
          id="services"
          className="relative overflow-hidden rounded-[32px] border border-amber-200 bg-white/85 px-5 py-12 shadow-[0_15px_50px_rgba(180,83,9,0.06)] backdrop-blur-xl md:px-10 md:py-14"
        >
          {/* Background */}

          <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />

          {/* Grid */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#B45309 1px, transparent 1px), linear-gradient(90deg, #B45309 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          <div className="relative z-10">
            {/* Header */}

            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-700" />

                <span className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-800">
                  ई-गवर्नेंस एवं नागरिक सुविधाएं
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-black tracking-tight text-[#5B3006] sm:text-4xl">
                कुसमरा के नागरिकों के लिए{" "}
                <span className="bg-linear-to-r from-amber-600 via-yellow-600 to-orange-500 bg-clip-text text-transparent">
                  प्रमुख सेवाएं
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-700">
                नगर पंचायत कुसमरा, मैनपुरी से संबंधित प्रमुख नगरपालिका सेवाओं और
                नागरिक सुविधाओं तक आसान डिजिटल पहुंच।
              </p>
            </div>

            {/* Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <m.div
                    key={service.title}
                    initial={reveal({ opacity: 0, y: 20 })}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                  >
                    <Card
                      className={`group relative h-full overflow-hidden rounded-[24px] border p-6 shadow-[0_8px_30px_rgba(180,83,9,0.045)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(180,83,9,0.14)] ${service.theme.card} ${service.theme.hover}`}
                    >
                      {/* Accent */}

                      <div
                        className={`absolute inset-x-0 top-0 h-1 ${service.theme.line} opacity-70 transition-all duration-500 group-hover:h-1.5`}
                      />

                      {/* Number */}

                      <span className="absolute right-5 top-5 text-[9px] font-black tracking-widest text-slate-300 transition-colors group-hover:text-amber-500">
                        0{index + 1}
                      </span>

                      {/* Icon */}

                      <div
                        className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${service.theme.icon}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}

                      <p
                        className={`mt-5 inline-flex rounded-full px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.13em] ${service.theme.badge}`}
                      >
                        {service.english}
                      </p>

                      <h3 className="mt-3 text-base font-black text-[#5B3006] transition-colors duration-300 group-hover:text-amber-800">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-700">
                        {service.description}
                      </p>

                      {/* Bottom */}

                      <div className="mt-6 flex items-center justify-between border-t border-slate-200/70 pt-4">
                        <span className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                          Citizen Service
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-500 group-hover:shadow-md">
                          <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-white" />
                        </span>
                      </div>
                    </Card>
                  </m.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CITIZEN FIRST
        ========================================================== */}

        <section className="group relative overflow-hidden rounded-[30px] border border-amber-200 bg-linear-to-r from-amber-50 via-white to-yellow-50 p-7 shadow-[0_15px_45px_rgba(180,83,9,0.06)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(180,83,9,0.14)] md:p-10">
          {/* Background */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-amber-300/20 blur-3xl transition-all duration-500 group-hover:bg-yellow-300/25" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-7 text-center md:flex-row md:text-left">
            {/* Icon */}

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 via-yellow-500 to-orange-500 text-white shadow-xl shadow-amber-200 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Users className="h-7 w-7" />
            </div>

            {/* Content */}

            <div className="flex-1">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-amber-700">
                Citizen First Governance
              </p>

              <h2 className="mt-1 font-serif text-xl font-black text-[#5B3006] md:text-2xl">
                जनसेवा हमारी प्राथमिकता
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-700">
                नगर पंचायत कुसमरा नागरिकों की आवश्यकताओं को ध्यान में रखते हुए
                बेहतर नगरपालिका सेवाएं, उत्तरदायी प्रशासन और पारदर्शी डिजिटल
                गवर्नेंस उपलब्ध कराने के लिए निरंतर प्रयासरत है।
              </p>
            </div>

            {/* CTA */}

            <Link
              href="/public-grievance"
              className="group/btn inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-amber-600 to-yellow-600 px-6 py-3.5 text-xs font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-amber-500 hover:to-orange-500 hover:shadow-xl hover:shadow-amber-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
            >
              शिकायत दर्ज करें

              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* =========================================================
            FOOTER
        ========================================================== */}

        <footer className="border-t border-amber-200/80 pt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-amber-500 to-yellow-600 text-white">
              <Landmark className="h-3.5 w-3.5" />
            </div>

            <p className="text-[9px] font-black uppercase tracking-[0.14em] text-amber-800">
              Nagar Panchayat, Kushmara, Mainpuri
            </p>
          </div>

          <p className="mt-2 text-[9px] font-medium text-slate-400">
            Kushmara, Mainpuri, Uttar Pradesh • Government of Uttar Pradesh
          </p>
        </footer>
      </div>
    </main>
  )
}
