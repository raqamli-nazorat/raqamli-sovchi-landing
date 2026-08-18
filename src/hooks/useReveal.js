import { useEffect, useRef } from 'react'

/**
 * Element ekranga kirganda `data-visible="true"` qo'yadi — `.reveal`
 * klassi shunda animatsiyani ishga tushiradi.
 *
 * Kuzatuv BIR MARTA ishlaydi: foydalanuvchi yuqoriga qaytganda bo'limlar
 * qayta "sakramasligi" kerak. Observer yo'q brauzerda element darrov
 * ko'rinadigan qilinadi — matn hech qachon yashirin qolmaydi.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        entry.target.dataset.visible = 'true'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default useReveal
