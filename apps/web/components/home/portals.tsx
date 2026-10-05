"use client"

import { m } from "framer-motion"
import {
  ExternalLink,
  Globe2,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import React from "react"

interface GovernmentPortal {
  imgUrl: string
  siteUrl: string
  title: string
  tagline: string
  bgClass: string
  badgeColor: string
  glowColor: string
}

interface GovernmentPortalsGridProps {
  panchayatName?: string
  districtName?: string
  stateName?: string
}

export default function GovernmentPortalsGrid({
  panchayatName = "Nagar Panchayat Kushmara",
  districtName = "Mainpuri",
  stateName = "Uttar Pradesh",
}: GovernmentPortalsGridProps) {
  const governmentPortals: GovernmentPortal[] = [
    {
      imgUrl:
        "https://tse4.mm.bing.net/th/id/OIP.cmWC0sWBy4tCsvptDLv6mwHaE8?r=0&pid=Api&h=220&P=0",
      siteUrl: "https://gem.gov.in/",
      title: "GeM Portal",
      tagline: "Government e-Marketplace",
      bgClass:
        "from-amber-100/80 via-white to-yellow-50 border-amber-300 hover:border-amber-500",
      badgeColor: "bg-amber-500 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)]",
    },
    {
      imgUrl:
        "https://d16kg6xo62zbe.cloudfront.net/site-picture/463x256/e/etender.up.nic.in.png",
      siteUrl: "https://etender.up.nic.in/nicgep/app",
      title: "eTender UP",
      tagline: "Uttar Pradesh e-Procurement",
      bgClass:
        "from-yellow-100/80 via-white to-amber-50 border-yellow-300 hover:border-yellow-500",
      badgeColor: "bg-yellow-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(202,138,4,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053014.png",
      siteUrl: "https://data.gov.in/",
      title: "Data.gov.in",
      tagline: "Open Government Data",
      bgClass:
        "from-amber-100/70 via-white to-orange-50 border-amber-300 hover:border-amber-500",
      badgeColor: "bg-orange-500 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(249,115,22,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053094.png",
      siteUrl: "https://www.incredibleindia.org/",
      title: "Incredible India",
      tagline: "Ministry of Tourism",
      bgClass:
        "from-yellow-100/70 via-white to-amber-100/40 border-yellow-300 hover:border-yellow-500",
      badgeColor: "bg-amber-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(217,119,6,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053017.png",
      siteUrl: "https://www.mygov.in/",
      title: "MyGov",
      tagline: "Citizen Engagement Platform",
      bgClass:
        "from-amber-100/80 via-white to-yellow-100/50 border-amber-300 hover:border-amber-500",
      badgeColor: "bg-amber-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(217,119,6,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053039.png",
      siteUrl: "https://pmnrf.gov.in/",
      title: "PMNRF",
      tagline: "Prime Minister's National Relief Fund",
      bgClass:
        "from-yellow-100/80 via-white to-amber-50 border-yellow-300 hover:border-yellow-500",
      badgeColor: "bg-yellow-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(234,179,8,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017110781.png",
      siteUrl: "https://www.pmindia.gov.in/",
      title: "PM India",
      tagline: "Prime Minister's Office",
      bgClass:
        "from-amber-100/70 via-white to-yellow-50 border-amber-300 hover:border-amber-500",
      badgeColor: "bg-amber-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(217,119,6,0.2)]",
    },
    {
      imgUrl:
        "https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png",
      siteUrl: "https://www.india.gov.in/",
      title: "National Portal of India",
      tagline: "Gateway to Government Services",
      bgClass:
        "from-yellow-100/80 via-white to-amber-100/60 border-yellow-300 hover:border-yellow-500",
      badgeColor: "bg-yellow-600 text-white",
      glowColor: "hover:shadow-[0_20px_45px_rgba(202,138,4,0.2)]",
    },
  ]

  return (
    <section
      id="government-portals"
      className="relative overflow-hidden bg-linear-to-br from-[#fffbeb] via-[#fefce8] to-[#fef3c7] px-4 py-20 font-sans sm:py-24 md:px-8"
    >
      {/* AMBIENT BACKGROUND BLOBS (YELLOW / AMBER THEME) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-amber-300/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-yellow-300/35 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-[130px]"
      />

      {/* GRID PATTERN OVERLAY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(217,119,6,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,119,6,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 50%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 50%, black 55%, transparent 100%)",
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-white/90 px-4 py-2 shadow-[0_8px_25px_rgba(217,119,6,0.12)] backdrop-blur-md"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-yellow-500 text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-900 sm:text-[10px]">
              Digital Government Network
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 font-serif text-3xl font-black tracking-tight text-amber-950 sm:text-4xl md:text-5xl"
          >
            Important Government Portals
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-amber-900/80 md:text-base"
          >
            {panchayatName} (जनपद {districtName}) के नागरिकों के लिए केंद्र एवं {stateName} सरकार के प्रमुख डिजिटल पोर्टलों की त्वरित सेवा।
          </m.p>

          {/* Yellow/Amber Divider */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-[3px] w-14 rounded-full bg-linear-to-r from-amber-500 to-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="h-[3px] w-5 rounded-full bg-amber-400" />
            <span className="h-[3px] w-14 rounded-full bg-linear-to-r from-yellow-400 to-amber-500" />
          </div>
        </div>

        {/* PORTAL GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {governmentPortals.map((portal, index) => (
            <m.a
              key={portal.title}
              href={portal.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={`group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-[26px] border bg-linear-to-br p-5 shadow-[0_8px_30px_rgba(217,119,6,0.08)] backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:bg-white ${portal.bgClass} ${portal.glowColor}`}
            >
              {/* TOP ACCENT BAR */}
              <div className="absolute left-0 right-0 top-0 h-[4px] bg-linear-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-70 transition-all duration-500 group-hover:h-[5px] group-hover:opacity-100" />

              {/* CARD HEADER */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.08em] shadow-sm ${portal.badgeColor}`}
                  >
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-amber-200 bg-white/90 text-amber-800 shadow-sm transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg">
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                </div>

                {/* IMAGE PREVIEW */}
                <div className="relative mb-5 flex h-[125px] w-full items-center justify-center overflow-hidden rounded-2xl border border-amber-100 bg-white p-4 shadow-[inset_0_1px_10px_rgba(217,119,6,0.04)] transition-all duration-300 group-hover:border-amber-300 group-hover:shadow-[0_10px_25px_rgba(217,119,6,0.12)]">
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-50/60 via-transparent to-yellow-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={portal.imgUrl}
                    alt={portal.title}
                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* TITLE & TAGLINE */}
                <div>
                  <h3 className="text-base font-black tracking-tight text-amber-950 transition-colors duration-300 group-hover:text-amber-700">
                    {portal.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium leading-5 text-amber-900/70 transition-colors group-hover:text-amber-950">
                    {portal.tagline}
                  </p>
                </div>
              </div>

              {/* CARD FOOTER */}
              <div className="mt-6 flex items-center justify-between border-t border-amber-200/60 pt-4 text-[10px] font-black uppercase tracking-[0.08em] text-amber-800 transition-colors group-hover:border-amber-300 group-hover:text-amber-900">
                <span className="flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-amber-600" />
                  Access Portal
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-amber-500 group-hover:text-white">
                  →
                </span>
              </div>
            </m.a>
          ))}
        </div>

        {/* BOTTOM OFFICIAL NOTE */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-white/80 px-5 py-4 text-center shadow-[0_8px_25px_rgba(217,119,6,0.08)] backdrop-blur-md sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-yellow-500 text-white shadow-sm">
              <Landmark className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-amber-950">
                {panchayatName}
              </p>
              <p className="mt-0.5 text-[9px] font-medium text-amber-900/70">
                कुसमरा, जिला- {districtName}, {stateName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.12em] text-amber-800">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
            Official Government Links
          </div>
        </m.div>
      </div>
    </section>
  )
}
