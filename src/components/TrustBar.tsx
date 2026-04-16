import { motion } from 'framer-motion'

const stats = [
  { value: '+3.000', label: 'Pacientes atendidos' },
  { value: '4.9/5', label: 'Avaliação Google' },
  { value: '100%', label: 'Online e seguro' },
  { value: '+10', label: 'Médicos especialistas' },
]

export default function TrustBar() {
  return (
    <section className="py-6 md:py-8 border-b border-gray-100" style={{ backgroundColor: '#F9F8FF' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs md:text-sm text-gray-500 leading-tight"
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
