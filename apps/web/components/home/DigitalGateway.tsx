"use client"

import { m } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
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
  shortCode: string
  desc: string
  icon: React.ReactNode
  services: string[]
  gradient: string
  iconBg: string
  badge: string
}

/* =========================================================
   NAGAR PANCHAYAT KUSHMARA (MAINPURI) DEPARTMENTS
========================================================= */

const departments: DepartmentCard[] = [
  {
    name: "Public Works Department",
    nameHi: "लोक निर्माण विभाग",
    shortCode: "PWD",
    desc: "कुसमरा नगर की सड़कों, नालियों, सार्वजनिक भवनों, स्ट्रीट लाइट व्यवस्था तथा बुनियादी ढांचे के विकास व रखरखाव का कार्य।",
    icon: <HardHat className="h-6 w-6" />,
    services: [
      "Road Repair Request",
      "Street Light Maintenance",
      "Civic Infrastructure Support",
    ],
    gradient: "from-amber-500 via-yellow-500 to-amber-400",
    iconBg: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Revenue Department",
    nameHi: "राजस्व विभाग",
    shortCode: "REV",
    desc: "गृह कर, जल कर, स्थानीय कर संग्रह, व्यापार लाइसेंस एवं नगर पंचायत कुसमरा से संबंधित राजस्व संबंधी सेवाएं।",
    icon: <Coins className="h-6 w-6" />,
    services: [
      "Property Tax Payment",
      "Tax Assessment & Mutation",
      "Trade License Services",
    ],
    gradient: "from-yellow-500 via-amber-500 to-orange-400",
    iconBg: "bg-yellow-50 text-yellow-600",
    badge: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
  {
    name: "Water Supply Department",
    nameHi: "जल आपूर्ति विभाग",
    shortCode: "WTR",
    desc: "नगरवासियों को शुद्ध पेयजल आपूर्ति, नए जल कनेक्शन, पाइपलाइन मरम्मत एवं जल कर से संबंधित सेवाएं।",
    icon: <Droplet className="h-6 w-6" />,
    services: [
      "New Water Connection",
      "Water Bill Payment",
      "Pipeline Leakage Complaint",
    ],
    gradient: "from-amber-600 via-yellow-500 to-amber-300",
    iconBg: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Sanitation Department",
    nameHi: "स्वास्थ्य एवं स्वच्छता विभाग",
    shortCode: "SAN",
    desc: "नगर में डोर-टू-डोर कचरा संग्रहण, नाली सफाई, कीटनाशक छिड़काव एवं स्वच्छ कुसमरा अभियान का संचालन।",
    icon: <Trash2 className="h-6 w-6" />,
    services: [
      "Door-to-Door Waste Collection",
      "Drain Cleaning Complaint",
      "Public Sanitation Drive",
    ],
    gradient: "from-yellow-600 via-amber-500 to-yellow-400",
    iconBg: "bg-yellow-50 text-yellow-700",
    badge: "bg-yellow-50 text-yellow-800 border-yellow-200",
  },
  {
    name: "Health Department",
    nameHi: "जन स्वास्थ्य विभाग",
    shortCode: "HLT",
    desc: "जन्म एवं मृत्यु प्रमाण पत्र जारी करना, सार्वजनिक स्वास्थ्य सेवाएं तथा नगर सुरक्षा संबंधी स्वच्छता कार्य।",
    icon: <HeartPulse className="h-6 w-6" />,
    services: [
      "Birth Certificate",
      "Death Certificate",
      "Public Health Standards",
    ],
    gradient: "from-amber-500 via-orange-400 to-yellow-500",
    iconBg: "bg-amber-50 text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    name: "Engineering & Town Planning",
    nameHi: "अभियांत्रिकी एवं नगर नियोजन",
    shortCode: "ENG",
    desc: "भवन मानचित्र स्वीकृति, अनधिकृत निर्माण पर नियंत्रण एवं कुसमरा नगर के नियोजित विकास की निगरानी।",
    icon: <Hammer className="h-6 w-6" />,
    services: [
      "Building Map Sanction",
      "Construction NOC",
      "Town Planning Approvals",
    ],
    gradient: "from-yellow-500 via-amber-600 to-yellow-300",
    iconBg: "bg-yellow-50 text-yellow-600",
    badge: "bg-yellow-50 text-yellow-700 border-yellow-200",
  },
]

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DigitalGatewayKushmara() {
  return (
    <section
      id="digital-gateway"
      className="
        relative isolate overflow-hidden
        bg-linear-to-br
        from-[#fefce8]
        via-[#fffbeb]
        to-[#fef3c7]
        px-4 py-20
        font-sans
        sm:py-24
        md:px-8
        lg:py-28
      "
    >
      {/* YELLOW / AMBER BACKGROUND GLOWS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 -top-40
          h-[480px] w-[480px]
          rounded-full
          bg-amber-300/30
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 bottom-0
          h-[500px] w-[500px]
          rounded-full
          bg-yellow-400/25
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[380px] w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-200/20
          blur-[100px]
        "
      />

      {/* LIGHT ARCHITECTURAL GRID */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.4]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(217, 119, 6, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(217, 119, 6, 0.07) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-amber-300
              bg-white/80
              px-4 py-2
              shadow-[0_8px_25px_rgba(217,119,6,0.08)]
              backdrop-blur-md
            "
          >
            <span
              className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                bg-linear-to-br
                from-amber-500
                to-yellow-500
                text-white
                shadow-sm
              "
            >
              <Landmark className="h-3 w-3" />
            </span>

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.18em]
                text-amber-900
                sm:text-[10px]
              "
            >
              Nagar Panchayat • Kushmara, Mainpuri
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="
              mt-5
              font-serif
              text-3xl
              font-black
              tracking-[-0.025em]
              text-amber-950
              sm:text-4xl
              md:text-5xl
            "
          >
            Digital Service Gateway
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="
              mx-auto mt-4
              max-w-2xl
              text-sm
              font-medium
              leading-7
              text-amber-900/80
              md:text-base
            "
          >
            नगर पंचायत कुसमरा (मैनपुरी) की ई-गवर्नेंस सेवाओं का पारदर्शी, सुरक्षित एवं सुलभ डिजिटल पोर्टल।
          </m.p>

          {/* COLORFUL DIVIDER */}
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-linear-to-r from-amber-500 to-yellow-400" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300 bg-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            </span>
            <span className="h-[3px] w-4 rounded-full bg-orange-400" />
            <span className="h-[3px] w-14 rounded-full bg-linear-to-r from-yellow-400 to-amber-500" />
          </div>
        </div>

        {/* DEPARTMENT GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <m.article
              key={dept.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="
                group
                relative
                flex
                min-h-[400px]
                flex-col
                overflow-hidden
                rounded-[26px]
                border
                border-amber-200/80
                bg-white/90
                shadow-[0_12px_35px_rgba(217,119,6,0.06)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-amber-300
                hover:bg-white
                hover:shadow-[0_25px_60px_rgba(217,119,6,0.15)]
              "
            >
              {/* COLORFUL TOP LINE */}
              <div
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  bg-linear-to-r
                  ${dept.gradient}
                `}
              />

              {/* TOP RIGHT GLOW */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-linear-to-br
                  ${dept.gradient}
                  opacity-[0.08]
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:opacity-[0.16]
                `}
              />

              {/* CARD HEADER */}
              <div className="relative z-10 p-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  {/* ICON */}
                  <div className="relative">
                    <div
                      className={`
                        absolute
                        -inset-2
                        rounded-2xl
                        bg-linear-to-br
                        ${dept.gradient}
                        opacity-0
                        blur-lg
                        transition-all
                        duration-500
                        group-hover:opacity-30
                      `}
                    />
                    <div
                      className={`
                        relative
                        flex h-14 w-14
                        items-center justify-center
                        rounded-2xl
                        border
                        border-white
                        ${dept.iconBg}
                        shadow-[0_8px_20px_rgba(217,119,6,0.08)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:-rotate-3
                      `}
                    >
                      {dept.icon}
                    </div>
                  </div>

                  {/* CODE */}
                  <span
                    className={`
                      rounded-full
                      border
                      px-2.5
                      py-1
                      text-[8px]
                      font-black
                      tracking-[0.15em]
                      ${dept.badge}
                    `}
                  >
                    {dept.shortCode}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.15em] text-amber-700">
                    {dept.nameHi}
                  </span>
                  <h3
                    className="
                      mt-1.5
                      text-[18px]
                      font-black
                      leading-snug
                      tracking-tight
                      text-amber-950
                      transition-colors
                      duration-300
                      group-hover:text-amber-700
                    "
                  >
                    {dept.name}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    text-[11px]
                    font-medium
                    leading-5
                    text-slate-600
                  "
                >
                  {dept.desc}
                </p>
              </div>

              {/* SERVICES */}
              <div className="mx-6 border-t border-amber-100 pt-4">
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="
                      text-[8px]
                      font-black
                      uppercase
                      tracking-[0.16em]
                      text-amber-800/60
                    "
                  >
                    Key Services
                  </span>
                  <span className="flex items-center gap-1 text-[8px] font-bold text-amber-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                    Available
                  </span>
                </div>

                <div className="space-y-2.5">
                  {dept.services.map((service) => (
                    <div
                      key={service}
                      className="
                        group/service
                        flex
                        items-center
                        gap-2.5
                        text-[10px]
                        font-semibold
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          flex h-5 w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-amber-100/60
                          text-amber-700
                          transition-all
                          duration-300
                          group-hover/service:bg-amber-200
                          group-hover/service:scale-110
                        "
                      >
                        <CheckCircle2 className="h-3 w-3" />
                      </span>
                      <span
                        className="
                          transition-colors
                          duration-300
                          group-hover/service:text-amber-950
                        "
                      >
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="mt-auto px-6 pb-6 pt-6">
                <a
                  href="#citizen-services"
                  className="
                    group/link
                    flex h-11
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-amber-200
                    bg-amber-50/80
                    px-3.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    text-amber-900
                    transition-all
                    duration-300
                    hover:border-amber-500
                    hover:bg-amber-500
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-amber-500/20
                  "
                >
                  <span>View Department Services</span>
                  <span
                    className="
                      flex h-7 w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-white
                      text-amber-800
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover/link:bg-amber-950
                      group-hover/link:text-amber-300
                    "
                  >
                    <ArrowRight
                      className="
                        h-3.5 w-3.5
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </span>
                </a>
              </div>

              {/* BOTTOM HOVER GRADIENT */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  inset-x-8
                  bottom-0
                  h-[2px]
                  origin-center
                  scale-x-0
                  rounded-full
                  bg-linear-to-r
                  ${dept.gradient}
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                `}
              />
            </m.article>
          ))}
        </div>

        {/* BOTTOM INFORMATION BAR */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-amber-400/30
            bg-linear-to-r
            from-amber-900
            via-amber-800
            to-yellow-900
            shadow-[0_18px_45px_rgba(217,119,6,0.18)]
          "
        >
          <div
            className="
              relative
              flex
              flex-col
              gap-4
              overflow-hidden
              px-5
              py-5
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-6
            "
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-20
                h-44
                w-44
                rounded-full
                bg-yellow-400/20
                blur-3xl
              "
            />

            <div className="relative flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-white/10
                  text-yellow-300
                  ring-1
                  ring-white/10
                "
              >
                <Landmark className="h-4 w-4" />
              </div>

              <div>
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-yellow-300
                  "
                >
                  Official Municipal Portal
                </p>
                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-medium
                    text-amber-100/90
                  "
                >
                  Nagar Panchayat Kushmara, Mainpuri
                  <span className="mx-1.5 text-yellow-300">•</span>
                  Government of Uttar Pradesh
                </p>
              </div>
            </div>

            <a
              href="/services"
              className="
                group relative
                flex items-center
                gap-2
                rounded-xl
                border border-amber-300/20
                bg-white/10
                px-4 py-2.5
                text-[9px]
                font-black
                uppercase
                tracking-[0.12em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-yellow-300/50
                hover:bg-yellow-400
                hover:text-amber-950
                hover:shadow-lg
                hover:shadow-yellow-400/20
              "
            >
              <span>Explore All Portals</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </m.div>
      </div>
    </section>
  )
}
