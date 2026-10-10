import React from 'react'

const Landing = () => {
  const highlights = [
    {
      title: 'Botanical Glow',
      text: 'Soft radiance powered by skin-loving botanicals.',
      iconUrl: 'https://img.icons8.com/ios-filled/50/000000/leaf.png',
    },
    {
      title: 'Cruelty-Free',
      text: 'Beauty that feels good and stays kind to nature.',
      iconUrl: 'https://img.icons8.com/ios-filled/50/000000/rabbit.png',
    },
    {
      title: 'Daily Ritual',
      text: 'Simple, elegant products for every morning routine.',
      iconUrl: 'https://img.icons8.com/ios-filled/50/000000/sparkles.png',
    },
  ]

  const bestSellers = [
    {
      name: 'Velvet Dew Serum',
      price: '$38',
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Rose Petal Cream',
      price: '$28',
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Luminous Lip Tint',
      price: '$24',
      tag: 'Trending',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fffaf7] text-slate-800">
      <main>
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-600">
                Luxury beauty essentials
              </div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Glow naturally with cosmetics made for everyday elegance.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Discover radiant skincare and makeup essentials crafted with nourishing ingredients and a soft, flattering finish.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[#d9776a] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-[#c96b5f]">
                  Shop Best Sellers
                </button>
                <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-pink-300 hover:text-pink-600">
                  Explore Collection
                </button>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 border-t border-slate-200 pt-6 text-sm text-slate-600">
                <div>
                  <div className="text-xl font-bold text-slate-900">4.9/5</div>
                  <div>Customer love</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">100%</div>
                  <div>Vegan formula</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">24h</div>
                  <div>Fast shipping</div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-pink-100 bg-gradient-to-br from-[#fff2ea] via-[#fffaf7] to-[#ffe6df] p-4 shadow-[0_20px_60px_-20px_rgba(217,119,106,0.35)] sm:p-6">
              <div className="rounded-[28px] border border-white/70 bg-white p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">Featured</span>
                  <span className="text-sm text-slate-500">New in</span>
                </div>

                <div className="rounded-[24px] bg-[#fdf3ee] p-5">
                  <div className="mb-4 aspect-[4/5] overflow-hidden rounded-[22px]">
                    <img
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
                      alt="Rose Quartz Glow Set"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Rose Quartz Glow Set</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">A velvety duo that gives skin a healthy, dewy finish.</p>
                    </div>
                    <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-pink-600">$54</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-pink-100 bg-white/70">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:gap-6">
              {[
                {
                  label: 'Dermatologist tested',
                  iconUrl: 'https://img.icons8.com/ios-filled/50/000000/stethoscope.png',
                },
                { label: 'Cruelty-free', iconUrl: 'https://img.icons8.com/ios-filled/50/000000/rabbit.png' },
                { label: 'Vegan', iconUrl: 'https://img.icons8.com/ios-filled/50/000000/leaf.png' },
                { label: 'Free shipping', iconUrl: 'https://img.icons8.com/ios-filled/50/000000/delivery.png' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-b from-[#fffaf7] to-white px-4 py-6 shadow-sm transition-transform duration-200 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
                    <img src={item.iconUrl} alt={item.label} className="h-6 w-6 object-contain" loading="lazy" />
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Why customers love us</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Beauty that feels soft, fresh, and effortless</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50">
                  <img src={item.iconUrl} alt={item.title} className="h-6 w-6 object-contain" loading="lazy" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-18 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">Best sellers</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Popular picks this week</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-pink-600 hover:text-pink-700">View all</a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {bestSellers.map((product) => (
              <div key={product.name} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 aspect-[4/3] overflow-hidden rounded-[20px]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="mb-2 inline-flex rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">
                  {product.tag}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>Soft glow finish</span>
                  <span className="text-lg font-semibold text-slate-900">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing
