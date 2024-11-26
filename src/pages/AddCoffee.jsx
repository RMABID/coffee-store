import { LuMoveLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";

const AddCoffee = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section className="w-10/12 my-14 font-rancho-font mx-auto">
        <Link to={"/"} className="flex items-center gap-2 text-2xl font-medium">
          <span>
            <LuMoveLeft />
          </span>{" "}
          Back to home{" "}
        </Link>
        <div className="bg-[#F4F3F0] my-10 py-14">
          <div>
            <h1 className="text-4xl text-center font-bold text-[#374151]">
              Add New Coffee
            </h1>
            <p className="w-6/12 my-4 font-raleway-font  mx-auto text-center">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form className="grid grid-cols-1 font-raleway-font px-4 md:px-36 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Chef</label>
              <input
                type="text"
                placeholder="Enter chef name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Supplier</label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Taste</label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Details</label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium mb-2">Photo</label>
              <input
                type="url"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 text-xl font-rancho-font md:col-span-2 text-center">
              <button
                type="submit"
                className="btn bg-[#D2B48C] text-[#331A15] w-full "
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default AddCoffee;
