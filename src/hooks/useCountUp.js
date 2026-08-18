import { useEffect, useRef, useState } from 'react'

/**
 * Raqamni 0 dan `target` gacha sanaydi — bo'lim ekranga kirganda.
 *
 * Bir marta ishlaydi: foydalanuvchi yuqoriga qaytganda raqamlar qaytadan
 * sanalsa, bu ko'zni charchatadi va sahifa "buzilgandek" ko'rinadi.
 *
 * `prefers-reduced-motion` yoqilgan yoki `IntersectionObserver` yo'q
 * brauzerda animatsiya umuman bo'lmaydi — raqam darrov yakuniy qiymatda
 * turadi, ya'ni ma'lumot hech qachon yo'qolmaydi.
 */
export function useCountUp(target, { duration = 1500 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
      setValue(target)
      return
    }

    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration)
          // easeOutCubic — oxiriga borib sekinlashadi, sanoq "to'xtab" tugaydi
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration])

  return [ref, value]
}

export default useCountUp
