

import { AdIcon, ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, Clock3, Eye, IceCream2, Mail, MapPin, Menu, Phone, Quote, ShieldCheck, Star, Stethoscope, Users, X } from "lucide-react";
import Link from "next/link";




// here remove all icons

const doctors = [
  {
    name: "Dr. Sarah Ahmed",
    title: "Senior Consultant",
    specialty: "Cataract & Refractive Surgery",
    experience: "15+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=85",
  },
  {
    name: "Dr. Michael Rahman",
    title: "Consultant Ophthalmologist",
    specialty: "Retina & Vitreous Specialist",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=85",
  },
  {
    name: "Dr. Emily Carter",
    title: "Associate Consultant",
    specialty: "Pediatric Eye Specialist",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=85",
  },
];

const services = [
  {
    // icon: ScanEye,
    title: "Cataract Surgery",
    description:
      "Advanced cataract diagnosis and modern surgical solutions for clearer vision.",
  },
  {
    // icon: Activity,
    title: "Retina Treatment",
    description:
      "Specialized care for retinal diseases with advanced diagnostic technology.",
  },
  {
    // icon: Eye,
    title: "Glaucoma Care",
    description:
      "Early detection, monitoring and treatment to protect your eyesight.",
  },
  {
    // icon: Glasses,
    title: "Vision Correction",
    description:
      "Personalized vision correction and comprehensive refractive eye care.",
  },
  {
    // icon: Microscope,
    title: "Eye Diagnostics",
    description:
      "Modern diagnostic testing for accurate eye examinations and evaluation.",
  },
  {
    // icon: Stethoscope,
    title: "General Eye Care",
    description:
      "Complete eye examinations and treatment for everyday vision problems.",
  },
];

const testimonials = [
  {
    name: "Nusrat Jahan",
    location: "Dhaka, Bangladesh",
    review:
      "The doctors were very professional and caring. The entire consultation process was smooth and comfortable.",
  },
  {
    name: "Rahim Uddin",
    location: "Gazipur, Bangladesh",
    review:
      "I received excellent care and a clear explanation of my eye condition. The staff were very helpful.",
  },
  {
    name: "Farzana Akter",
    location: "Mymensingh, Bangladesh",
    review:
      "The hospital environment was clean and welcoming. Booking an appointment was also very convenient.",
  },
];

const blogs = [
  {
    category: "Eye Health",
    date: "October 18, 2026",
    title: "5 Simple Habits to Maintain Healthy Eyes",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&q=85",
  },
  {
    category: "Eye Care Tips",
    date: "October 12, 2026",
    title: "Understanding the Early Signs of Cataracts",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=85",
  },
  {
    category: "Technology",
    date: "October 05, 2026",
    title: "How Modern Technology Improves Eye Care",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=85",
  },
];

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div
      className={`mb-12 max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
        <span className="h-2 w-2 rounded-full bg-sky-500" />
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

 

      {/* HERO SECTION */}
      <section className="relative isolate bg-[#F1F8FD]">
        <div className="absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              <ShieldCheck size={17} />
              Your Vision, Our Priority
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-[#102C46] sm:text-5xl lg:text-[64px]">
              See The World
              <span className="block text-sky-600">
                With Clarity.
              </span>
              Live Better.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-500 sm:text-lg">
              Experience advanced eye care with experienced specialists,
              modern technology and compassionate treatment designed
              around your vision.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="flex items-center gap-3 rounded-xl bg-sky-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-700"
              >
                Book An Appointment
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/doctors"
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#102C46] transition hover:border-sky-300 hover:text-sky-600"
              >
                Meet Our Doctors
                <Users size={18} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-sky-100 pt-8">
              <div>
                <div className="text-2xl font-extrabold text-[#102C46]">15+</div>
                <p className="mt-1 text-xs text-slate-500">Years of Excellence</p>
              </div>

              <div className="h-10 w-px bg-sky-200" />

              <div>
                <div className="text-2xl font-extrabold text-[#102C46]">25K+</div>
                <p className="mt-1 text-xs text-slate-500">Happy Patients</p>
              </div>

              <div className="h-10 w-px bg-sky-200" />

              <div>
                <div className="text-2xl font-extrabold text-[#102C46]">20+</div>
                <p className="mt-1 text-xs text-slate-500">Expert Doctors</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-sky-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] bg-sky-100 p-3 shadow-2xl shadow-sky-200/50">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1100&q=90"
                alt="Modern eye care hospital"
                className="h-[390px] w-full rounded-[25px] object-cover sm:h-[510px]"
              />

              <div className="absolute bottom-8 left-7 right-7 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:bottom-10 sm:left-10 sm:right-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Stethoscope size={25} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold text-[#102C46]">
                      Expert Eye Specialists
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Personalized care for every patient
                    </p>
                  </div>

                  <CheckCircle2 className="text-emerald-500" size={23} />
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-16 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#102C46]">Trusted Care</p>
                  <p className="text-xs text-slate-500">Patient focused</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-100 bg-white py-7">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 text-center sm:px-6 md:grid-cols-4">

          {[
            ["Expert Specialists", "Experienced eye care team"],
            ["Modern Technology", "Advanced diagnostic tools"],
            ["Patient First", "Personalized treatment"],
            ["Complete Eye Care", "Care at every stage"],
          ].map(([title, desc]) => (
            <div key={title}>
              <CheckCircle2 className="mx-auto mb-2 text-sky-600" size={23} />
              <h3 className="text-sm font-bold text-[#102C46]">{title}</h3>
              <p className="mt-1 text-xs text-slate-400">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85"
                alt="Eye care examination"
                className="h-64 w-full rounded-3xl object-cover sm:h-80"
              />

              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=85"
                alt="Medical diagnostic technology"
                className="mt-12 h-64 w-full rounded-3xl object-cover sm:h-80"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-sky-600 px-6 py-4 text-center text-white shadow-xl sm:bottom-8">
              <p className="text-3xl font-extrabold">15+</p>
              <p className="text-xs font-medium">Years of Experience</p>
            </div>
          </div>

          <div>
            <SectionHeading
              centered={false}
              eyebrow="About Our Hospital"
              title="Dedicated To Protecting Your Precious Vision"
              description="We combine experienced eye specialists, modern diagnostic technology and compassionate care to provide comprehensive eye treatment for every patient."
            />

            <div className="space-y-5">
              {[
                "Experienced ophthalmologists and specialists",
                "Advanced diagnostic and surgical facilities",
                "Personalized treatment and patient support",
                "Comprehensive eye care under one roof",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-sky-600" size={21} />
                  <span className="text-sm font-medium text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#102C46] px-6 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Discover Our Hospital
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#F5FAFE] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="Our Medical Services"
            title="Complete Eye Care For Every Vision"
            description="From routine eye examinations to specialized treatments, we provide comprehensive solutions to help protect and improve your vision."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/70"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                    <AdIcon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#102C46]">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-16 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-600"
                  >
                    Learn More
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-xl border border-sky-200 bg-white px-6 py-4 text-sm font-bold text-sky-700 transition hover:bg-sky-600 hover:text-white"
            >
              Explore All Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              centered={false}
              eyebrow="Meet Our Specialists"
              title="Experienced Doctors, Exceptional Care"
              description="Meet our dedicated eye care specialists committed to delivering personalized treatment and professional medical support."
            />

            <Link
              href="/doctors"
              className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sky-600"
            >
              View All Doctors
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-100/80"
              >
                <div className="relative overflow-hidden bg-sky-50">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-[340px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-2 text-xs font-bold text-sky-700 shadow-lg">
                    {doctor.experience}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    {doctor.title}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#102C46]">
                    {doctor.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {doctor.specialty}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <Link
                      href="/doctors"
                      className="text-sm font-bold text-[#102C46] transition hover:text-sky-600"
                    >
                      View Profile
                    </Link>

                    <Link
                      href="/appointment"
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition hover:bg-sky-600 hover:text-white"
                      aria-label={`Book appointment with ${doctor.name}`}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#102C46] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2">

          <div>
            <span className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-300">
              Why Choose EyeCare
            </span>

            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Your Eyes Deserve
              <span className="block text-sky-400">The Best Care.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
              Your vision matters to us. Our team is committed to providing
              reliable medical care through expertise, modern facilities
              and a patient-first approach.
            </p>

            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {[
                ["Expert Medical Team", "Skilled and experienced eye specialists."],
                ["Modern Equipment", "Advanced technology for accurate diagnosis."],
                ["Personalized Care", "Treatment plans based on patient needs."],
                ["Patient Support", "Friendly guidance throughout your visit."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400">
                    <CheckCircle2 size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=85"
              alt="Professional medical care"
              className="h-[480px] w-full rounded-[32px] object-cover"
            />

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-6 text-[#102C46] shadow-2xl sm:-left-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-sky-600" size={30} />
                <div>
                  <p className="font-extrabold">Quality First</p>
                  <p className="text-xs text-slate-500">
                    Care you can trust
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-sky-600 px-7 py-14 text-center text-white sm:px-12 sm:py-20">

          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/10" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <CalendarDays className="mx-auto mb-6" size={42} />

            <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
              Take The First Step
              <br />
              Towards Better Vision
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-sky-100 sm:text-base">
              Schedule a consultation with our eye care specialists
              and get the professional attention your vision deserves.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/appointment"
                className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-sky-700 transition hover:-translate-y-1 hover:bg-sky-50"
              >
                Book Your Appointment
                <ArrowRight size={18} />
              </Link>

              <a
                href="tel:+8801715363919"
                className="flex items-center gap-3 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#F5FAFE] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <SectionHeading
            eyebrow="Patient Experiences"
            title="What Our Patients Say"
            description="Patient experiences matter to us. We strive to make every visit comfortable, respectful and focused on quality care."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Quote className="mb-5 text-sky-200" size={36} />

                <div className="mb-5 flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="min-h-28 text-sm leading-7 text-slate-600">
                  "{item.review}"
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <h3 className="font-bold text-[#102C46]">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading
              centered={false}
              eyebrow="Health & Knowledge"
              title="Latest Eye Care Insights"
              description="Explore useful articles and practical information to help you understand and maintain healthy vision."
            />

            <Link
              href="/blog"
              className="mb-12 inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sky-600"
            >
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
                      {blog.category}
                    </span>
                    <span className="text-xs text-slate-400">{blog.date}</span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#102C46] transition group-hover:text-sky-600">
                    {blog.title}
                  </h3>

                  <Link
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-600"
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="border-y border-slate-100 bg-[#F5FAFE] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-3">

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
              <MapPin size={25} />
            </div>
            <div>
              <h3 className="font-bold text-[#102C46]">Visit Our Hospital</h3>
              <p className="mt-1 text-sm text-slate-500">
                Your hospital address here
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
              <Phone size={25} />
            </div>
            <div>
              <h3 className="font-bold text-[#102C46]">Call For Assistance</h3>
              <a href="tel:+8801715363919" className="mt-1 block text-sm text-slate-500">
                +880 1715-363919
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm">
              <Mail size={25} />
            </div>
            <div>
              <h3 className="font-bold text-[#102C46]">Email Us</h3>
              <a href="mailto:info@eyecarehospital.com" className="mt-1 block text-sm text-slate-500">
                info@eyecarehospital.com
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#102C46] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600">
                <Eye size={27} />
              </div>

              <div>
                <h2 className="text-xl font-extrabold">
                  EyeCare<span className="text-sky-400">.</span>
                </h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Advanced Eye Hospital
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-8 text-slate-400">
              Providing professional eye care with advanced technology,
              experienced specialists and compassionate treatment.
              Your vision is our priority.
            </p>

            <div className="mt-7 flex gap-3">
              {/* {[Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={index === 0 ? "Facebook" : "Instagram"}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-sky-600"
                >
                  <Icon size={19} />
                </a>
              ))} */}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <Link href="/about" className="transition hover:text-sky-400">About Us</Link>
              <Link href="/doctors" className="transition hover:text-sky-400">Our Doctors</Link>
              <Link href="/services" className="transition hover:text-sky-400">Our Services</Link>
              <Link href="/appointment" className="transition hover:text-sky-400">Book Appointment</Link>
              <Link href="/contact" className="transition hover:text-sky-400">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Contact Information</h3>
            <div className="space-y-5 text-sm text-slate-400">
              <p className="flex gap-3">
                <MapPin className="shrink-0 text-sky-400" size={19} />
                Your hospital address here
              </p>

              <p className="flex gap-3">
                <Phone className="shrink-0 text-sky-400" size={19} />
                +880 1715-363919
              </p>

              <p className="flex gap-3">
                <Mail className="shrink-0 text-sky-400" size={19} />
                info@eyecarehospital.com
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-xs text-slate-400 sm:px-6 md:flex-row">
            <p>© {new Date().getFullYear()} EyeCare Hospital. All rights reserved.</p>
            <p>Designed with care for better vision.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
