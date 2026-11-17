function Skill({ icons, names }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-gray/60 bg-gray/15 px-3 py-2">
      {icons.map((icon, index) => (
        <div
          key={names[index]}
          className="inline-flex items-center gap-2 rounded-full bg-black/80 border border-gray/40 px-2.5 py-1 hover:border-gold transition-colors duration-200"
        >
          <img
            src={icon}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-white p-0.5 object-contain shrink-0"
          />
          <span className="text-xs sm:text-sm font-medium text-white">
            {names[index]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Skill;
