"use client"

import { m } from "framer-motion"
import {
  ArrowRight,
  Coins,
  Droplet,
  Hammer,
  HardHat,
  HeartPulse,
  Landmark,
  Sparkles,
  Trash2,
} from "lucide-react"
import React from "react"

interface DepartmentCard {
  name: string
  nameHi: string
  desc: string
  icon: React.ReactNode
  color: string
  iconBg: string
  badgeBg: string
  hoverBorder: string
  hoverShadow: string
  glow: string
  dot: string
  services: string[]
}

export default function Departments() {
  const departments: DepartmentCard[] = [
    {
      name: "Public Works & Infrastructure",
      nameHi: "लोक निर्माण एवं बुनियादी ढांचा विभाग",
      desc: "कुसमरा, मैनपुरी की मुख्य सड़कों, संपर्क मार्गों, नालियों, पुलिया एवं सार्वजनिक भवनों का आधुनिक निर्माण, सुदृढ़ीकरण एवं नियमित रखरखाव।",
      icon: <HardHat className="h-7 w-7" />,
      color: "from-amber-400 via-orange-500 to-amber-600",
      iconBg: "from-amber-400 to-orange-500",
      badgeBg: "border-amber-200 bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-300",
      hoverShadow: "hover:shadow-amber-200/70",
      glow: "bg-amber-400/20",
      dot: "bg-amber-500",
      services: [
        "मार्ग मरम्मत एवं पैचवर्क ऑनलाइन आवेदन",
        "सड़क खुदाई एवं पाइपलाइन ट्रेंचिंग NOC",
        "स्ट्रीट लाइट एवं सार्वजनिक प्रकाश व्यवस्था",
      ],
    },
    {
      name: "Tax & Revenue Management",
      nameHi: "कर संग्रह एवं राजस्व प्रबंधन विभाग",
      desc: "गृह कर, जल कर, व्यवसाय कर एवं अन्य स्थानीय नगर पंचायत राजस्व का पारदर्शी एवं डिजिटल मूल्यांकन, संग्रह एवं ई-रसीद आवंटन।",
      icon: <Coins className="h-7 w-7" />,
      color: "from-yellow-400 via-amber-500 to-amber-600",
      iconBg: "from-yellow-400 to-amber-600",
      badgeBg: "border-yellow-200 bg-yellow-50 text-yellow-800",
      hoverBorder: "hover:border-yellow-300",
      hoverShadow: "hover:shadow-yellow-200/70",
      glow: "bg-yellow-400/20",
      dot: "bg-yellow-500",
      services: [
        "ऑनलाइन संपत्ति कर निर्धारण एवं भुगतान",
        "नामांतरण (म्यूटेशन) एवं स्व-मूल्यांकन",
        "बकाया कर स्थिति एवं नो-ड्यूज (NOC) प्रमाणपत्र",
      ],
    },
    {
      name: "Water Supply & Distribution",
      nameHi: "पेजल एवं जलापूर्ति प्रबंधन विभाग",
      desc: "समस्त कुसमरा, मैनपुरी नगर क्षेत्र में शुद्ध पेयजल की निरंतर आपूर्ति, ओवरहेड टैंकों का संचालन, पाइपलाइन लीकेज मरम्मत एवं कनेक्शन सेवाएं।",
      icon: <Droplet className="h-7 w-7" />,
      color: "from-amber-300 via-yellow-500 to-orange-500",
      iconBg: "from-amber-400 to-orange-500",
      badgeBg: "border-amber-200 bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-300",
      hoverShadow: "hover:shadow-amber-200/70",
      glow: "bg-amber-300/20",
      dot: "bg-amber-500",
      services: [
        "नवीन जल संयोजन (वाटर कनेक्शन) आवेदन",
        "मुख्य पाइपलाइन लीकेज एवं मरम्मत शिकायत",
        "जल शुल्क बिल भुगतान एवं मीटर संबंधी कार्य",
      ],
    },
    {
      name: "Sanitation & Waste Management",
      nameHi: "स्वच्छता एवं ठोस अपशिष्ट प्रबंधन विभाग",
      desc: "घर-घर कचरा संग्रहण (Door-to-Door), डोर-टू-डोर सेग्रीगेशन, कीटनाशक छिड़काव, एंटी-ला लार्वा फॉगिंग एवं स्वच्छ भारत मिशन निष्पादन।",
      icon: <Trash2 className="h-7 w-7" />,
      color: "from-amber-500 via-yellow-600 to-orange-600",
      iconBg: "from-amber-500 to-yellow-600",
      badgeBg: "border-amber-200 bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-400",
      hoverShadow: "hover:shadow-amber-300/60",
      glow: "bg-yellow-500/20",
      dot: "bg-amber-600",
      services: [
        "कचरा गाड़ी एवं सफाई संबंधी ऑनलाइन शिकायत",
        "एंटी-मच्छर फॉगिंग एवं सेनेटाइजेशन अनुरोध",
        "सार्वजनिक एवं सामुदायिक शौचालय रखरखाव",
      ],
    },
    {
      name: "Public Health & Vital Records",
      nameHi: "लोक स्वास्थ्य एवं नागरिक अभिलेख विभाग",
      desc: "जन्म-मृत्यु पंजीकरण, जीवन अभिलेखों का डिजिटलीकरण, खाद्य सुरक्षा मानक सहायता एवं स्वास्थ्य एनओसी निर्गमन सेवाएं।",
      icon: <HeartPulse className="h-7 w-7" />,
      color: "from-yellow-400 via-orange-400 to-amber-500",
      iconBg: "from-yellow-400 to-orange-500",
      badgeBg: "border-yellow-200 bg-yellow-50 text-yellow-800",
      hoverBorder: "hover:border-yellow-300",
      hoverShadow: "hover:shadow-yellow-200/70",
      glow: "bg-yellow-400/20",
      dot: "bg-orange-500",
      services: [
        "जन्म पंजीकरण एवं डिजिटल प्रमाणपत्र निर्गत",
        "मृत्यु पंजीकरण एवं संबंधित अनापत्ति पत्र",
        "ट्रेड व हेल्थ लाइसेंस सत्यापन एवं नवीनीकरण",
      ],
    },
    {
      name: "Town Planning & Urban Design",
      nameHi: "नगर नियोजन एवं भवन निर्माण विभाग",
      desc: "सुरक्षित नगरीय विकास हेतु भवन निर्माण नक्शा स्वीकृति, मास्टर प्लान ज़ोनिंग, अवैध निर्माण रोकथाम एवं अतिक्रमण रोधी अभियान।",
      icon: <Hammer className="h-7 w-7" />,
      color: "from-orange-400 via-amber-500 to-yellow-500",
      iconBg: "from-orange-400 to-amber-500",
      badgeBg: "border-orange-200 bg-amber-50 text-amber-800",
      hoverBorder: "hover:border-amber-300",
      hoverShadow: "hover:shadow-amber-200/70",
      glow: "bg-orange-400/20",
      dot: "bg-amber-500",
      services: [
        "आवासीय/व्यावसायिक नक्शा स्वीकृति आवेदन",
        "सार्वजनिक मार्ग अतिक्रमण शिकायत निवारण",
        "ज़ोनिंग नियम एवं मास्टर प्लान अनापत्ति पत्र",
      ],
    },
  ]

  return (
    <section
      id="digital-gateway"
      className="relative overflow-hidden bg-linear-to-br from-[#fffdf5] via-[#fffbf0] to-[#fefce8] px-4 py-20 font-sans md:px-8 md:py-24"
    >
      {/* =====================================================
          PREMIUM BACKGROUND GRID (YELLOW/GOLDEN ACCENT)
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
          WARM AMBIENT GLOWS
      ====================================================== */}
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-amber-300/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[450px] w-[450px] rounded-full bg-yellow-300/30 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-200/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/3 bottom-20 h-[300px] w-[300px] rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl space-y-5 text-center"
        >
          <span className="group inline-flex cursor-default items-center gap-2 rounded-full border border-amber-300/80 bg-linear-to-r from-amber-50 via-yellow-50 to-orange-50 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-amber-800 uppercase shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-100/60 hover:shadow-md hover:shadow-amber-100">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-xs">
              <Landmark className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-6" />
            </span>
            नगर पंचायत कुसमरा, मैनपुरी
          </span>

          <h2 className="font-serif text-3xl font-black tracking-tight text-[#2c1d11] md:text-5xl">
            Departments of{" "}
            <span className="bg-linear-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Kushmara, Mainpuri
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm font-medium leading-7 text-amber-950/70 md:text-base">
            नगर पंचायत कुसमरा, मैनपुरी के मुख्य प्रशासनिक विभागों एवं नागरिक पोर्टल की पारदर्शी, सुलभ एवं त्वरित डिजिटल नागरिक सेवाएं।
          </p>

          <div className="mx-auto flex items-center justify-center gap-2 pt-2">
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-orange-400" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300 bg-amber-100/50">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            </span>
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-yellow-400 to-amber-500" />
          </div>
        </m.div>

        {/* =====================================================
            DEPARTMENT GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <m.div
              key={dept.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className={`group relative flex min-h-[470px] flex-col justify-between overflow-hidden rounded-[28px] border border-amber-200/70 bg-white/90 p-7 shadow-[0_12px_35px_rgba(217,119,6,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${dept.hoverBorder} ${dept.hoverShadow} hover:shadow-[0_25px_60px_rgba(217,119,6,0.15)]`}
            >
              {/* Top Gradient Bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${dept.color} transition-all duration-500 group-hover:h-2`}
              />

              {/* Card Glow */}
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full ${dept.glow} opacity-70 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}
              />

              {/* Decorative Circle */}
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 overflow-hidden">
                <div
                  className={`absolute -right-14 -top-14 h-32 w-32 rounded-full bg-linear-to-br ${dept.color} opacity-[0.08] transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.16]`}
                />
              </div>

              {/* MAIN CONTENT */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br ${dept.iconBg} text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}
                  >
                    {dept.icon}
                  </div>

                  {/* Status */}
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-black tracking-wider uppercase transition-all duration-300 group-hover:scale-105 ${dept.badgeBg}`}
                  >
                    सक्रिय सेवा
                  </span>
                </div>

                {/* Titles */}
                <div className="mt-6 space-y-1.5">
                  <span className="block text-[10px] font-black tracking-[0.13em] text-amber-700 uppercase transition-colors duration-300 group-hover:text-amber-600">
                    {dept.nameHi}
                  </span>
                  <h3 className="font-serif text-xl font-black tracking-tight text-[#2b1c10] transition-colors duration-300 group-hover:text-amber-600">
                    {dept.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs font-medium leading-6 text-slate-600 md:text-sm">
                  {dept.desc}
                </p>

                {/* SERVICES */}
                <div className="mt-6 border-t border-amber-100/80 pt-5">
                  <p className="mb-3 text-[9px] font-black tracking-[0.15em] text-amber-600/70 uppercase">
                    प्रमुख सेवाएं
                  </p>
                  <div className="space-y-3">
                    {dept.services.map((service) => (
                      <div
                        key={service}
                        className="group/service flex items-start gap-3 text-xs font-semibold text-slate-700"
                      >
                        <span
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dept.dot} shadow-xs transition-all duration-300 group-hover:scale-150`}
                        />
                        <span className="leading-5 transition-colors duration-300 group-hover/service:text-amber-600">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="relative z-10 mt-7 border-t border-amber-100/80 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${dept.dot} shadow-xs`}
                    />
                    <span className="text-[9px] font-black tracking-wider text-amber-700/60 uppercase">
                      Citizen Services
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`group/action flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r ${dept.iconBg} px-3.5 py-2 text-[10px] font-black text-white opacity-95 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:opacity-100 hover:shadow-md hover:shadow-amber-200/50`}
                  >
                    <span>सेवाएं देखें</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/action:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={`pointer-events-none absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-linear-to-r ${dept.color} opacity-0 blur-xs transition-all duration-500 group-hover:w-3/4 group-hover:opacity-100`}
              />
            </m.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CITIZEN CTA
        ====================================================== */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mt-12 overflow-hidden rounded-[28px] border border-amber-300/80 bg-linear-to-r from-amber-100/60 via-yellow-50 to-orange-100/50 p-7 shadow-[0_15px_45px_rgba(217,119,6,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_25px_60px_rgba(217,119,6,0.18)] md:p-9"
        >
          {/* Grid Pattern */}
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
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-amber-400/25 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/35" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-orange-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-amber-400 via-amber-500 to-orange-500 text-white shadow-md transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Landmark className="h-6 w-6" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-[9px] font-black tracking-[0.15em] text-amber-700 uppercase">
                Digital Governance
              </p>
              <h3 className="mt-1 font-serif text-xl font-black text-[#2b1c10] md:text-2xl">
                कुसमरा की नागरिक सेवाएं एक ही स्थान पर
              </h3>
              <p className="mt-2 max-w-3xl text-xs leading-6 text-slate-700 md:text-sm">
                नगर पंचायत कुसमरा, मैनपुरी की नागरिक सेवाओं, शिकायत निवारण एवं ऑनलाइन ई-सुविधाओं तक सरल डिजिटल पहुंच।
              </p>
            </div>

            {/* CTA */}
            <a
              href="/services"
              className="group/cta flex shrink-0 items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 via-amber-600 to-orange-600 px-5 py-3 text-xs font-black text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:from-amber-400 hover:to-orange-500 hover:shadow-lg hover:shadow-amber-300/50"
            >
              सभी सेवाएं देखें
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </a>
          </div>
        </m.div>
      </div>
    </section>
  )
}
