import instra_img1 from "../assets/cups/Rectangle 9.png";
import instra_img2 from "../assets/cups/Rectangle 10.png";
import instra_img3 from "../assets/cups/Rectangle 11.png";
import instra_img4 from "../assets/cups/Rectangle 12.png";
import instra_img5 from "../assets/cups/Rectangle 13.png";
import instra_img6 from "../assets/cups/Rectangle 14.png";
import instra_img7 from "../assets/cups/Rectangle 15.png";
import instra_img8 from "../assets/cups/Rectangle 15.png";
const FollowUs = () => {
  return (
    <div className="my-14">
      <div className="flex my-10 font-rancho-font flex-col gap-3 justify-center items-center text-center">
        <p className="font-raleway-font text-sm">--- Follow Us Now ---</p>
        <h2 className="text-4xl font-medium text-[#331A15] ">
          Follow on Instagram
        </h2>
      </div>
      <div className="grid w-10/12 mx-auto  md:grid-cols-4 items-center gap-4">
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img1} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img2} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img3} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img4} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img5} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img6} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img7} alt="" />
        </div>
        <div className="hover:translate-y-[-12px] transition-all cursor-pointer overflow-hidden duration-500">
          <img className="w-full" src={instra_img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
