import React from 'react'

const navber = () => {
  return (
    <div>
           {/* TOPBAR */}
      <div className="hidden bg-[#102C46] text-sm text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <Phone size={15} />
              +880 1715-363919
            </span>

            <span className="flex items-center gap-2">
              <Mail size={15} />
              info@eyecarehospital.com
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <Clock3 size={15} />
            Saturday - Thursday: 9:00 AM - 8:00 PM
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-lg shadow-sky-200">
              <Eye size={28} />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-[#102C46]">
                EyeCare<span className="text-sky-600">.</span>
              </h1>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                Advanced Eye Hospital
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <Link href="/" className="text-sky-600">Home</Link>
            <Link href="/about" className="transition hover:text-sky-600">About Us</Link>
            <Link href="/doctors" className="transition hover:text-sky-600">Our Doctors</Link>
            <Link href="/services" className="transition hover:text-sky-600">Services</Link>
            <Link href="/blog" className="transition hover:text-sky-600">Blog</Link>
            <Link href="/contact" className="transition hover:text-sky-600">Contact</Link>
          </div>

          <div className="hidden lg:block">
            <Link
              href="/appointment"
              className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              <CalendarDays size={17} />
              Book Appointment
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* CSS-only mobile menu */}
          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl bg-slate-100 text-[#102C46] [&::-webkit-details-marker]:hidden">
              <Menu className="group-open:hidden" />
              <X className="hidden group-open:block" />
            </summary>

            <div className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl">
              <div className="flex flex-col gap-1 text-sm font-semibold">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Our Doctors", "/doctors"],
                  ["Services", "/services"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([name, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className="rounded-lg px-4 py-3 transition hover:bg-sky-50 hover:text-sky-600"
                  >
                    {name}
                  </Link>
                ))}

                <Link
                  href="/appointment"
                  className="mt-2 rounded-xl bg-sky-600 px-4 py-3 text-center text-white"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </details>
        </nav>
      </header>
    </div>
  )
}

export default navber
