interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-[52px]">
      <h2
        className="font-extrabold mb-[10px]"
        style={{
          fontSize: 'clamp(28px, 4.5vw, 52px)',
          letterSpacing: 'clamp(-1.5px, -0.03em, -3px)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-[var(--txt-sub)]">{subtitle}</p>
      )}
    </div>
  )
}
