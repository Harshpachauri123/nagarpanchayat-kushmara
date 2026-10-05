"use client"

import { m } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  MessageSquarePlus,
  PhoneCall,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"

export default function GrievanceBanner() {
  return (
    <section
      id="public-grievance"
      className="
        relative
        overflow-hidden
        bg-linear-to-b
        from-[#FFFBEB]
        via-[#FEF3C7]
        to-[#FDE68A]
        px-4
        py-16
        font-sans
        sm:py-20
        md:px-8
        md:py-24
      "
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOWS (YELLOW & GOLD ATMOSPHERE)
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-400/20
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-10
          h-64
          w-64
          rounded-full
          bg-yellow-300/30
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className=" pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-linear-to-b from-amber-500/15 to-transparent blur-[110px]"
      />

      {/* =====================================================
          PREMIUM GRID PATTERN (WARM AMBER STROKES)
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(217,119,6,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(217,119,6,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 45%, transparent 100%)",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <m.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-amber-400/50
            bg-linear-to-br
            from-[#78350F]
            via-[#B45309]
            to-[#451A03]
            p-7
            shadow-[0_25px_70px_rgba(180,83,9,0.25)]
            sm:p-9
            md:rounded-[34px]
            md:p-12
          "
        >

          {/* =================================================
              CARD BACKGROUND EFFECTS
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-80
              w-80
              rounded-full
              bg-amber-300/[0.12]
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-72
              w-72
              rounded-full
              bg-yellow-400/[0.1]
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[18%]
              top-0
              h-40
              w-40
              rounded-full
              bg-[#FBBF24]/[0.15]
              blur-3xl
            "
          />

          {/* =================================================
              ARCHITECTURAL GRID
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.05]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  90deg,
                  #ffffff 1px,
                  transparent 1px
                ),
                linear-gradient(
                  #ffffff 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "42px 42px",
            }}
          />

          {/* =================================================
              BRIGHT YELLOW/GOLD TOP LINE ACCENT
          ================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-x-0
              top-0
              h-[4px]
              bg-linear-to-r
              from-transparent
              via-[#FBBF24]
              to-transparent
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-9
              lg:flex-row
              lg:gap-12
            "
          >

            {/* =================================================
                LEFT CONTENT - KUSHMARA MAINPURI
            ================================================== */}

            <div
              className="
                max-w-2xl
                text-center
                lg:text-left
              "
            >

              {/* Badge */}

              <m.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                }}
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-amber-300/40
                  bg-amber-950/40
                  px-3.5
                  py-1.5
                  shadow-sm
                  backdrop-blur-xl
                "
              >

                <span
                  className="
                    relative
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-amber-400/20
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-amber-400/20
                    "
                  />

                  <ShieldCheck
                    className="
                      relative
                      h-3.5
                      w-3.5
                      text-amber-300
                    "
                  />
                </span>

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-amber-300
                    sm:text-[10px]
                  "
                >
                  जन शिकायत निवारण प्रणाली
                </span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-amber-400
                  "
                />

                <span
                  className="
                    hidden
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-amber-100/70
                    sm:inline
                  "
                >
                  Public Grievance Portal
                </span>

              </m.div>

              {/* Heading */}

              <m.h2
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="
                  font-serif
                  text-2xl
                  font-black
                  leading-[1.15]
                  tracking-[-0.02em]
                  text-white
                  sm:text-3xl
                  md:text-4xl
                "
              >
                नगर पंचायत कुसमरा से संबंधित कोई{" "}

                <span
                  className="
                    bg-linear-to-r
                    from-[#FDE047]
                    via-[#FBBF24]
                    to-[#F59E0B]
                    bg-clip-text
                    text-transparent
                  "
                >
                  शिकायत या सुझाव है?
                </span>
              </m.h2>

              {/* Yellow/Gold Divider */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:justify-start
                "
              >
                <span
                  className="
                    h-[2px]
                    w-12
                    rounded-full
                    bg-amber-400
                  "
                />

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-yellow-300
                    shadow-[0_0_12px_rgba(253,224,71,0.6)]
                  "
                />

                <span
                  className="
                    h-[2px]
                    w-5
                    rounded-full
                    bg-white/20
                  "
                />
              </div>

              {/* Description */}

              <m.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="
                  mt-5
                  max-w-xl
                  text-[11px]
                  font-medium
                  leading-6
                  text-amber-100/90
                  sm:text-xs
                  md:text-sm
                  md:leading-7
                "
              >
                अपनी समस्या, शिकायत या सुझाव सीधे ऑनलाइन दर्ज कराएं।
                नगर पंचायत कुसमरा, मैनपुरी क्षेत्र के नागरिकों को स्वच्छ,
                सुरक्षित, पारदर्शी और त्वरित नागरिक सुविधाएं प्रदान करने के लिए
                सदैव प्रतिबद्ध है।
              </m.p>

              {/* Trust Indicators */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-2.5
                  lg:justify-start
                "
              >

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="
                      h-3.5
                      w-3.5
                      text-amber-300
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-amber-100/75
                      sm:text-[9px]
                    "
                  >
                    आसान पंजीकरण
                  </span>
                </div>

                <span
                  className="
                    hidden
                    h-4
                    w-px
                    bg-amber-400/20
                    sm:block
                  "
                />

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="
                      h-3.5
                      w-3.5
                      text-amber-300
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-amber-100/75
                      sm:text-[9px]
                    "
                  >
                    पारदर्शी प्रक्रिया
                  </span>
                </div>

                <span
                  className="
                    hidden
                    h-4
                    w-px
                    bg-amber-400/20
                    sm:block
                  "
                />

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    className="
                      h-3.5
                      w-3.5
                      text-amber-300
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-amber-100/75
                      sm:text-[9px]
                    "
                  >
                    त्वरित समाधान
                  </span>
                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT ACTION PANEL
            ================================================== */}

            <m.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.2,
              }}
              className="
                w-full
                shrink-0
                lg:w-[340px]
              "
            >

              <div
                className="rounded-2xl border border-amber-400/30 bg-amber-950/40 p-3 shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              >

                {/* =================================================
                    MAIN CTA (YELLOW / AMBER GOLD BUTTON)
                ================================================== */}

                <Link
                  href="/public-grievance"
                  className=" group flex min-h-[60px] w-full  items-center justify-between rounded-xl bg-linear-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] px-4 text-white shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:from-[#FBBF24]
                    hover:via-[#F59E0B]
                    hover:to-[#D97706]
                    hover:shadow-[0_16px_38px_rgba(245,158,11,0.45)]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-300
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#78350F]
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/20
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <MessageSquarePlus
                        className="h-4 w-4 text-white"
                      />
                    </span>

                    <span className="text-left">

                      <span
                        className="
                          block
                          text-[10px]
                          font-black
                          uppercase
                          tracking-[0.08em]
                          text-white
                        "
                      >
                        शिकायत दर्ज करें
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[8px]
                          font-medium
                          text-amber-100/80
                        "
                      >
                        Submit your grievance online
                      </span>

                    </span>

                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:bg-white/20
                    "
                  >
                    <ArrowRight
                      className="h-4 w-4 text-white"
                    />
                  </span>

                </Link>

                {/* =================================================
                    CONTACT CTA
                ================================================== */}

                <Link
                  href="/contact"
                  className="
                    group
                    mt-2
                    flex
                    min-h-[60px]
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-amber-300/20
                    bg-white/[0.05]
                    px-4
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-amber-300/40
                    hover:bg-white/[0.1]
                    hover:shadow-lg
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-amber-300/50
                  "
                >

                  <span
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-white/10
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <PhoneCall className="h-4 w-4 text-amber-300" />
                    </span>

                    <span className="text-left">

                      <span
                        className=" block text-[10px] font-black  uppercase  tracking-[0.08em] "
                      >
                        संपर्क करें
                      </span>

                      <span
                        className=" mt-0.5 block text-[8px] font-medium text-amber-100/70 "
                      >
                        Get in touch with us
                      </span>

                    </span>

                  </span>

                  <span
                    className="  flex  h-8 w-8 items-center  justify-center rounded-lg bg-white/5 transition-all duration-300 group-hover:translate-x-1  group-hover:bg-white/15 "
                  >
                    <ArrowRight className="h-4 w-4 text-white/80" />
                  </span>

                </Link>

              </div>

            </m.div>

          </div>

        </m.div>

      </div>
    </section>
  )
}
