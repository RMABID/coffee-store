import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div className="my-12">
      <div className="flex font-rancho-font flex-col gap-3 justify-center items-center text-center">
        <p className="font-raleway-font text-sm">--- Sip & Savor ---</p>
        <h2 className="text-4xl font-medium text-[#331A15] ">
          Our Popular Products
        </h2>
        <Link to={"/addCoffee"} className="btn bg-button-color">
          Add Add Coffee{" "}
          <span className="text-white text-xl">
            <GiCoffeeCup />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
