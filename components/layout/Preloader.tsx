'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [done, setDone]         = useState(false)

  useEffect(() => {
    let value = 0
    const tick = setInterval(() => {
      // Accelerate toward 100 with random steps
      const step = value < 60 ? Math.random() * 18 : Math.random() * 8
      value = Math.min(value + step, 100)
      setProgress(value)
      if (value >= 100) {
        clearInterval(tick)
        setTimeout(() => setDone(true), 500)
      }
    }, 80)
    return () => clearInterval(tick)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center"
          style={{ background: '#07070e' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 text-center"
          >
            <p className="text-[11px] font-semibold tracking-[3px] text-white/30 uppercase mb-3">
              Genève · Switzerland
            </p>
            <div
              className="font-black tracking-[-1.5px]"
              style={{ fontSize: 36, color: '#f5f5f7' }}
            >
              Ride
              <span style={{ color: '#D4AF70' }}>Geneva</span>
              <span
                style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#D4AF70', display: 'inline-block',
                  marginLeft: 5, verticalAlign: 'middle',
                  animation: 'pulseDot 1.5s ease infinite',
                }}
              />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-[180px]"
          >
            <div className="w-full h-[1px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg,#B8963E,#D4AF70)', originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: Math.min(progress, 100) / 100 }}
                transition={{ duration: 0.15 }}
              />
            </div>
            <div
              className="mt-3 text-center font-mono"
              style={{ fontSize: 11, color: '#D4AF70', letterSpacing: '2px' }}
            >
              {String(Math.min(Math.round(progress), 100)).padStart(3, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
