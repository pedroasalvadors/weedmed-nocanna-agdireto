import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function WrittenTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const script = document.createElement('script')
    script.src = 'https://cdn.trustindex.io/loader.js?fee1b6c6368a302f5546ce204e7'
    script.async = true
    script.defer = true
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script)
      }
    }
  }, [])

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl text-left mb-3 font-bold"
          style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Pacientes que transformaram sua saúde
        </motion.h2>
        <div className="w-12 h-1 mb-10" style={{ backgroundColor: '#00B383' }} />

        {/* Trustindex Widget Container */}
        <div ref={containerRef} className="trustindex-widget-container" />
      </div>
    </section>
  )
}

export default WrittenTestimonials

