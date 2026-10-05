"use client"

import { AnimatePresence, m } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Leaf,
  MapPin,
  Sparkles,
  Users,
  Waves,
  X,
} from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

interface SchemeItem {
  id: string
  title: string
  titleHi: string
  desc: string
  icon: React.ReactNode
  objectives: string[]
  badge: string
  theme: string
  iconTheme: string
  badgeTheme: string
  glow: string
}

export default function Schemes() {
  const [selectedScheme, setSelectedScheme] =
    useState<SchemeItem | null>(null)

  const schemes: SchemeItem[] = [
    {
      id: "pmay",
      title: "Pradhan Mantri Awas Yojana",
      titleHi: "प्रधानमंत्री आवास योजना (शहरी)",
      desc: "नगर पंचायत कुसमरा (मैनपुरी) क्षेत्र के पात्र आर्थिक रूप से कमजोर एवं निम्न आय वर्ग के परिवारों को पक्का और सुरक्षित आवास उपलब्ध कराने हेतु वित्तीय सहायता।",
      icon: <Home className="h-7 w-7" />,
      badge: "आवास योजना",
      theme: "from-amber-400 via-orange-500 to-amber-600",
      iconTheme: "from-amber-500 to-orange-600",
      badgeTheme:
        "border-amber-300 bg-amber-50 text-amber-800",
      glow: "bg-amber-400/20",
      objectives: [
        "पात्र लाभार्थियों को गृह निर्माण हेतु अनुदान एवं किश्तों में सहायता",
        "लाभार्थी खाते में DBT (प्रत्यक्ष लाभ अंतरण) द्वारा पारदर्शी भुगतान",
        "महिला सशक्तिकरण एवं सह-स्वामित्व को प्राथमिकता",
      ],
    },

    {
      id: "swachh-bharat",
      title: "Swachh Bharat Mission",
      titleHi: "स्वच्छ भारत मिशन (शहरी 2.0)",
      desc: "नगर पंचायत कुसमरा को स्वच्छ, हरित एवं डोर-टू-डोर कूड़ा संग्रहण प्रणाली से आच्छादित करने तथा सार्वजनिक स्वच्छता बनाए रखने का अभियान।",
      icon: <Leaf className="h-7 w-7" />,
      badge: "स्वच्छता अभियान",
      theme: "from-yellow-400 via-amber-500 to-emerald-600",
      iconTheme: "from-amber-500 to-emerald-600",
      badgeTheme:
        "border-yellow-300 bg-yellow-50 text-yellow-800",
      glow: "bg-yellow-400/20",
      objectives: [
        "प्रत्येक वार्ड से प्रतिदिन घर-घर ठोस अपशिष्ट/कूड़ा संग्रहण",
        "गीले एवं सूखे कचरे का अलग-अलग (पृथक्करण) निस्तारण",
        "कुसमरा के प्रमुख बाजारों एवं तिराहों पर नियमित सफाई व्यवस्था",
      ],
    },

    {
      id: "nulm",
      title: "DAY-NULM",
      titleHi: "दीनदयाल अंत्योदय योजना - राष्ट्रीय शहरी आजीविका मिशन",
      desc: "कुसमरा के स्थानीय युवाओं, महिलाओं एवं रेहड़ी-पटरी विक्रेताओं को कौशल प्रशिक्षण, स्वयं सहायता समूह (SHG) तथा आसान ऋण द्वारा स्वरोजगार से जोड़ना।",
      icon: <Users className="h-7 w-7" />,
      badge: "आजीविका एवं रोज़गार",
      theme: "from-amber-500 via-yellow-600 to-orange-600",
      iconTheme: "from-amber-500 to-orange-600",
      badgeTheme:
        "border-amber-300 bg-amber-50 text-amber-800",
      glow: "bg-amber-400/20",
      objectives: [
        "महिला स्वयं सहायता समूहों का गठन एवं बैंक क्रेडिट लिंकेज",
        "रेहड़ी-पटरी (Street Vendors) हेतु स्वनिधि योजना एवं पहचान पत्र",
        "युवाओं के लिए कौशल संवर्धन एवं व्यावसायिक प्रशिक्षण",
      ],
    },

    {
      id: "water",
      title: "Urban Water Supply & Sanitation",
      titleHi: "पेयजल आपूर्ति एवं नागरिक सुविधाएं",
      desc: "नगर पंचायत कुसमरा के सभी वार्डों के नागरिकों को स्वच्छ, गुणवत्तापूर्ण एवं पर्याप्त पेयजल उपलब्ध कराने हेतु पाइपलाइन एवं ओवरहेड टैंक प्रबंधन।",
      icon: <Waves className="h-7 w-7" />,
      badge: "पेयजल एवं जलकल",
      theme: "from-amber-400 via-yellow-500 to-teal-600",
      iconTheme: "from-amber-500 to-teal-600",
      badgeTheme:
        "border-yellow-300 bg-yellow-50 text-yellow-800",
      glow: "bg-yellow-400/20",
      objectives: [
        "नगर के विभिन्न वार्डों में नए घरेलू जल संयोजन (Water Connections)",
        "ओवरहेड टैंक से सुचारू जलापूर्ति एवं नियमित क्लोरीनेशन",
        "सार्वजनिक स्थलों एवं चौराहों पर वाटर कूलर व हैंडपंप रखरखाव",
      ],
    },
  ]

  return (
    <section
      id="government-schemes"
      className="relative overflow-hidden bg-linear-to-br from-[#fffdf0] via-[#ffffff] to-[#fff8e1] px-4 py-20 font-sans text-slate-900 md:px-8 md:py-24"
    >
      {/* =====================================================
          PREMIUM AMBER/YELLOW GRID BACKGROUND
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

      {/* =====================================================
          WARM AMBER / YELLOW AMBIENT GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-amber-300/25 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[300px] w-[300px] rounded-full bg-amber-200/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="group mb-5 inline-flex cursor-default items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-amber-800 uppercase shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-100">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-sm transition-transform duration-300 group-hover:rotate-12">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            नगर पंचायत कुसमरा, मैनपुरी
          </div>

          {/* Heading */}

          <h1 className="font-serif text-3xl font-black tracking-tight text-[#5c3d00] md:text-5xl">
            Government{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Schemes
            </span>
          </h1>

          <p className="mt-3 text-sm font-bold text-amber-900/70 md:text-base">
            जन कल्याणकारी एवं विकास योजनाएं
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 font-medium text-slate-600 md:text-base">
            नगर पंचायत कुसमरा (मैनपुरी) के सम्मानित नागरिकों के सर्वसमावेशी विकास,
            आवास, स्वच्छता, शुद्ध पेयजल एवं रोजगार हेतु संचालित शासकीय
            योजनाओं की विस्तृत विवरण पुस्तिका।
          </p>

          {/* Separator */}

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300 bg-amber-50">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            </span>

            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-yellow-500 to-amber-600" />
          </div>
        </m.div>

        {/* =====================================================
            SCHEMES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
          {schemes.map((scheme, index) => (
            <m.article
              key={scheme.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="group relative flex min-h-[470px] flex-col justify-between overflow-hidden rounded-[28px] border border-amber-200/70 bg-white/95 p-6 shadow-[0_12px_35px_rgba(217,119,6,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-amber-400 hover:shadow-[0_25px_65px_rgba(217,119,6,0.18)]"
            >
              {/* Top Accent */}

              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${scheme.theme} transition-all duration-500 group-hover:h-2`}
              />

              {/* Card Glow */}

              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${scheme.glow} opacity-50 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}
              />

              {/* Decorative Circle */}

              <div
                className={`pointer-events-none absolute -right-10 top-12 h-28 w-28 rounded-full border-[18px] border-transparent bg-linear-to-br ${scheme.theme} opacity-[0.035] transition-all duration-500 group-hover:scale-125 group-hover:opacity-[0.1]`}
              />

              <div className="relative z-10">

                {/* Icon + Badge */}

                <div className="mb-6 flex items-start justify-between gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${scheme.iconTheme} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}
                  >
                    {scheme.icon}
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-black tracking-wide transition-all duration-300 group-hover:scale-105 ${scheme.badgeTheme}`}
                  >
                    {scheme.badge}
                  </span>
                </div>

                {/* Hindi Title Subhead */}

                <span className="block text-[9px] font-black tracking-[0.13em] text-amber-700 uppercase transition-colors group-hover:text-orange-600">
                  {scheme.titleHi}
                </span>

                {/* English Title */}

                <h3 className="mt-1.5 font-serif text-xl font-black leading-tight tracking-tight text-[#4d3300] transition-colors duration-300 group-hover:text-amber-600">
                  {scheme.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-xs leading-6 font-medium text-slate-600">
                  {scheme.desc}
                </p>

                {/* Objectives */}

                <div className="mt-6 border-t border-amber-100/80 pt-5">
                  <p className="mb-3 text-[9px] font-black tracking-[0.14em] text-amber-800/60 uppercase">
                    मुख्य विशेषताएं एवं बिंदु
                  </p>

                  <div className="space-y-3">
                    {scheme.objectives.map((objective) => (
                      <div
                        key={objective}
                        className="flex items-start gap-2.5 text-[11px] leading-5 font-semibold text-slate-700"
                      >
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100 transition-all duration-300 group-hover:bg-amber-200">
                          <CheckCircle2 className="h-3 w-3 text-amber-700" />
                        </span>

                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}

              <div className="relative z-10 mt-7 border-t border-amber-100/80 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedScheme(scheme)}
                  className={`group/btn flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r ${scheme.iconTheme} px-4 py-3 text-[10px] font-black tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <span>विस्तृत जानकारी देखें</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Bottom Glow */}

              <div
                className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-linear-to-r ${scheme.theme} opacity-0 blur-sm transition-all duration-500 group-hover:w-3/4 group-hover:opacity-100`}
              />
            </m.article>
          ))}
        </div>

        {/* =====================================================
            HELP / OFFICE CARD
        ====================================================== */}

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mt-12 overflow-hidden rounded-[28px] border border-amber-300 bg-linear-to-r from-amber-100/80 via-white to-yellow-100/80 p-6 shadow-[0_15px_45px_rgba(217,119,6,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_25px_60px_rgba(217,119,6,0.16)] md:p-8"
        >
          {/* Background Grid */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#b45309 1px, transparent 1px), linear-gradient(90deg, #b45309 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          {/* Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl transition-all duration-500 group-hover:bg-orange-300/35" />

          <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">

            {/* Icon */}

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-xl">
              <MapPin className="h-6 w-6" />
            </div>

            {/* Content */}

            <div className="flex-1 text-center md:text-left">
              <p className="text-[9px] font-black tracking-[0.15em] text-amber-800 uppercase">
                नागरिक सहायता केंद्र (Citizen Helpdesk)
              </p>

              <h4 className="mt-1 font-serif text-xl font-black text-[#4d3300]">
                क्या आपको किसी योजना के संबंध में सहायता चाहिए?
              </h4>

              <p className="mt-2 max-w-3xl text-xs leading-6 font-medium text-slate-600 md:text-sm">
                यदि आपको किसी भी शासकीय योजना की पात्रता, ऑनलाइन/ऑफलाइन आवेदन प्रक्रिया
                अथवा आवश्यक दस्तावेजों के विषय में सहायता चाहिए, तो
                नगर पंचायत कुसमरा (मैनपुरी) कार्यालय में संपर्क करें।
              </p>
            </div>

            {/* CTA */}

            <Link
              href="/contact"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 px-5 py-3 text-[10px] font-black tracking-wide text-white shadow-lg shadow-amber-200 transition-all duration-300 hover:-translate-y-1 hover:from-orange-600 hover:to-amber-700 hover:shadow-xl"
            >
              संपर्क कार्यालय
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </m.div>
      </div>

      {/* =====================================================
          DETAIL MODAL
      ====================================================== */}

      <AnimatePresence>
        {selectedScheme && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#291a00]/60 p-4 backdrop-blur-md"
            onClick={() => setSelectedScheme(null)}
          >
            <m.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              {/* Top Gradient */}

              <div
                className={`h-1.5 bg-linear-to-r ${selectedScheme.theme}`}
              />

              {/* Header */}

              <div className="flex items-center justify-between border-b border-amber-100/80 px-6 py-5 md:px-7">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${selectedScheme.iconTheme} text-white shadow-lg`}
                  >
                    {selectedScheme.icon}
                  </div>

                  <div>
                    <p className="text-[9px] font-black tracking-[0.13em] text-amber-700 uppercase">
                      Nagar Panchayat Kushmara, Mainpuri
                    </p>

                    <h3 className="mt-0.5 text-base font-black text-[#4d3300]">
                      {selectedScheme.title}
                    </h3>

                    <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                      {selectedScheme.titleHi}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedScheme(null)}
                  aria-label="Close"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}

              <div className="p-6 md:p-7">
                <div className="rounded-2xl border border-amber-200 bg-linear-to-br from-amber-50/80 to-white p-4">
                  <p className="text-xs leading-6 font-medium text-slate-700">
                    {selectedScheme.desc}
                  </p>
                </div>

                {/* Objectives */}

                <div className="mt-6">
                  <h4 className="text-[10px] font-black tracking-[0.14em] text-[#4d3300] uppercase">
                    योजना की मुख्य विशेषताएं एवं उद्देश्य
                  </h4>

                  <div className="mt-3 space-y-2.5">
                    {selectedScheme.objectives.map((objective) => (
                      <div
                        key={objective}
                        className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/60"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100">
                          <CheckCircle2 className="h-3.5 w-3.5 text-amber-700" />
                        </span>

                        <span className="text-xs leading-5 font-semibold text-slate-700">
                          {objective}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}

                <div className="mt-6 flex gap-3 border-t border-amber-100/80 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedScheme(null)}
                    className="flex-1 cursor-pointer rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-black text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-[#4d3300]"
                  >
                    बंद करें
                  </button>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedScheme(null)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r ${selectedScheme.iconTheme} py-3 text-xs font-black text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl`}
                  >
                    सहायता लें
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Text */}

              <div className="border-t border-amber-100/80 bg-amber-50/60 px-6 py-3 text-center">
                <p className="text-[9px] font-semibold text-amber-800/60">
                  नगर पंचायत कुसमरा, मैनपुरी • Digital Citizen Services
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
