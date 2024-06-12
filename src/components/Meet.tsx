import { profile } from "../assets";
import Header from "./Header";

function Meet() {
  return (
    <div className="bg-[#141414] h-screen">
      <Header />
      <div className="flex bg-[#141414] justify-evenly  w-full max-w-[795px] pt-10 ml-32 ">
        <div className="flex flex-col text-white w-4/5">
          <h1 className="text-7xl pt-28">Nice to meet you! I'm Adam Keyes.</h1>
          <p className=" text-2xl pt-16 text-[#d9d9d9]">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <h2 className=" border-b-2 border-red-500 pb-2 w-max pt-6">
            CONTACT ME
          </h2>
        </div>
        <div className="bg-[#141414] absolute top-0 right-40 z-0">
          <img
            src={profile}
            alt=""
            className="w-full max-w-md h-full max-h-[720px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Meet;
