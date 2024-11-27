import React from "react";
import NavBar from "../compnents/NavBar";
import Footer from "../compnents/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const chef = from.chef.value;
    const supplier = from.supplier.value;
    const taste = from.name.value;
    const category = from.taste.value;
    const details = from.details.value;
    const price = from.price.value;
    const photo = from.photo.value;

    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      price,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Coffee Updated Successfully",
            icon: "success",
          });
        }
      });
  };
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
              Update Existing Coffee Details
            </h1>
            <p className="md:w-6/12 px-8 my-4 font-raleway-font  mx-auto text-center">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form
            onSubmit={handleUpdateCoffee}
            className="grid grid-cols-1 font-raleway-font px-4 md:px-36 mt-8 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Chef</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter chef name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Enter Coffee price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Photo</label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="col-span-1 text-xl font-rancho-font md:col-span-2 text-center">
              <button
                type="submit"
                className="btn text-xl bg-[#D2B48C] text-[#331A15] w-full "
              >
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default UpdateCoffee;
