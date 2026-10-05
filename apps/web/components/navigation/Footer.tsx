"use client"

import Link from "next/link"
import {
  ArrowUp,
  ChevronRight,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"
import React from "react"

const quickLinks = [
  { name: "About Kushmara", href: "/about" },
  { name: "Council Members", href: "/staff" },
  { name: "Departments", href: "/departments" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
]

const citizenServices = [
  { name: "Property & House Tax", href: "/propertytax" },
  { name: "Water Supply & Bills", href: "/services" },
  { name: "Birth Certificate", href: "/services" },
  { name: "Death Certificate", href: "/services" },
  { name: "Trade / Shop License", href: "/services" },
  { name: "Building Permission / NOC", href: "/services" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer
      id="contact-us"
      className="relative overflow-hidden border-t border-yellow-300 bg-yellow-50/80 text-yellow-950"
    >
      {/* PREMIUM BRIGHT YELLOW TOP ACCENT */}
      <div className="h-1 w-full bg-linear-to-r from-yellow-400 via-amber-400 to-yellow-500" />

      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ca8a04 1px, transparent 1px), linear-gradient(#ca8a04 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* VIBRANT YELLOW GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-yellow-300/60 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-amber-400/40 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-yellow-200/50 blur-[130px]" />

      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1.2fr]">
            {/* BRAND SECTION */}
            <div>
              <div className="flex items-start gap-4">
                {/* Government Emblem */}
                <div className="group relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-2xl border border-yellow-300 bg-white p-2.5 shadow-md shadow-yellow-900/10 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg">
                  <div className="absolute -inset-1 -z-10 rounded-2xl bg-linear-to-br from-yellow-400/30 to-amber-400/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src="/governmentlogo.png"
                    alt="Government Emblem of India"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Brand Title */}
                <div className="pt-1">
                  <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-yellow-800">
                    Government of Uttar Pradesh
                  </p>
                  <h2 className="text-lg font-black leading-[1.15] tracking-tight text-yellow-950">
                    NAGAR PANCHAYAT KUSHMARA
                  </h2>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-yellow-900/70">
                    Mainpuri, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-md text-[13px] font-medium leading-7 text-yellow-900/80">
                नगर पंचायत कुसमरा, मैनपुरी का आधिकारिक डिजिटल नागरिक पोर्टल। नागरिकों को नगर सेवाओं, सार्वजनिक सूचना, ऑनलाइन आवेदन एवं आवश्यक नागरिक सुविधाओं तक सरल और पारदर्शी डिजिटल पहुंच प्रदान करने के लिए विकसित।
              </p>

              {/* Official Portal Status Badge */}
              <div className="group mt-7 flex max-w-md items-center gap-3 rounded-r-2xl border-l-4 border-yellow-500 bg-yellow-100/80 px-4 py-3 transition-all duration-300 hover:bg-yellow-200/60">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-yellow-500 via-amber-500 to-yellow-600 text-yellow-950 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-yellow-950">
                    Official Municipal Portal
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold leading-5 text-yellow-900/70">
                    Nagar Panchayat Kushmara, Mainpuri द्वारा नागरिक सेवाओं के लिए आधिकारिक डिजिटल प्लेटफॉर्म।
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK NAVIGATION */}
            <div>
              <SectionTitle eyebrow="Explore" title="Quick Navigation" />
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <FooterLink key={link.name} href={link.href} label={link.name} />
                ))}
              </ul>
            </div>

            {/* CITIZEN SERVICES */}
            <div>
              <SectionTitle eyebrow="Digital Services" title="Citizen Services" />
              <ul className="space-y-3">
                {citizenServices.map((link) => (
                  <FooterLink key={link.name} href={link.href} label={link.name} />
                ))}
              </ul>
            </div>

            {/* CONTACT CARD */}
            <div>
              <div className="group relative overflow-hidden rounded-[24px] bg-linear-to-br from-yellow-950 via-amber-950 to-yellow-900 p-6 text-white shadow-lg shadow-yellow-950/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-linear-to-b from-yellow-300 via-yellow-400 to-amber-500" />

                {/* Decorative background glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-yellow-300/10 transition-transform duration-700 group-hover:scale-125"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-16 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl"
                />

                <div className="relative">
                  <p className="text-[9px] font-black uppercase tracking-[0.22em] text-yellow-300">
                    Connect With Us
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold tracking-tight">
                    Contact Office
                  </h3>
                  <p className="mt-1 text-[10px] text-yellow-200/70">
                    Nagar Panchayat Kushmara, Mainpuri
                  </p>

                  <div className="mt-5 space-y-5">
                    {/* Address */}
                    <ContactItem icon={MapPin} title="Office Address">
                      Nagar Panchayat Kushmara,
                      <br />
                      Mainpuri,
                      <br />
                      Uttar Pradesh, India
                    </ContactItem>

                    {/* Phone */}
                    <ContactItem icon={Phone} title="Phone">
                      <a
                        href="tel:+910000000000"
                        className="transition-colors hover:text-yellow-300"
                      >
                        +91 XXXXXXXXXX
                      </a>
                    </ContactItem>

                    {/* Email */}
                    <ContactItem icon={Mail} title="Email">
                      <a
                        href="mailto:official@kushmara-np.in"
                        className="break-all transition-colors hover:text-yellow-300"
                      >
                        official@kushmara-np.in
                      </a>
                    </ContactItem>

                    {/* Office Hours */}
                    <ContactItem icon={Clock3} title="Office Hours">
                      Monday – Saturday
                      <br />
                      10:00 AM – 5:00 PM
                    </ContactItem>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PREMIUM DIVIDER */}
          <div className="my-12 flex items-center gap-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
            <div className="h-2 w-2 rotate-45 bg-yellow-500" />
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
          </div>

          {/* GOVERNMENT INITIATIVES */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-800">
                Government Initiatives
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <PartnerBadge>Government of Uttar Pradesh</PartnerBadge>
                <PartnerBadge>Digital India</PartnerBadge>
                <PartnerBadge>Swachh Bharat Mission</PartnerBadge>
                <PartnerBadge>Digital Citizen Services</PartnerBadge>
              </div>
            </div>

            {/* Back To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300 bg-white px-5 py-2.5 text-[11px] font-bold text-yellow-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-linear-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-yellow-950 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative overflow-hidden bg-linear-to-r from-yellow-950 via-amber-950 to-yellow-900 text-white">
        {/* Bottom Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold text-yellow-100">
                © {new Date().getFullYear()} Nagar Panchayat Kushmara, Mainpuri. All Rights Reserved.
              </p>
              <p className="mt-2 max-w-2xl text-[10px] leading-5 text-yellow-100/60">
                यह वेबसाइट नगर पंचायत कुसमरा, मैनपुरी से संबंधित आधिकारिक नगर निकाय जानकारी एवं नागरिक सेवाएं उपलब्ध कराने के उद्देश्य से संचालित डिजिटल प्लेटफॉर्म है। प्रकाशित जानकारी के संबंध में किसी स्पष्टीकरण के लिए संबंधित नगर पंचायत कार्यालय से संपर्क करें।
              </p>
            </div>

            {/* Developer Section */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-medium text-yellow-100/50">
              <Heart className="h-3 w-3 fill-rose-400 text-rose-400" aria-hidden="true" />
              <span>Hosted</span>
              <span className="text-yellow-100/80">by SDV Edutech Pvt. Ltd.</span>
              <span className="mx-1 text-yellow-100/20">•</span>
              <span>Last Updated: September 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* SECTION TITLE COMPONENT */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="mb-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-yellow-800">
        {eyebrow}
      </p>
      <h3 className="text-[15px] font-extrabold tracking-tight text-yellow-950">
        {title}
      </h3>
      <div className="mt-3 flex items-center gap-1">
        <div className="h-[2px] w-8 rounded-full bg-linear-to-r from-yellow-500 to-amber-500" />
        <div className="h-[2px] w-2 rounded-full bg-yellow-400" />
      </div>
    </div>
  )
}

/* FOOTER LINK COMPONENT */
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[12px] font-semibold text-yellow-900/80 transition-all duration-300 hover:translate-x-1 hover:text-yellow-950 focus:outline-none"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-yellow-300 bg-white shadow-xs transition-all duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:shadow-sm">
          <ChevronRight className="h-3 w-3 text-yellow-800 transition-all duration-300 group-hover:text-yellow-950 group-hover:translate-x-0.5" />
        </span>
        <span className="transition-colors duration-300 group-hover:font-extrabold">
          {label}
        </span>
      </Link>
    </li>
  )
}

/* CONTACT ITEM COMPONENT */
function ContactItem({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="group flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] transition-all duration-300 group-hover:border-yellow-400/40 group-hover:bg-yellow-400/20">
        <Icon className="h-3.5 w-3.5 text-yellow-300 transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-200/50">
          {title}
        </p>
        <div className="mt-1 text-[11px] leading-5 text-yellow-50/90">
          {children}
        </div>
      </div>
    </div>
  )
}

/* PARTNER BADGE COMPONENT */
function PartnerBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="group rounded-full border border-yellow-300 bg-white px-3.5 py-2 text-[10px] font-bold text-yellow-900/80 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-100 hover:text-yellow-950 hover:shadow-sm">
      {children}
    </div>
  )
}
