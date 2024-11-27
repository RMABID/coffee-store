import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee);

  return (
    <div className="my-12">
      <div className="flex font-rancho-font flex-col gap-3 justify-center items-center text-center">
        <p className="font-raleway-font text-sm">--- Sip & Savor ---</p>
        <h2 className="text-4xl font-medium text-[#331A15] ">
          Our Popular Products
        </h2>
        <Link to={"/coffee/add"} className="btn text-xl bg-button-color">
          Add Coffee{" "}
          <span className="text-white text-xl">
            <GiCoffeeCup />
          </span>
        </Link>
      </div>
      <section className="grid w-10/12 mx-auto mt-12 md:grid-cols-2 gap-8">
        {coffee.map((item) => (
          <CoffeeCard
            key={item._id}
            item={item}
            coffee={coffee}
            setCoffee={setCoffee}
          ></CoffeeCard>
        ))}
      </section>
    </div>
  );
};

export default PopularProducts;
