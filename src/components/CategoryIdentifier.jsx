function CategoryIdentifier(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 bg-black w-fit p-2 rounded-lg">
        <p className="text-gold font-bold text-xl my-auto">{">"}</p>
        <p className="text-white my-auto text-lg">{props.name.toUpperCase()}</p>
      </div>
      <p className="text-white font-extrabold text-2xl p-2 underline decoration-gold underline-offset-8 decoration-2 bg-black w-fit mb-4 rounded-lg ml-6">
        {props.description}
      </p>
    </div>
  );
}
export default CategoryIdentifier;
