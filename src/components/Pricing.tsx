import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.15 },
  }),
}

const plans = [
  {
    name: 'Avaliação Online',
    price: 'R$50',
    description: 'Questionário médico avaliado por especialista em medicina integrativa.',
    features: [
      'Questionário médico completo',
      'Avaliação por especialista',
      'Prescrição personalizada',
      'Suporte por WhatsApp',
    ],
    cta: 'Começar avaliação',
    highlight: false,
  },
  {
    name: 'Consulta por Vídeo',
    price: 'R$100',
    priceNote: 'a partir de',
    description: 'Consulta ao vivo com médico especialista em medicina integrativa.',
    features: [
      'Tudo da avaliação online',
      'Consulta ao vivo por vídeo',
      'Atendimento personalizado',
      'Acompanhamento contínuo',
    ],
    cta: 'Agendar consulta',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Preços
          </h2>
          <p
            className="text-base md:text-lg text-gray-500"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Tratamento acessível, sem surpresas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`flex flex-col rounded-2xl p-7 md:p-8 relative ${
                plan.highlight
                  ? 'text-white'
                  : 'border border-gray-200 bg-white'
              }`}
              style={plan.highlight ? { backgroundColor: '#2D1B69' } : undefined}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-7">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    Mais completo
                  </span>
                </div>
              )}

              <h3
                className={`text-lg font-semibold mb-2 ${plan.highlight ? 'text-white' : ''}`}
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: plan.highlight ? undefined : '#2D1B69' }}
              >
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                {plan.priceNote && (
                  <span
                    className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {plan.priceNote}
                  </span>
                )}
                <span
                  className={`text-3xl md:text-4xl font-bold ${plan.highlight ? 'text-white' : ''}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: plan.highlight ? undefined : '#2D1B69' }}
                >
                  {plan.price}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${plan.highlight ? 'text-white/75' : 'text-gray-500'}`}
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke={plan.highlight ? '#00B383' : '#00B383'}
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span
                      className={`text-sm ${plan.highlight ? 'text-white/85' : 'text-gray-600'}`}
                      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`open-chat inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90 text-white`}
                style={{
                  backgroundColor: '#00B383',
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
                data-cta={`pricing_${i}`}
              >
                {plan.cta} →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
