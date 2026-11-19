
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Experienced Specialists",
    description:
      "Our experienced eye specialists provide professional diagnosis and personalized treatment.",
  },
  {
    number: "02",
    title: "Advanced Technology",
    description:
      "We use modern medical equipment to ensure accurate diagnosis and effective treatment.",
  },
  {
    number: "03",
    title: "Patient-Centered Care",
    description:
      "Your vision and comfort are our priorities. We focus on providing quality patient care.",
  },
  {
    number: "04",
    title: "Complete Eye Solutions",
    description:
      "From routine eye checkups to specialized treatments, we provide comprehensive eye care.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800">

      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 font-semibold uppercase tracking-widest text-blue-600">
            About Our Hospital
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Caring for Your Vision, Improving Your Life.
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-slate-600">
            We are dedicated to protecting your eyesight through
            professional eye care, modern technology and compassionate service.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div className="relative">
          <Image
            src="/images/eye-hospital.jpg"
            alt="Eye care hospital"
            width={600}
            height={450}
            className="h-[400px] w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Dedicated to Better Eye Health
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            At EyeCare Hospital, we believe everyone deserves
            clear vision and healthy eyes. Our goal is to provide
            reliable eye care services in a comfortable and
            professional environment.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our team is committed to delivering personalized
            care using modern medical technology and a
            patient-first approach.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
                ✦
              </div>

              <h3 className="text-2xl font-bold">Our Mission</h3>

              <p className="mt-4 leading-8 text-slate-600">
                To provide accessible, quality eye care services
                through professional expertise, modern technology
                and compassionate patient support.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
                ◈
              </div>

              <h3 className="text-2xl font-bold">Our Vision</h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become a trusted destination for comprehensive
                eye care and help people enjoy healthier vision
                and better lives.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Your Vision Deserves the Best Care
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            We combine professional expertise and modern facilities
            to make your eye care experience better.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-100 p-7 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-3xl font-bold text-blue-200">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Take the First Step Toward Better Vision
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Your eye health matters. Get in touch with our team
          and schedule your appointment.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Book an Appointment
        </Link>
      </section>

    </main>
  );
}
