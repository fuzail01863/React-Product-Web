import React from 'react'
import { Link } from 'react-router'

const Notfound = () => {
  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-[#fffaf7] px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl rounded-[32px] border border-pink-100 bg-white p-8 text-center shadow-[0_20px_60px_-25px_rgba(217,119,106,0.25)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-500">Oops</p>
        <h1 className="mt-4 text-7xl font-black tracking-tight text-slate-900 sm:text-8xl">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">This page isn’t in the collection</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          The page you’re looking for may have moved, or it’s not part of our current beauty range. Let’s take you back to the glow.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/" className="rounded-full bg-[#d9776a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-[#c96b5f]">
            Back to Home
          </Link>
          <Link to="/products" className="rounded-full border border-slate-200 bg-[#fff7f2] px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-pink-300 hover:text-pink-700">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notfound
