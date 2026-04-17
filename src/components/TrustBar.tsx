import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '+3.000', label: 'Pacientes atendidos' },
  { value: '4.9/5', label: 'Avaliação Google' },
  { value: '100%', label: 'Online e seguro' },
  { value: '+10', label: 'Médicos especialistas' },
]

export default function TrustBar() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % stats.length)
    }, 2000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <section className="py-6 md:py-8 border-b border-gray-100" style={{ backgroundColor: '#EDE9FE' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Mobile: auto-sliding single stat */}
        <div className="md:hidden flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 h-12">
            <motion.span
              key={active + '-value'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-3xl font-bold"
              style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
            >
              {stats[active].value}
            </motion.span>
            <motion.span
              key={active + '-label'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="text-sm text-gray-500 leading-tight"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              {stats[active].label}
            </motion.span>
          </div>
          {/* Dots */}
          <div className="flex gap-1.5">
            {stats.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  backgroundColor: i === active ? '#2D1B69' : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <motion.div
          className="hidden md:grid grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="text-3xl font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm text-gray-500 leading-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
