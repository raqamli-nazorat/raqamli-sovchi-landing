import {
  ArrowRight,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Shield,
  Star,
  Users,
  Check,
  ChevronRight,
  Menu,
  Minus,
  Moon,
  Plus,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import {
  AiBrain01Icon,
  Analytics01Icon,
  BrainIcon,
  CheckmarkBadge01Icon,
  EyeIcon,
  LockPasswordIcon,
  Message01Icon,
  SecurityCheckIcon,
  SmartPhone01Icon,
  Timer01Icon,
  UserCheck01Icon,
  UserGroupIcon,
  UserShield01Icon,
  UserStar01Icon,
} from '@hugeicons/core-free-icons'

/**
 * Sahifadagi BARCHA ikonka shu ro'yxatda.
 *
 * Ikki manba aralash ishlatiladi (loyiha andozasi shunday):
 *   • `lucide-react` — komponent, ya'ni `<Check />`
 *   • `@hugeicons/core-free-icons` — [tag, attrs] massivi
 * `<Icon name="..." />` ikkalasini ham o'zi ajratadi, chaqiruvchi kod esa
 * qaysi paketdan kelganini bilishi shart emas.
 *
 * Nomlar MA'NO bo'yicha: `curtain` — "parda tartibi", `guardian` — "vakil".
 * Ikonkani almashtirish kerak bo'lsa faqat shu fayl o'zgaradi.
 */
export const ICONS = {
  // — Interfeys boshqaruvlari —
  menu: Menu,
  close: X,
  plus: Plus,
  minus: Minus,
  sun: Sun,
  moon: Moon,
  check: Check,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  sparkles: Sparkles,
  filter: SlidersHorizontal,
  shieldCheck: ShieldCheck,
  clock: Clock,

  // — Imkoniyatlar kartochkalari (maketda lucide uslubidagi chiziqli ikonkalar) —
  sparkle: Sparkles,
  eye: Eye,
  users: Users,
  shield: Shield,
  message: MessageCircle,
  star: Star,

  // — Mahsulot ma'nolari —
  match: AiBrain01Icon,
  curtain: EyeIcon,
  curtainClosed: LockPasswordIcon,
  guardian: UserShield01Icon,
  verified: CheckmarkBadge01Icon,
  limit: Timer01Icon,
  psychology: BrainIcon,
  security: SecurityCheckIcon,
  lock: LockPasswordIcon,
  chat: Message01Icon,
  analytics: Analytics01Icon,
  profile: UserCheck01Icon,
  phone: SmartPhone01Icon,
  heart: Heart,

  // — Rollar —
  groom: UserStar01Icon,
  bride: UserGroupIcon,
  representative: UserShield01Icon,
}

/** Brend sahifasidagi ro'yxat shu tartibda chiziladi. */
export const ICON_GROUPS = [
  {
    title: 'Interfeys',
    names: [
      'menu',
      'close',
      'plus',
      'minus',
      'sun',
      'moon',
      'check',
      'arrowRight',
      'chevronRight',
      'sparkles',
      'filter',
      'shieldCheck',
      'clock',
    ],
  },
  {
    title: 'Mahsulot',
    names: [
      'match',
      'curtain',
      'curtainClosed',
      'guardian',
      'verified',
      'limit',
      'psychology',
      'security',
      'chat',
      'analytics',
      'profile',
      'phone',
      'heart',
      'sparkle',
      'eye',
      'users',
      'shield',
      'message',
      'star',
    ],
  },
  { title: 'Rollar', names: ['groom', 'bride', 'representative'] },
]
