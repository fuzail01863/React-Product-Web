import React, { useState } from 'react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center bg-[#fffaf7] px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-pink-100 bg-white shadow-[0_20px_60px_-25px_rgba(217,119,106,0.25)]">
        <div className="grid min-h-[620px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-gradient-to-br from-[#f7d8c8] via-[#fff2ea] to-[#f4b9a0] p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.55),_transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-pink-600">Lumi Beauty</p>
                <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  {isLogin ? 'Welcome back, glow seeker' : 'Create your beauty account'}
                </h1>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
                  {isLogin
                    ? 'Sign in to continue your skincare and beauty ritual with us.'
                    : 'Join us to discover soft glow essentials and premium cosmetic favorites.'}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/70 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-700">
                  <span className="font-semibold">Member perks</span>
                  <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-semibold text-pink-600">New</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-[#fff7f2] p-3 text-center">
                    <div className="text-lg font-bold text-slate-900">10%</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Off</div>
                  </div>
                  <div className="rounded-2xl bg-[#fff7f2] p-3 text-center">
                    <div className="text-lg font-bold text-slate-900">Free</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Shipping</div>
                  </div>
                  <div className="rounded-2xl bg-[#fff7f2] p-3 text-center">
                    <div className="text-lg font-bold text-slate-900">24/7</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#fffaf7] p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 grid grid-cols-2 rounded-full border border-pink-100 bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    isLogin ? 'bg-[#d9776a] text-white shadow-lg shadow-pink-200' : 'text-slate-500'
                  }`}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    !isLogin ? 'bg-[#d9776a] text-white shadow-lg shadow-pink-200' : 'text-slate-500'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Ayesha Khan"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                    />
                  </div>
                )}

                {isLogin && (
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
                      Remember me
                    </label>
                    <a href="#" className="text-pink-600 hover:text-pink-700">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-[#d9776a] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-[#c96b5f]"
                >
                  {isLogin ? 'Login' : 'Create Account'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
