import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5 "
          alt="exchange-icon"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p>We offer </p>
      </div>
    </div>
  );
};

export default OurPolicy;
