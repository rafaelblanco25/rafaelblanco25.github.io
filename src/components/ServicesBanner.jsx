import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { SERVICES } from "../data/profile";

function ServicesBanner() {
  return (
    <Banner id="services">
      <div className="w-full">
        <CategoryIdentifier name="Services" description="What Can I Do" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </Banner>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-black rounded-lg shadow-lg p-5 border border-gray lg:hover:scale-[1.03] lg:hover:border-gold lg:transition-transform lg:duration-300 h-full flex flex-col">
      <img
        src={service.icon}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-20 w-20 mx-auto bg-white rounded-full p-1 mb-4"
      />
      <div className="w-fit mb-3 mx-auto">
        <h3 className="text-base md:text-lg lg:text-xl font-bold text-white text-center">
          {service.name}
        </h3>
      </div>
      <p className="text-gray_text text-xs sm:text-sm lg:text-base">
        {service.description}
      </p>
    </div>
  );
}

export default ServicesBanner;
