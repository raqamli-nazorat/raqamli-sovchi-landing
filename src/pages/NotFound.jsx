import { Link } from 'react-router-dom'

import Button from '@/components/ui/Button.jsx'
import Logo from '@/components/brand/Logo.jsx'

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-surface px-6 text-center">
      <Logo />
      <div>
        <p className="text-5xl font-bold text-ink">404</p>
        <p className="mt-3 text-sm text-muted">Bunday sahifa topilmadi.</p>
      </div>
      <Button as={Link} to="/" variant="primary">
        Bosh sahifaga qaytish
      </Button>
    </div>
  )
}
