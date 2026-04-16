import { motion } from 'framer-motion'

const studies = [
  {
    stat: '79%',
    description: 'dos pacientes com ansiedade relataram melhora no primeiro mês de tratamento.',
    source: 'Shannon et al., 2019 — The Permanente Journal',
  },
  {
    stat: '50%',
    description: 'de redução na frequência de crises em pacientes com epilepsia refratária.',
    source: 'Devinsky et al., 2017 — NEJM',
  },
  {
    stat: '30-50%',
    description: 'de redução na intensidade da dor crônica em pacientes sem resposta a analgésicos.',
    source: 'Aviram & Samuelly-Leichtag, 2017',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.12 },
  }),
}

export default function ScientificBase() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F9F8FF' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: '#2D1B69' }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Base científica
          </h2>
          <p
            className="text-base md:text-lg text-gray-500 max-w-2xl"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Nossos protocolos são baseados em estudos publicados em revistas científicas de alto impacto.
          </p>
        </motion.div>

        {/* Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.stat}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 md:p-8"
            >
              <span
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#00B383' }}
              >
                {study.stat}
              </span>
              <p
                className="text-sm text-gray-600 leading-relaxed mb-4 flex-1"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {study.description}
              </p>
              <p
                className="text-xs text-gray-400 italic"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {study.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p
            className="text-sm text-gray-400"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Quer saber mais sobre a ciência?{' '}
            <button
              onClick={() => document.querySelector<HTMLElement>('.open-chat')?.click()}
              className="underline hover:text-[#2D1B69] transition-colors font-medium"
            >
              Fale com nosso time →
            </button>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
