'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles, categories } from '@/lib/articles'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory)

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h1
            className="font-heading font-bold text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--text)' }}
          >
            Poker Reflex{' '}
            <span style={{ color: 'var(--green)' }}>Blog</span>
          </h1>
          <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
            Guides, strategy, and tips to sharpen your poker game.
          </p>

          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-150"
                style={{
                  backgroundColor:
                    activeCategory === cat ? 'var(--green)' : 'var(--surface)',
                  color:
                    activeCategory === cat ? 'var(--background)' : 'var(--text-secondary)',
                  border: `1px solid ${activeCategory === cat ? 'var(--green)' : 'var(--border)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block rounded-2xl border p-6 group"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  willChange: 'transform',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                {/* Category badge */}
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: 'rgba(74, 222, 128, 0.1)',
                    color: 'var(--green)',
                    border: '1px solid rgba(74, 222, 128, 0.25)',
                  }}
                >
                  {article.category}
                </span>

                <h2
                  className="font-heading font-bold text-lg md:text-xl mb-3 group-hover:text-green transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  {article.title}
                </h2>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                  <span>{article.readTime}</span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
