function Banner({children, first}) {
    return (
        <div className={"w-full px-2 sm:px-10 md:px-20 lg:px-32 py-2 sm:py-10 md:py-20 lg:py-32 flex items-center justify-center border-b-2 border-bordeaux gap-1 sm:gap-4 md:gap-10 lg:gap-20" + (first ? " bg-black" : "")}>
            {children}
        </div>
    );
}
export default Banner;