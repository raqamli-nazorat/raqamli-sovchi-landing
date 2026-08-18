/**
 * HugeIcons ikonkalarini chizadi.
 *
 * `@hugeicons/core-free-icons` har bir ikonkani [tag, attrs] juftliklari
 * massivi qilib beradi — shuning uchun qo'shimcha react paketi kerak emas.
 *
 * @example
 * import { Home01Icon } from '@hugeicons/core-free-icons'
 * <HugeIcon icon={Home01Icon} size={20} className="text-muted" />
 *
 * Ikonkalar ro'yxati: https://hugeicons.com/icons/stroke-rounded
 */
export const HugeIcon = ({ icon, size = 16, strokeWidth = 2, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    className={className}
    aria-hidden="true"
  >
    {icon.map(([tag, attrs]) => {
      const Tag = tag
      const { key, ...rest } = attrs
      return <Tag key={key} {...rest} strokeWidth={strokeWidth} />
    })}
  </svg>
)

export default HugeIcon
