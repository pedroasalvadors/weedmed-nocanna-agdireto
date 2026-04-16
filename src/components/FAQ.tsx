import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  // ICP 2 — Bruno (técnico, racional)
  {
    question: 'Como funciona a avaliação médica? É online mesmo?',
    answer:
      'Você preenche um questionário médico completo no seu ritmo, sem precisar marcar horário. Um especialista em medicina integrativa analisa seu caso, elabora a prescrição e você recebe tudo pelo celular. Se preferir conversar ao vivo, a consulta por vídeo está disponível a partir de R$100.',
  },
  {
    question: 'Os médicos têm especialização nessa área?',
    answer:
      'Sim. Todos os médicos parceiros têm formação e experiência comprovadas em medicina integrativa. Cada um possui CRM ativo e atua de forma independente, com plena responsabilidade sobre a prescrição.',
  },
  {
    question: 'Posso parcelar a consulta e o tratamento?',
    answer:
      'A consulta médica de R$50 pode ser paga via Pix ou cartão de crédito. Os medicamentos também aceitam parcelamento; as condições aparecem no checkout no momento da compra.',
  },
  {
    question: 'Em quanto tempo recebo o medicamento?',
    answer:
      'Os produtos são importados e chegam em média em 10 a 15 dias úteis após o pedido faturado. Trabalhamos para reduzir esse prazo. Em breve também teremos produtos nacionais com entrega mais rápida.',
  },
  // ICP 1 — Ana (segurança, legalidade)
  {
    question: 'O tratamento é legal no Brasil?',
    answer:
      'Sim. O tratamento é regulamentado pela ANVISA (RDC 660/2022) e é legal no Brasil mediante prescrição médica. Operamos 100% dentro dessa legislação.',
  },
  {
    question: 'Preciso avisar meu médico atual antes de começar?',
    answer:
      'Não é obrigatório, mas é sempre recomendado manter seu médico de família informado sobre todos os tratamentos que você está fazendo. Os médicos parceiros da weemed emitem a prescrição com base na sua avaliação individualizada.',
  },
  // ICP 3 — Cláudia (cuidadores)
  {
    question: 'Funciona para epilepsia e condições neurológicas?',
    answer:
      'Sim. O tratamento tem evidências clínicas robustas para epilepsia refratária (inclusive em crianças), Parkinson, Alzheimer e autismo. Nossos médicos têm experiência nessas indicações. Para casos mais complexos, recomendamos contato direto com nossa equipe antes da consulta.',
  },
  {
    question: 'Terei suporte depois da consulta?',
    answer:
      'Sim. Acompanhamento farmacêutico contínuo está incluso em todos os tratamentos. Além disso, nossa equipe está disponível para tirar dúvidas sobre uso, dosagem e próximos passos. Aqui você não é só atendido: você é acompanhado.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Perguntas frequentes
          </h2>
          <p
            className="text-gray-500 text-base"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            As dúvidas mais comuns dos nossos pacientes.
          </p>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-5 text-left group cursor-pointer"
              >
                <span
                  className="text-base md:text-lg font-medium pr-6 leading-snug"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: openIndex === index ? '#2D1B69' : '#1f2937',
                  }}
                >
                  {faq.question}
                </span>
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: openIndex === index ? '#EDE9F8' : '#F5F5F5',
                  }}
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    style={{
                      color: openIndex === index ? '#2D1B69' : '#9ca3af',
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                  opacity: openIndex === index ? 1 : 0,
                  paddingBottom: openIndex === index ? '20px' : '0',
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="text-sm md:text-base leading-relaxed pr-8"
                    style={{ color: '#6b7280', fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center">
          <p
            className="text-gray-500 text-sm mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Ainda tem dúvidas?
          </p>
          <button
            onClick={() => document.querySelector<HTMLElement>('.open-chat')?.click()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2D1B69', fontFamily: "'Inter', system-ui, sans-serif" }}
            data-cta="faq_consultor"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Falar com consultor no WhatsApp
          </button>
        </div>

      </div>
    </section>
  )
}
