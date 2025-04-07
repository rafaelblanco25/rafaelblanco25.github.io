function Banner({children, first}) {
    return (
        <div className={"w-full px-2 sm:px-10 md:px-20 lg:px-32 py-6 sm:py-10 md:py-16 lg:py-20 flex items-center justify-center border-b-4 border-black gap-1 sm:gap-4 md:gap-10 lg:gap-20 bg-cover" + (first ? " bg-black" : " ")}>
            {children}
        </div>
    );
}
export default Banner;