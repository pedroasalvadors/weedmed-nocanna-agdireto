import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const questions = [
  {
    id: 1,
    question: 'Como você avalia sua qualidade de vida atualmente?',
    options: [
      'Excelente',
      'Boa',
      'Regular',
      'Pode melhorar bastante',
    ],
  },
  {
    id: 2,
    question: 'O que você mais busca melhorar na sua rotina hoje?',
    options: [
      'Energia e disposição',
      'Sono mais equilibrado',
      'Foco e produtividade',
      'Mais bem-estar no dia a dia',
    ],
  },
  {
    id: 3,
    question: 'Você já utilizou soluções naturais ou alternativas para melhorar seu bem-estar?',
    options: [
      'Sim, com frequência',
      'Já testei algumas vezes',
      'Conheço, mas nunca usei',
      'Prefiro conhecer opções novas',
    ],
  },
  {
    id: 4,
    question: 'Você prefere soluções mais naturais ou tradicionais para cuidar da sua saúde e rotina?',
    options: [
      'Mais naturais',
      'Mais tradicionais',
      'Combinação das duas',
      'Ainda estou pesquisando',
    ],
  },
]

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  // Hide Leadster widget on quiz page
  useEffect(() => {
    const hideLeadster = () => {
      const leadsterElements = document.querySelectorAll('[id*="leadster"], [class*="leadster"], [id*="neurolead"], [class*="neurolead"]')
      leadsterElements.forEach((el) => {
        (el as HTMLElement).style.display = 'none'
      })
    }

    hideLeadster()
    const interval = setInterval(hideLeadster, 500)

    return () => {
      clearInterval(interval)
      const leadsterElements = document.querySelectorAll('[id*="leadster"], [class*="leadster"], [id*="neurolead"], [class*="neurolead"]')
      leadsterElements.forEach((el) => {
        (el as HTMLElement).style.display = ''
      })
    }
  }, [])

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }))

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => prev + 1)
      }, 300)
    } else {
      setTimeout(() => {
        window.location.href = '/'
      }, 300)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 50%, #6d28d9 100%)',
      }}
    >
      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/20">
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#65DFA8' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question Counter */}
              <div className="text-white/70 text-sm font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Pergunta {currentQuestion + 1} de {questions.length}
              </div>

              {/* Question */}
              <h1
                className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-10 leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {questions[currentQuestion].question}
              </h1>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`w-full text-left px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-200 ${
                      answers[currentQuestion] === option
                        ? 'bg-white text-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Quiz
