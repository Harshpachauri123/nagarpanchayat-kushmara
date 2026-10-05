"use client"

import { AnimatePresence, m } from "framer-motion"
import {
  AlertOctagon,
  Award,
  CheckCircle,
  Construction,
  CreditCard,
  Download,
  Droplet,
  FileText,
  HelpCircle,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Store,
  X,
} from "lucide-react"
import React, { useState } from "react"

interface ServiceItem {
  id: string
  name: string
  nameHi: string
  desc: string
  icon: React.ReactNode
  themeColor: string
  iconBg: string
  badge: string
  badgeStyle: string
  glowColor: string
  pdfName: string
}

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const services: ServiceItem[] = [
    {
      id: "property-tax",
      name: "Property Tax Assessment",
      nameHi: "संपत्ति कर एवं मूल्यांकन",
      desc: "नगर पंचायत कुसमरा क्षेत्र की आवासीय एवं व्यावसायिक संपत्तियों के संपत्ति कर का आकलन, भुगतान एवं डिजिटल रसीद सुविधा।",
      icon: <CreditCard className="h-6 w-6" />,
      themeColor: "from-amber-500 via-orange-500 to-yellow-600",
      iconBg: "from-amber-500 to-orange-600",
      badge: "लोकप्रिय सेवा",
      badgeStyle: "border-amber-200 bg-amber-50 text-amber-800",
      glowColor: "bg-amber-400/20",
      pdfName: "Kushmara_Property_Tax_Assessment_Form.pdf",
    },
    {
      id: "water-tax",
      name: "Water Supply & Tax",
      nameHi: "जल कर एवं जल कनेक्शन",
      desc: "कुसमरा क्षेत्र के घरेलू एवं व्यावसायिक जल कनेक्शन, जल बिल, बकाया भुगतान तथा जल आपूर्ति सेवाओं की सुविधा।",
      icon: <Droplet className="h-6 w-6" />,
      themeColor: "from-yellow-400 via-amber-500 to-orange-600",
      iconBg: "from-yellow-500 to-amber-600",
      badge: "त्वरित सेवा",
      badgeStyle: "border-yellow-200 bg-yellow-50 text-yellow-800",
      glowColor: "bg-yellow-400/20",
      pdfName: "Kushmara_Water_Connection_Tax_Form.pdf",
    },
    {
      id: "birth-cert",
      name: "Birth Registration",
      nameHi: "जन्म पंजीकरण एवं प्रमाण पत्र",
      desc: "नगर पंचायत कुसमरा क्षेत्र में जन्म पंजीकरण, अभिलेख सत्यापन तथा आधिकारिक जन्म प्रमाण पत्र आवेदन सुविधा।",
      icon: <Award className="h-6 w-6" />,
      themeColor: "from-amber-400 via-yellow-500 to-orange-500",
      iconBg: "from-amber-400 to-yellow-600",
      badge: "नागरिक सेवा",
      badgeStyle: "border-amber-200 bg-amber-50 text-amber-800",
      glowColor: "bg-amber-400/20",
      pdfName: "Kushmara_Birth_Registration_Form.pdf",
    },
    {
      id: "death-cert",
      name: "Death Registration",
      nameHi: "मृत्यु पंजीकरण एवं प्रमाण पत्र",
      desc: "मृत्यु अभिलेख पंजीकरण, दस्तावेज सत्यापन एवं आधिकारिक मृत्यु प्रमाण पत्र से संबंधित प्रशासनिक सेवा।",
      icon: <FileText className="h-6 w-6" />,
      themeColor: "from-orange-400 via-amber-500 to-yellow-600",
      iconBg: "from-orange-400 to-amber-600",
      badge: "आधिकारिक अभिलेख",
      badgeStyle: "border-orange-200 bg-orange-50 text-orange-800",
      glowColor: "bg-orange-400/20",
      pdfName: "Kushmara_Death_Registration_Form.pdf",
    },
    {
      id: "trade-license",
      name: "Trade License",
      nameHi: "व्यापार लाइसेंस",
      desc: "कुसमरा नगर क्षेत्र में संचालित दुकानों एवं व्यवसायों के लिए नए व्यापार लाइसेंस, पंजीकरण एवं नवीनीकरण सुविधा।",
      icon: <Store className="h-6 w-6" />,
      themeColor: "from-yellow-500 via-amber-500 to-orange-600",
      iconBg: "from-yellow-500 to-orange-600",
      badge: "व्यवसाय सेवा",
      badgeStyle: "border-yellow-200 bg-yellow-50 text-yellow-800",
      glowColor: "bg-yellow-400/20",
      pdfName: "Kushmara_Trade_License_Application.pdf",
    },
    {
      id: "building-permission",
      name: "Building Permission",
      nameHi: "भवन निर्माण अनुमति",
      desc: "भवन निर्माण से संबंधित नक्शा स्वीकृति, निर्माण अनुमति एवं नगर नियोजन नियमों के अंतर्गत आवश्यक आवेदन सुविधा।",
      icon: <Construction className="h-6 w-6" />,
      themeColor: "from-amber-500 via-orange-600 to-yellow-600",
      iconBg: "from-amber-500 to-orange-700",
      badge: "नगर नियोजन",
      badgeStyle: "border-amber-200 bg-amber-50 text-amber-800",
      glowColor: "bg-amber-400/20",
      pdfName: "Kushmara_Building_Permission_Form.pdf",
    },
    {
      id: "rti",
      name: "RTI Application",
      nameHi: "सूचना का अधिकार (RTI)",
      desc: "सूचना का अधिकार अधिनियम के अंतर्गत नगर पंचायत कुसमरा से संबंधित सार्वजनिक सूचनाओं के लिए आवेदन सुविधा।",
      icon: <HelpCircle className="h-6 w-6" />,
      themeColor: "from-yellow-400 via-amber-500 to-orange-500",
      iconBg: "from-yellow-400 to-amber-600",
      badge: "पारदर्शिता",
      badgeStyle: "border-yellow-200 bg-yellow-50 text-yellow-800",
      glowColor: "bg-yellow-400/20",
      pdfName: "Kushmara_RTI_Application_Form.pdf",
    },
    {
      id: "grievance",
      name: "Civic Grievance",
      nameHi: "नागरिक शिकायत पंजीकरण",
      desc: "सड़क, सफाई, स्ट्रीट लाइट, जल निकासी, पेयजल एवं अन्य नागरिक समस्याओं की शिकायत दर्ज करने की डिजिटल सुविधा।",
      icon: <AlertOctagon className="h-6 w-6" />,
      themeColor: "from-orange-500 via-amber-600 to-red-500",
      iconBg: "from-orange-500 to-red-600",
      badge: "त्वरित समाधान",
      badgeStyle: "border-orange-200 bg-orange-50 text-orange-800",
      glowColor: "bg-orange-400/20",
      pdfName: "Kushmara_Civic_Grievance_Form.pdf",
    },
  ]

  const handleCardClick = (service: ServiceItem) => {
    setActiveService(service)
    setDownloading(false)
    setDownloaded(false)
  }

  const closeModal = () => {
    if (downloading) return

    setActiveService(null)
    setDownloaded(false)
  }

  const handleDownload = () => {
    if (downloading) return

    setDownloading(true)

    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)

      setTimeout(() => {
        setActiveService(null)
        setDownloaded(false)
      }, 1800)
    }, 1500)
  }

  return (
    <section
      id="citizen-services"
      className="relative overflow-hidden bg-linear-to-br from-[#fffdf0] via-[#fffbeb] to-[#fef3c7] px-4 py-20 font-sans text-slate-900 md:px-8 md:py-24"
    >
      {/* =====================================================
          PREMIUM BACKGROUND GRID
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
          COLORFUL AMBIENT LIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-amber-300/30 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/4 h-[460px] w-[460px] rounded-full bg-yellow-300/30 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="pointer-events-none absolute right-1/3 bottom-20 h-[300px] w-[300px] rounded-full bg-amber-200/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-amber-800 uppercase shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-100">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            नगर पंचायत कुसमरा
          </div>

          {/* Heading */}

          <h2 className="font-serif text-3xl font-black tracking-tight text-[#3a2505] md:text-5xl">
            Unified Citizen{" "}
            <span className="bg-linear-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 font-medium text-slate-700 md:text-base">
            नगर पंचायत कुसमरा के नागरिकों के लिए आवश्यक
            ऑनलाइन सेवाएं, आवेदन एवं शिकायत निवारण सुविधाएं
            एक ही डिजिटल प्लेटफॉर्म पर।
          </p>

          {/* Decorative Line */}

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-amber-400 to-orange-500" />

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300 bg-amber-100">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            </span>

            <span className="h-1.5 w-14 rounded-full bg-linear-to-r from-orange-500 to-yellow-500" />
          </div>
        </m.div>

        {/* =====================================================
            SERVICE GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <m.button
              type="button"
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
              }}
              onClick={() => handleCardClick(service)}
              className="group relative flex min-h-[330px] cursor-pointer flex-col justify-between overflow-hidden rounded-[26px] border border-amber-200/80 bg-white/95 p-6 text-left shadow-[0_12px_35px_rgba(217,119,6,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_25px_60px_rgba(217,119,6,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4"
            >
              {/* Top Gradient */}

              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-linear-to-r ${service.themeColor} transition-all duration-500 group-hover:h-2`}
              />

              {/* Glow */}

              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${service.glowColor} opacity-60 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100`}
              />

              {/* Decorative Ring */}

              <div
                className={`pointer-events-none absolute -right-12 top-8 h-28 w-28 rounded-full border-[18px] border-transparent bg-linear-to-br ${service.themeColor} opacity-[0.06] transition-all duration-500 group-hover:scale-125`}
              />

              <div className="relative z-10">

                {/* Icon + Badge */}

                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${service.iconBg} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl`}
                  >
                    {service.icon}
                  </div>

                  <span
                    className={`rounded-full border px-2.5 py-1.5 text-[9px] font-black tracking-wide transition-all duration-300 group-hover:scale-105 ${service.badgeStyle}`}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Hindi */}

                <span className="block text-[9px] font-black tracking-[0.14em] text-amber-700 uppercase transition-colors group-hover:text-orange-600">
                  {service.nameHi}
                </span>

                {/* English */}

                <h3 className="mt-1.5 font-serif text-lg font-black leading-snug tracking-tight text-[#3a2505] transition-colors duration-300 group-hover:text-amber-700">
                  {service.name}
                </h3>

                {/* Description */}

                <p className="mt-3 line-clamp-4 text-xs leading-6 font-medium text-slate-600">
                  {service.desc}
                </p>
              </div>

              {/* Footer */}

              <div className="relative z-10 mt-6 flex items-center justify-between border-t border-amber-100 pt-4">
                <span className="text-[10px] font-black tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-[#3a2505]">
                  आवेदन / फॉर्म
                </span>

                <span
                  className={`flex items-center gap-1.5 rounded-xl bg-linear-to-r ${service.iconBg} px-3 py-2 text-[9px] font-black text-white opacity-90 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:shadow-lg`}
                >
                  <span>डाउनलोड</span>

                  <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </div>

              {/* Bottom Hover Line */}

              <div
                className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-linear-to-r ${service.themeColor} opacity-0 blur-sm transition-all duration-500 group-hover:w-3/4 group-hover:opacity-100`}
              />
            </m.button>
          ))}
        </div>

        {/* =====================================================
            OFFICE ASSISTANCE
        ====================================================== */}

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative mt-12 overflow-hidden rounded-[24px] border border-amber-300/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(217,119,6,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl md:p-6"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl transition-all duration-500 group-hover:bg-amber-300/35" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-500 to-orange-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <MapPin className="h-5 w-5" />
            </div>

            <div>
              <p className="text-[10px] font-black tracking-[0.12em] text-amber-700 uppercase">
                Office Assistance
              </p>

              <p className="mt-1 text-xs font-medium leading-6 text-slate-700 md:text-sm">
                किसी भी ऑनलाइन सेवा, आवेदन या नागरिक सहायता के लिए
                नगर पंचायत कुसमरा कार्यालय से संपर्क करें।
              </p>
            </div>
          </div>
        </m.div>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-4 w-4" />,
              title: "सुरक्षित सेवा",
              text: "Digital Citizen Services",
              color: "from-amber-400 to-orange-500",
            },
            {
              icon: <Landmark className="h-4 w-4" />,
              title: "आधिकारिक पोर्टल",
              text: "Nagar Panchayat Kushmara",
              color: "from-yellow-500 to-amber-600",
            },
            {
              icon: <Sparkles className="h-4 w-4" />,
              title: "सरल प्रक्रिया",
              text: "Fast & Accessible",
              color: "from-orange-400 to-amber-500",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex items-center gap-3 rounded-2xl border border-amber-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                {item.icon}
              </div>

              <div>
                <p className="text-[10px] font-black text-[#3a2505]">
                  {item.title}
                </p>

                <p className="mt-0.5 text-[9px] font-medium text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          PREMIUM DOWNLOAD MODAL
      ====================================================== */}

      <AnimatePresence>
        {activeService && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#291b05]/60 p-4 backdrop-blur-md"
            onClick={closeModal}
          >
            <m.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 15,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              {/* Modal Top Gradient */}

              <div
                className={`h-1.5 bg-linear-to-r ${activeService.themeColor}`}
              />

              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${activeService.iconBg} text-white shadow-md`}
                  >
                    {activeService.icon}
                  </div>

                  <div>
                    <p className="text-[9px] font-black tracking-[0.12em] text-amber-700 uppercase">
                      Nagar Panchayat Kushmara
                    </p>

                    <h3 className="mt-0.5 text-sm font-black text-[#3a2505]">
                      {activeService.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                      {activeService.nameHi}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={downloading}
                  aria-label="Close modal"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}

              <div className="p-6">
                {downloaded ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-7 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 shadow-inner">
                      <CheckCircle className="h-9 w-9" />
                    </div>

                    <h4 className="mt-5 text-base font-black text-[#3a2505]">
                      डाउनलोड पूर्ण हुआ!
                    </h4>

                    <p className="mt-2 max-w-xs text-xs leading-6 font-medium text-slate-600">
                      आपका आवेदन दस्तावेज सफलतापूर्वक डाउनलोड कर दिया गया है।
                    </p>

                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 font-mono text-[10px] font-bold text-amber-800">
                      {activeService.pdfName}
                    </div>
                  </m.div>
                ) : (
                  <>
                    {/* Document Icon */}

                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br ${activeService.iconBg} text-white shadow-xl`}
                      >
                        <FileText className="h-9 w-9" />
                      </div>

                      <h4 className="mt-5 text-lg font-black text-[#3a2505]">
                        आधिकारिक आवेदन फॉर्म
                      </h4>

                      <p className="mt-2 max-w-sm text-xs leading-6 font-medium text-slate-600">
                        {activeService.name} के लिए नगर पंचायत कुसमरा
                        का आवेदन दस्तावेज डाउनलोड करें।
                      </p>

                      <div className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left">
                        <p className="text-[9px] font-black tracking-wider text-slate-400 uppercase">
                          Document
                        </p>

                        <p className="mt-1 break-all font-mono text-[10px] font-semibold text-[#3a2505]">
                          {activeService.pdfName}
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}

                    <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
                      <button
                        type="button"
                        onClick={closeModal}
                        disabled={downloading}
                        className="flex-1 cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-black text-slate-600 transition-all hover:border-slate-300 hover:bg-slate-100 hover:text-[#3a2505] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        रद्द करें
                      </button>

                      <button
                        type="button"
                        onClick={handleDownload}
                        disabled={downloading}
                        className={`flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r ${activeService.iconBg} px-4 py-3 text-xs font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60`}
                      >
                        {downloading ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            <span>डाउनलोड हो रहा है...</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4" />
                            <span>PDF डाउनलोड</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom */}

              <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-3 text-center">
                <p className="text-[9px] font-semibold text-slate-400">
                  नगर पंचायत कुसमरा • Digital Citizen Services
                </p>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}
