function CategoryIdentifier({ name, description, subtitle }) {
  return (
    <div className="flex flex-col gap-2 mb-8 sm:mb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 w-fit px-3.5 py-1">
        <span className="text-gold font-mono font-bold text-sm" aria-hidden="true">
          {">"}
        </span>
        <p className="text-gold font-mono font-semibold tracking-wider text-xs sm:text-sm uppercase">
          {name}
        </p>
      </div>
      <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
        {description}
      </h2>
      <div className="h-1 w-16 rounded-full bg-gold mt-1" aria-hidden="true" />
      {subtitle && (
        <p className="text-gray_text text-sm sm:text-base max-w-3xl mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default CategoryIdentifier;
