function Banner({ children, first, id }) {
  const Tag = first ? "header" : "section";
  return (
    <Tag
      id={id}
      className={
        "w-full scroll-mt-20 px-4 sm:px-8 md:px-12 lg:px-20 border-b border-brand-border bg-brand-bg " +
        (first ? "py-12 sm:py-16 lg:py-24" : "py-14 sm:py-18 lg:py-24")
      }
    >
      <div className="max-w-7xl mx-auto w-full">{children}</div>
    </Tag>
  );
}

export default Banner;
