function Skill({ skill }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-xl border border-brand-border bg-brand-elevated px-3 py-2 hover:border-gold transition-colors duration-200">
      <img
        src={skill.icon}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-6 w-6 rounded-full bg-white p-0.5 object-contain shrink-0"
      />
      <span className="text-xs sm:text-sm font-semibold text-white">
        {skill.name}
      </span>
      {skill.badge && (
        <span className="rounded bg-gold/15 border border-gold/30 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gold">
          {skill.badge}
        </span>
      )}
    </div>
  );
}

export default Skill;
