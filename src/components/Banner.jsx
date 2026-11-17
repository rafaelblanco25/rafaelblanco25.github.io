function Banner({ children, first, id }) {
  const Tag = first ? "header" : "section";
  return (
    <Tag
      id={id}
      className={
        "w-full scroll-mt-16 px-4 sm:px-10 md:px-20 lg:px-32 py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center border-b-4 border-black gap-4 md:gap-10 lg:gap-20 bg-cover" +
        (first ? " bg-black" : "")
      }
    >
      {children}
    </Tag>
  );
}

export default Banner;
