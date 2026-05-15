'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What makes Poker Reflex different?',
    answer: 'Most trainers show you a range chart and ask you to memorize it. Poker Reflex makes you decide, hand by hand, position by position, and gives you instant feedback. You build real reflexes through repetition, not memorization. And it covers everything: opens, 3-bets, 4-bets, all-in spots, across multiple stack depths.',
  },
  {
    question: 'What scenarios can I train?',
    answer: 'Poker Reflex covers all preflop scenarios: opening ranges, 3-bet situations, 4-bet spots, and all-in decisions. You can practice across multiple stack depths to understand how stack size affects optimal strategy. Whether you\'re facing an open, deciding on a 3-bet, or considering a 4-bet jam, we\'ve got you covered.',
  },
  {
    question: 'What positions can I train?',
    answer: 'All 6 preflop positions: UTG, MP, CO, BTN, SB, and BB. Each position has its own GTO opening range, and you can practice them individually or all together. Cash games and tournament spots included.',
  },
  {
    question: 'Can I customize the ranges?',
    answer: 'Yes. You can fully edit the ranges for every position and create your own custom strategy. This is perfect if you play a specific style, target specific stakes, or want to train a solver-approved range you\'ve built yourself.',
  },
  {
    question: 'How does the ELO rating work?',
    answer: "Your ELO rating increases when you make correct GTO decisions and decreases for mistakes. It's a great way to track improvement over time.",
  },
  {
    question: 'Is this for beginners or advanced players?',
    answer: 'Both. Beginners can start with ready-to-use GTO ranges and build solid fundamentals from day one. Intermediate players can customize ranges, focus on specific positions, and use the ELO system to identify and fix leaks in their game.',
  },
  {
    question: 'How long does it take to see improvement?',
    answer: 'Most players notice improvement in their preflop consistency within 1 to 2 weeks of daily sessions. Just 5 minutes a day is enough. The ELO rating and accuracy stats will show you exactly where you are improving and where you still have work to do.',
  },
  {
    question: 'Is there a premium version?',
    answer: 'Poker Reflex is currently free to download and use. We are working on premium features for advanced players, so stay tuned!',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const id = question.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-${id}`}
        id={`faq-btn-${id}`}
      >
        <span className="font-heading font-semibold text-text pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-textSecondary flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-${id}`}
            role="region"
            aria-labelledby={`faq-btn-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 text-textSecondary leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-16 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Frequently Asked{' '}
          <span className="text-gradient">Questions</span>
        </motion.h2>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
