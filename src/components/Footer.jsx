import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            reiciendis optio minima? Natus dolores esse aliquid ducimus tenetur
            adipisci aperiam maiores praesentium soluta accusamus
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 ">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 ">
            <li>+234 0000000000</li>
            <li>contact@foeveryou.com</li>
          </ul>
        </div>
        <div>
          <hr /> 
          <p className="py-5 text-center   text-sm">
            Copyright 2025@ forever.com - All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
