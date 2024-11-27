import { Link, useLoaderData } from "react-router-dom";
import Footer from "../compnents/Footer";
import NavBar from "../compnents/NavBar";
import { LuMoveLeft } from "react-icons/lu";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, price, photo, taste, category, supplier } = coffee;
  return (
    <div>
      <NavBar></NavBar>

      <section className="font-rancho-font my-24 w-10/12 mx-auto">
        <Link
          to={"/"}
          className="flex items-center  gap-2 text-2xl font-medium"
        >
          <span>
            <LuMoveLeft />
          </span>{" "}
          Back to home{" "}
        </Link>
        <div className="mt-12 bg-[#F4F3F0] ">
          <div className="flex py-32 items-center justify-evenly">
            <img
              className="w-96 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              src={photo}
              alt=""
            />
            <div className="font-raleway-font">
              <h1 className="text-3xl font-rancho-font font-medium mb-5 text-[#331A15] ">
                Niceties
              </h1>
              <h2 className="text-lg font-medium">
                Name : <span className="text-lg font-light">{name}</span>
              </h2>
              <p className="text-lg font-medium">
                Chef : <span className="font-light text-lg">{chef}</span>
              </p>
              <p className="text-lg font-medium">
                Supplier :{" "}
                <span className="font-light text-lg">{supplier}</span>
              </p>
              <p className="text-lg font-medium">
                Taste : <span className="font-light text-lg">{taste}</span>
              </p>
              <p className="text-lg font-medium">
                Price : <span className="font-light text-lg">{price}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default CoffeeDetails;
