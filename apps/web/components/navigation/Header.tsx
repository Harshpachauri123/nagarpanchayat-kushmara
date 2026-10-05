"use client"

import React, { useState } from "react"
import { Landmark, MapPin, Search, X } from "lucide-react"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="relative z-40 overflow-hidden border-b border-yellow-300 bg-yellow-50">
      {/* =========================================================
          BRIGHT VIBRANT YELLOW BACKGROUND GLOWS
      ========================================================== */}

      {/* Main Yellow Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 -top-36 h-[450px] w-[450px] rounded-full bg-yellow-300/60 blur-[120px]"
      />

      {/* Vibrant Amber Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 h-[450px] w-[450px] rounded-full bg-yellow-400/50 blur-[120px]"
      />

      {/* Center Bright Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-white/80 blur-[100px]"
      />

      {/* =========================================================
          SUBTLE GRID PATTERN
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ca8a04 1px, transparent 1px), linear-gradient(#ca8a04 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[15%] top-8 hidden h-2.5 w-2.5 rounded-full bg-yellow-500/70 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] bottom-10 hidden h-2 w-2 rounded-full bg-yellow-600/60 md:block"
      />

      {/* =========================================================
          MAIN HEADER CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-5 md:px-8 lg:py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          
          {/* =====================================================
              BRAND IDENTITY
          ====================================================== */}

          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            
            {/* Government Emblem Frame */}
            <div className="group relative shrink-0">
              <div className="absolute -inset-2 rounded-full border border-yellow-400 transition-all duration-500 group-hover:rotate-12 group-hover:border-yellow-500" />
              <div className="absolute -inset-3.5 rounded-full border border-dashed border-yellow-600/40 transition-all duration-700 group-hover:-rotate-12 group-hover:border-yellow-600" />

              <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-yellow-300 bg-white p-2 shadow-md shadow-yellow-900/10 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 sm:h-20 sm:w-20">
                <img
                  src="/governmentlogo.png"
                  alt="Government Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Brand Content */}
            <div className="min-w-0">
              {/* Official Badges */}
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400 bg-yellow-200/80 px-2.5 py-0.5 text-[10px] font-black tracking-wider text-yellow-950 uppercase shadow-xs">
                  <Landmark className="h-3 w-3 text-yellow-800" />
                  Uttar Pradesh Government
                </span>

                <span className="hidden items-center gap-1.5 rounded-full border border-yellow-400 bg-yellow-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-yellow-900 uppercase sm:inline-flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-600" />
                  Official Portal
                </span>
              </div>

              {/* Hindi Name */}
              <h1 className="font-serif text-[22px] font-black tracking-tight text-yellow-950 sm:text-[26px] md:text-[28px]">
                नगर पंचायत, कुसमरा, मैनपुरी
              </h1>

              {/* English Name */}
              <p className="mt-0.5 text-[11px] font-bold uppercase tracking-widest text-yellow-900/80 sm:text-xs">
                Nagar Panchayat, Kushmara, Mainpuri
              </p>

              {/* Location */}
              <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold text-yellow-900/70">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-yellow-700" />
                  Kushmara, Mainpuri, Uttar Pradesh
                </span>
              </div>
            </div>
          </div>

          {/* =====================================================
              SEARCH INPUT
          ====================================================== */}

          <div className="relative z-10 flex w-full items-center lg:w-auto">
            <div className="group relative flex h-12 w-full items-center overflow-hidden rounded-2xl border border-yellow-400 bg-white/95 px-3 text-yellow-950 shadow-sm transition-all duration-300 hover:border-yellow-500 focus-within:border-yellow-500 focus-within:ring-2 focus-within:ring-yellow-400/40 focus-within:shadow-md sm:w-[320px]">
              
              <div className="relative z-10 flex w-full items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-yellow-400 via-yellow-500 to-amber-500 text-yellow-950 shadow-sm transition-all duration-300 group-hover:scale-105">
                  <Search className="h-4 w-4 stroke-[2.5]" />
                </span>

                <input
                  suppressHydrationWarning
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services & pages..."
                  className="w-full bg-transparent text-xs font-bold text-yellow-950 placeholder-yellow-800/50 outline-none"
                />

                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full bg-yellow-200 text-yellow-900 transition-colors hover:bg-yellow-300 hover:text-yellow-950"
                  >
                    <X className="h-3 w-3" />
                  </button>
                ) : (
                  <span className="hidden shrink-0 rounded-md border border-yellow-300 bg-yellow-100 px-2 py-0.5 text-[10px] font-black text-yellow-800 sm:inline-flex">
                    /
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          BRIGHT YELLOW BOTTOM ACCENT LINE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-linear-to-r from-yellow-300 via-yellow-500 to-amber-500"
      />
    </header>
  )
}
