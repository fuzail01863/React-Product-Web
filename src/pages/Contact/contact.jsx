import React from 'react'


const Contact = () => {
  return (
    <section className="min-h-screen bg-[#fffaf7] px-4 py-12 text-slate-800 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-pink-100 bg-white shadow-[0_20px_60px_-25px_rgba(217,119,106,0.2)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-gradient-to-br from-[#f7d8c8] via-[#fff2ea] to-[#f4b9a0] p-6 sm:p-8 lg:p-12">
            <p className="mb-4 inline-flex rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
              Contact Us
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Let’s talk beauty, skincare, and your next launch.
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-700">
              Whether you’re building a new collection or want to know more about our premium formulas, we’d love to hear from you.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700 sm:mt-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">📍</div>
                <span>49 Smith St., Saint Cloud, MN 56301</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">✉️</div>
                <span>hello@lumibeauty.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70">📞</div>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in your details and we’ll reach out shortly.
              </p>
            </div>

            <form className="space-y-5 sm:space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fffaf7] px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-[#fffaf7] px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Product inquiry"
                  className="w-full rounded-2xl border border-slate-200 bg-[#fffaf7] px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your idea..."
                  className="w-full rounded-2xl border border-slate-200 bg-[#fffaf7] px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#d9776a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-[#c96b5f]"
              >
                Send Message
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
