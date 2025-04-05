function CategoryIdentifier(props) {
  return (
    <>
      <div className="flex gap-2">
        <p className="text-gold font-bold text-xl my-auto">{">"}</p>
        <p className="text-white my-auto text-lg">{props.name.toUpperCase()}</p>
      </div>
      <p className="text-white font-extrabold text-2xl py-4 pl-4">{props.description}</p>
    </>
  );
}
export default CategoryIdentifier;
