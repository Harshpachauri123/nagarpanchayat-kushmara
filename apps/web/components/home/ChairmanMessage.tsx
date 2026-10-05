"use client"

import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Landmark,
  MapPin,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

const serviceLinks = [
  {
    name: "हमारे बारे में",
    path: "/about",
    icon: Landmark,
    description: "नगर पंचायत कुसमरा के बारे में जानें",
  },
  {
    name: "नागरिक सेवाएं",
    path: "/services",
    icon: Building2,
    description: "नगर पंचायत की प्रमुख सेवाएं",
  },
  {
    name: "जन शिकायत",
    path: "/public-grievance",
    icon: Megaphone,
    description: "शिकायत दर्ज करें और स्थिति जानें",
  },
  {
    name: "सरकारी योजनाएं",
    path: "/schemes",
    icon: Sparkles,
    description: "नागरिकों के लिए प्रमुख योजनाएं",
  },
  {
    name: "संपत्ति कर",
    path: "/propertytax",
    icon: FileText,
    description: "संपत्ति कर से संबंधित सेवाएं",
  },
]

const quickLinks = [
  {
    title: "नागरिक सेवाएं",
    description: "नगर पंचायत द्वारा उपलब्ध प्रमुख नागरिक सेवाएं",
    href: "/services",
    icon: Building2,
  },
  {
    title: "जन शिकायत",
    description: "अपनी समस्या या शिकायत ऑनलाइन दर्ज करें",
    href: "/public-grievance",
    icon: Megaphone,
  },
  {
    title: "सरकारी योजनाएं",
    description: "केंद्र एवं राज्य सरकार की योजनाओं की जानकारी",
    href: "/schemes",
    icon: Sparkles,
  },
  {
    title: "संपर्क कार्यालय",
    description: "नगर पंचायत कार्यालय से संपर्क करें",
    href: "/contact",
    icon: Phone,
  },
]

export default function KusmaraContent() {
  return (
    <main className="min-h-screen bg-linear-to-br from-amber-50 via-yellow-50/30 to-orange-50">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-amber-200/60">
        {/* Background decorations */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-amber-500/20 blur-[100px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#b45309 1px, transparent 1px), linear-gradient(90deg, #b45309 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Location badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-amber-900 shadow-sm backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-amber-600" />

              <span>Nagar Panchayat Kushmara • Mainpuri</span>
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              नगर पंचायत{" "}
              <span className="bg-linear-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
                कुसमरा
              </span>
            </h1>

            <p className="mt-3 text-lg font-bold text-amber-700 sm:text-xl">
              Kushmara, Mainpuri, Uttar Pradesh
            </p>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
              नगर पंचायत कुसमरा, मैनपुरी की आधिकारिक डिजिटल पहल में आपका स्वागत
              है। नागरिकों को स्वच्छ, सुदृढ़ और सुविधाजनक नागरिक सेवाएं प्रदान
              करने के लिए यह पोर्टल ऑनलाइन सुविधाओं और महत्वपूर्ण जानकारियों तक
              आसान पहुंच प्रदान करता है।
            </p>

            {/* Divider */}

            <div className="mt-7 flex items-center justify-center gap-2">
              <span className="h-1 w-16 rounded-full bg-linear-to-r from-amber-500 to-yellow-400" />

              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <span className="h-1 w-16 rounded-full bg-linear-to-r from-orange-400 to-amber-600" />
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-black text-amber-950 shadow-lg shadow-amber-900/15 transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
              >
                नागरिक सेवाएं देखें
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300 bg-white/90 px-6 py-3.5 text-sm font-black text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:bg-amber-100/50 hover:text-amber-900"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                संपर्क कार्यालय
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK INFORMATION
      ====================================================== */}

      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-amber-900">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              Citizen Services
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              नागरिकों के लिए महत्वपूर्ण सेवाएं
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              नगर पंचायत कुसमरा की विभिन्न प्रशासनिक सेवाओं और नागरिक सुविधाओं तक आसानी
              से पहुंच प्राप्त करें।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item, index) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-2xl border border-amber-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl"
                >
                  <div
                    className={`absolute right-0 top-0 h-20 w-20 rounded-bl-[50px] ${
                      index % 2 === 0 ? "bg-amber-100/60" : "bg-orange-100/60"
                    }`}
                  />

                  <div
                    className={`relative flex h-11 w-11 items-center justify-center rounded-xl ${
                      index % 2 === 0
                        ? "bg-amber-100 text-amber-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-sm font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-[11px] font-black text-amber-700">
                    अधिक जानकारी
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT KUSMARA
      ====================================================== */}

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* About */}

            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 shadow-[0_15px_50px_rgba(180,83,9,0.05)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-amber-950 shadow-md">
                  <Landmark className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                    About Us
                  </p>

                  <h2 className="text-xl font-black text-slate-900">
                    नगर पंचायत कुसमरा के बारे में
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                नगर पंचायत कुसमरा, जनपद मैनपुरी, उत्तर प्रदेश में स्थानीय
                नागरिक प्रशासन और विकास कार्यों के कुशल संचालन हेतु प्रतिबद्ध है।
                हमारा मुख्य उद्देश्य नगर क्षेत्र के निवासियों को गुणवत्तापूर्ण
                मूलभूत सुविधाएं उपलब्ध कराना तथा कुसमरा को एक स्वच्छ, सुंदर और
                आधुनिक नगर के रूप में विकसित करना है।
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "सफाई एवं अपशिष्ट प्रबंधन",
                  "मार्ग प्रकाश एवं पथ प्रकाश व्यवस्था",
                  "पेयजल आपूर्ति एवं जल निकासी",
                  "नागरिक शिकायत निवारण प्रणाली",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-amber-100 bg-amber-50/50 p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />

                    <span className="text-xs font-bold text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Card */}

            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-950 via-amber-900 to-yellow-950 p-6 text-white shadow-xl sm:p-8">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-yellow-500/10" />

              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-amber-950 shadow-lg shadow-amber-950/40">
                  <MapPin className="h-5 w-5" />
                </div>

                <p className="mt-5 text-[10px] font-black uppercase tracking-[0.15em] text-yellow-300">
                  Official Location
                </p>

                <h3 className="mt-2 text-2xl font-black">नगर पंचायत कुसमरा</h3>

                <p className="mt-1 text-sm font-semibold text-amber-200">
                  Kusmara, Mainpuri, Uttar Pradesh
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-900/40 p-3 backdrop-blur-sm">
                    <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-amber-200/70">
                        Local Administration
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        Nagar Panchayat, Kusmara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-900/40 p-3 backdrop-blur-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />

                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wider text-amber-200/70">
                        District
                      </p>

                      <p className="mt-1 text-xs font-bold">
                        Mainpuri, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-xs font-black text-amber-950 transition-all hover:bg-yellow-300"
                >
                  कार्यालय से संपर्क करें
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE NAVIGATION
      ====================================================== */}

      <section className="border-y border-amber-200/70 bg-white/80 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-amber-700">
                Explore Portal
              </p>

              <h2 className="mt-1 text-2xl font-black text-slate-950">
                नगर पंचायत पोर्टल
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <ShieldCheck className="h-4 w-4 text-amber-600" />
              Official Citizen Portal
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceLinks.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="group rounded-2xl border border-amber-200/60 bg-amber-50/30 p-4 transition-all hover:-translate-y-0.5 hover:border-amber-400 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800 shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>

                    <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-600" />
                  </div>

                  <h3 className="mt-3 text-xs font-black text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-slate-500">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CITIZEN SUPPORT
      ====================================================== */}

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-amber-900 via-amber-800 to-yellow-900 p-6 shadow-xl sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-[10px] font-black text-yellow-200">
                  <Users className="h-3.5 w-3.5 text-yellow-400" />
                  Citizen Support
                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  आपकी सेवा, हमारी प्राथमिकता
                </h2>

                <p className="mt-3 text-sm leading-6 text-amber-100/90">
                  नगर पंचायत कुसमरा नागरिकों की समस्याओं, सुझावों और आवश्यकताओं
                  के प्रति उत्तरदायी एवं पारदर्शी शासन-प्रशासन के लिए समर्पित है।
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/public-grievance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-xs font-black text-amber-950 shadow-lg transition-all hover:bg-yellow-300"
                >
                  <Megaphone className="h-4 w-4" />
                  शिकायत दर्ज करें
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/30 bg-white/10 px-5 py-3.5 text-xs font-black text-white transition-all hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 text-amber-300" />
                  संपर्क करें
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
