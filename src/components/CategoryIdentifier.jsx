function CategoryIdentifier({ name, description }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 bg-black w-fit p-2 rounded-lg">
        <span className="text-gold font-bold text-xl my-auto" aria-hidden="true">
          {">"}
        </span>
        <p className="text-white my-auto text-lg">{name.toUpperCase()}</p>
      </div>
      <h2 className="text-white font-extrabold text-xl sm:text-2xl p-2 underline decoration-gold underline-offset-8 decoration-2 bg-black w-fit mb-4 rounded-lg ml-4 sm:ml-6">
        {description}
      </h2>
    </div>
  );
}

export default CategoryIdentifier;
