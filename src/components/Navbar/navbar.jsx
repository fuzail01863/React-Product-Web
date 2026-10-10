import React from 'react'
import { NavLink } from 'react-router'

const navbar = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/auth', label: 'Account' },
    { to: '/products', label: 'Products' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-[#fffaf7]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <NavLink to="/" className="text-2xl font-black tracking-tight text-slate-900">
            Lumi<span className="text-[#d9776a]">Beauty</span>
          </NavLink>

          <div className="flex flex-wrap items-center gap-2 md:gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-pink-100 text-pink-700'
                      : 'text-slate-600 hover:bg-pink-50 hover:text-pink-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button className="rounded-full bg-[#d9776a] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-[#c96b5f] sm:px-5">
            Shop Now
          </button>
        </div>
      </nav>
    </header>
  )
}

export default navbar