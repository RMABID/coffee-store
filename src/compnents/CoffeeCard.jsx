import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ item, setCoffee, coffee }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffee.filter((coffee) => coffee._id !== id);
              setCoffee(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-[#F5F4F1]">
      <div className=" p-3 py-6 px-8 items-center justify-between rounded-xl flex">
        <figure>
          <img
            className="w-60 cursor-pointer overflow-hidden hover:translate-y-[-15px] transition-all duration-500"
            src={
              item.photo
                ? item.photo
                : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt={item.name}
          />
        </figure>
        <div className="">
          <h2 className="text-lg font-medium">
            Name : <span className="text-lg font-light">{item.name}</span>
          </h2>
          <p className="text-lg font-medium">
            Chef : <span className="font-light text-lg">{item.chef}</span>
          </p>
          <p className="text-lg font-medium">
            Price : <span className="font-light text-lg">{item.price}</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 pr-3">
          <Link
            to={`/coffee/details/${item._id}`}
            className="btn bg-[#D2B48C] text-xl text-white"
          >
            <FaRegEye />
          </Link>
          <Link to={`/coffee/update/${item._id}`}>
            <button className="btn bg-black text-xl text-white">
              <CiEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(item._id)}
            className="btn bg-red-600 text-xl text-white"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
