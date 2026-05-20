interface CarSVGProps {
  type: 'suv' | 'sedan' | 'van'
  color: string
  width?: number
}

export default function CarSVG({ type, color, width = 52 }: CarSVGProps) {
  if (type === 'suv') {
    const h = Math.round((width / 52) * 115)
    return (
      <svg viewBox="0 0 90 200" width={width} height={h}>
        <rect x="12" y="6"  width="66" height="188" rx="16" fill={color} opacity=".12" />
        <rect x="12" y="6"  width="66" height="188" rx="16" fill="none" stroke={color} strokeWidth="2.5" opacity=".5" />
        <rect x="18" y="28" width="54" height="42"  rx="10" fill={color} opacity=".40" />
        <rect x="18" y="128" width="54" height="34" rx="10" fill={color} opacity=".30" />
        <rect x="2"  y="34" width="12" height="28"  rx="5"  fill={color} opacity=".65" />
        <rect x="76" y="34" width="12" height="28"  rx="5"  fill={color} opacity=".65" />
        <rect x="2"  y="130" width="12" height="28" rx="5"  fill={color} opacity=".65" />
        <rect x="76" y="130" width="12" height="28" rx="5"  fill={color} opacity=".65" />
      </svg>
    )
  }

  if (type === 'sedan') {
    const h = Math.round((width / 46) * 115)
    return (
      <svg viewBox="0 0 80 200" width={width} height={h}>
        <rect x="10" y="8"  width="60" height="184" rx="14" fill={color} opacity=".12" />
        <rect x="10" y="8"  width="60" height="184" rx="14" fill="none" stroke={color} strokeWidth="2.5" opacity=".5" />
        <rect x="16" y="35" width="48" height="36"  rx="9"  fill={color} opacity=".45" />
        <rect x="16" y="125" width="48" height="30" rx="9"  fill={color} opacity=".30" />
        <rect x="1"  y="40" width="11" height="22"  rx="4"  fill={color} opacity=".65" />
        <rect x="68" y="40" width="11" height="22"  rx="4"  fill={color} opacity=".65" />
        <rect x="1"  y="128" width="11" height="22" rx="4"  fill={color} opacity=".65" />
        <rect x="68" y="128" width="11" height="22" rx="4"  fill={color} opacity=".65" />
      </svg>
    )
  }

  // van
  const h = Math.round((width / 58) * 118)
  return (
    <svg viewBox="0 0 100 210" width={width} height={h}>
      <rect x="10" y="6"  width="80" height="198" rx="16" fill={color} opacity=".12" />
      <rect x="10" y="6"  width="80" height="198" rx="16" fill="none" stroke={color} strokeWidth="2.5" opacity=".5" />
      <rect x="16" y="28" width="68" height="46"  rx="10" fill={color} opacity=".40" />
      <rect x="16" y="130" width="68" height="36" rx="10" fill={color} opacity=".30" />
      <rect x="1"  y="34" width="11" height="30"  rx="4"  fill={color} opacity=".65" />
      <rect x="88" y="34" width="11" height="30"  rx="4"  fill={color} opacity=".65" />
      <rect x="1"  y="136" width="11" height="30" rx="4"  fill={color} opacity=".65" />
      <rect x="88" y="136" width="11" height="30" rx="4"  fill={color} opacity=".65" />
    </svg>
  )
}
