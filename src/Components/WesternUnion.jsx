import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Landmark,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import heroImage from '../Images/everest2.jpg';
import textureImage from '../Images/mountainbg.png';

const paymentSteps = [
  {
    title: 'Confirm Your Trip',
    description:
      'Chat with our team first so we can confirm dates, availability, and the amount due for your reservation.',
  },
  {
    title: 'Receive Secure Details',
    description:
      'We share the latest receiver details directly after confirmation to keep the transfer accurate and secure.',
  },
  {
    title: 'Send And Share Receipt',
    description:
      'Complete the Western Union transfer and send us the MTCN number or payment receipt for quick verification.',
  },
];

const supportPoints = [
  'Fast reservation support from our Pokhara team',
  'Clear guidance before and after the transfer',
  'Confirmation once your payment has been verified',
];

const WesternUnion = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#e7eef4]" />
        <img
          src={textureImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#ca8a04]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#00304a]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#00304a] text-white shadow-[0_24px_80px_rgba(0,48,74,0.24)]">
          <img
            src={heroImage}
            alt="Mountain landscape in Nepal"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001a2c]/90 via-[#00304a]/78 to-[#00304a]/55" />

          <div className="relative flex h-full flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#facc15] backdrop-blur-sm">
                <Landmark size={16} />
                Western Union Support
              </span>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Send your advance payment with confidence.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  We make the transfer process feel simple and personal, with direct
                  guidance from our team before you send anything.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-[#facc15]">
                  <ShieldCheck size={20} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Security First
                  </p>
                </div>
                <p className="text-sm leading-7 text-white/80">
                  Receiver details are shared only after your trip is confirmed so your
                  booking stays protected and accurate.
                </p>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3 text-[#facc15]">
                  <BadgeCheck size={20} />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Quick Validation
                  </p>
                </div>
                <p className="text-sm leading-7 text-white/80">
                  Once you share the receipt or MTCN, we can confirm your reservation
                  and continue planning the trip with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ca8a04]">
              Payment Guide
            </p>
            <h3 className="text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl">
              A polished, traveler-friendly way to handle your booking deposit.
            </h3>
            <p className="text-base leading-8 text-slate-600">
              This section is designed to reassure guests, explain the process clearly,
              and keep payment communication aligned with the premium feel of the site.
            </p>
          </div>

          <div className="space-y-4">
            {paymentSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#00304a] text-base font-bold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0f172a]">{step.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-[#ca8a04]/20 bg-gradient-to-br from-[#fffaf0] to-white p-6 shadow-[0_16px_50px_rgba(202,138,4,0.08)]">
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-full bg-[#ca8a04]/15 p-2 text-[#ca8a04]">
                <MapPin size={18} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-[#0f172a]">
                  Why this fits your brand
                </h4>
                <div className="space-y-2">
                  {supportPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ca8a04]" />
                      <p className="text-sm leading-7 sm:text-base">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ca8a04] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#b77902]"
            >
              Contact For Payment Details
              <ArrowRight size={18} />
            </Link>

            <a
              href="mailto:backtonatureadventure@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#00304a] transition duration-300 hover:border-[#00304a] hover:bg-white"
            >
              <Mail size={18} />
              backtonatureadventure@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <PhoneCall size={18} className="text-[#00304a]" />
              <span>Need help right away? Call or WhatsApp us at +977 9840097901.</span>
            </div>
            <a
              href="tel:+9779840097901"
              className="font-semibold text-[#00304a] transition-colors duration-300 hover:text-[#ca8a04]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WesternUnion;
