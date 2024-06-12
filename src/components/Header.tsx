import { fmentor, github, linkedin, x } from "../assets";
import "./link.css";
function Header() {
  return (
    <div className="flex justify-center bg-transparent relative z-10">
      <div className="flex justify-between w-full max-w-6xl pt-10 pl-5 pr-5">
        <div>
          <h1 className=" text-4xl text-white">adamkeyes</h1>
        </div>
        <div className="flex gap-7">
          <img src={github} className="hov w-6 h-6 cursor-pointer" />
          <img src={fmentor} className="hov w-6 h-6 cursor-pointer fme" />
          <img src={linkedin} className="hov w-6 h-6 cursor-pointer" />
          <img src={x} className="hov w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
