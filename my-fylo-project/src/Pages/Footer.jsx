import Facebook from "../Images/facebook.svg";
import Instagram from "../Images/Instagram.svg";
import Twitter from "../Images/Twitter.svg";

export default function Footer() {
  return (
    <div className="bg-[#0b1524] w-full h-[100vh] mt-[-38vh]">
      <div className="text-left text-[1.3vw] text-white  pt-[62vh] pl-15">
        <h1>+2-543-123-4567</h1>
        <h1 className="pt-5"> example@fylo.com </h1>
      </div>

      <div className="grid grid-cols-2 w-fit ml-[39vw] mt-[-12vh] gap-x-40 text-white text-center gap-y-4">
        <a> About</a>
        <a>Jobs</a>
        <a>Press</a>
        <a>Blog</a>
        <a>Contact Us</a>
        <a>Terms</a>
        <a>Privacy</a>
      </div>
      <div className="flex justify-end gap-5 mr-15 mt-[-24vh]">
        <img className="invert w-8" src={Facebook} alt="Facebook" />
        <img className="invert w-8" src={Twitter} alt="Twitter" />
        <img className="invert w-8" src={Instagram} alt="Instagram" />
      </div>

      <div className="flex justify-end mr-12 mt-15">
        <button className="bg-[#65e2d9] hover:bg-amber-30 text-white px-5 py-2 w-40 rounded-full cursor-pointer">
          Get Top
        </button>
      </div>
    </div>
  );
}
