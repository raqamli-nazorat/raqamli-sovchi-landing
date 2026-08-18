/**
 * Tashqi brendlar nishoni.
 *
 * Bular `lucide` yoki `hugeicons` da yo'q (ular tashqi kompaniyalar belgisi),
 * shuning uchun shu yerda — soddalashtirilgan, bir xil 24x24 to'rda va
 * `currentColor` bilan chizilgan.
 */

export function TelegramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.5 3.5 2.9 10.7c-.9.3-.9 1.5.1 1.8l4.6 1.4 1.8 5.4c.3.8 1.2 1 1.8.4l2.5-2.4 4.6 3.4c.7.5 1.7.1 1.9-.7l3.2-14.9c.2-.9-.7-1.6-1.9-1.6ZM9.6 14.2l-.4 3.4-1.2-3.6 8.9-5.6-7.3 5.8Z" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function YouTubeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.5 7.6c-.3-1.1-1.1-1.9-2.2-2.2C18.4 5 12 5 12 5s-6.4 0-8.3.4c-1.1.3-1.9 1.1-2.2 2.2C1.1 9.5 1.1 12 1.1 12s0 2.5.4 4.4c.3 1.1 1.1 1.9 2.2 2.2C5.6 19 12 19 12 19s6.4 0 8.3-.4c1.1-.3 1.9-1.1 2.2-2.2.4-1.9.4-4.4.4-4.4s0-2.5-.4-4.4ZM9.9 15.3V8.7l5.6 3.3-5.6 3.3Z" />
    </svg>
  )
}

/** App Store nishoni (Apple). */
export function AppleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17 12.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.5 3 2.4 1.2 0 1.6-.8 3.1-.8s1.8.8 3.1.8c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-4Z" />
      <path d="M14.8 5.5c.7-.8 1.1-2 1-3.1-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4Z" />
    </svg>
  )
}

/** Google Play nishoni — to'rt qismli uchburchak. */
export function GooglePlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3.9 2.1a1.9 1.9 0 0 0-.4 1.3v17.2c0 .5.1 1 .4 1.3l.1.1 9.6-9.6v-.2L3.9 2.1Z" />
      <path
        d="M16.9 15.6 13.6 12.4v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.1h-.1Z"
        opacity="0.85"
      />
      <path d="M17 15.5 13.6 12.2 3.9 22c.4.4 1 .5 1.7.1l11.4-6.6Z" opacity="0.7" />
      <path d="M17 8.9 5.6 2.3c-.7-.4-1.3-.3-1.7.1l9.7 9.8L17 8.9Z" opacity="0.55" />
    </svg>
  )
}
