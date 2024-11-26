import cap_png from "../assets/icons/1.png";
import quality_png from "../assets/icons/2.png";
import pure_png from "../assets/icons/3.png";
import proper_png from "../assets/icons/4.png";
const Banner = () => {
  return (
    <div>
      <section className="bg-banner-img bg-center bg-cover bg-no-repeat h-[calc(100vh-260px)] flex items-center justify-between">
        <div className="w-5/12"></div>
        <div className="text-left font-rancho-font text-white px-4">
          <h1 className="text-4xl  font-bold mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-lg font-raleway-font pr-4 mb-6">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!!{" "}
            <br className="hidden md:block" /> Enjoy the beautiful moments and
            make them memorable.
          </p>
          <button className="btn bg-[#E3B577] text-black py-1 px-10 rounded shadow-lg  hover:bg-transparent hover:text-white hover:border-2 hover:border-white  transition">
            Learn More
          </button>
        </div>
      </section>
      <section className="bg-[#ECEAE3]">
        <div className="w-10/12 grid text-center md:text-left md:grid-cols-4 gap-6 justify-center items-center py-6 mx-auto">
          <div className="flex flex-col">
            <img className="w-16 md:mx-0 mx-auto" src={cap_png} alt="" />
            <div className="flex mt-3 flex-col">
              <h1 className="text-2xl font-medium">Awesome Aroma</h1>
              <p className="md:w-3/4">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <img className="w-16 md:mx-0 mx-auto" src={quality_png} alt="" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl font-medium">High Quality</h1>
              <p className="md:w-3/4">
                We served the coffee to you maintaining the best quality
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <img className="w-16 md:mx-0 mx-auto" src={pure_png} alt="" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl font-medium">Pure Grades</h1>
              <p className="md:w-3/4">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <img className="w-16 md:mx-0 mx-auto" src={proper_png} alt="" />
            <div className="flex flex-col mt-3">
              <h1 className="text-2xl font-medium">Proper Roasting</h1>
              <p className="md:w-3/4">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
