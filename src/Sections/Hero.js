import myImage from "../imagesapps/bgforgamebigger2.jpg";
import  SectionBtn from "./section_btn/SectionBtn";
const  Hero =() => {
  return (
    <div className="bg-[#121229] mb-12 rounded-3xl w-full overflow-hidden">
      <div
        className="bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className="text-white text-left p-6 md:p-12 lg:p-24">
          <h6 className="font-semibold text-lg md:text-xl mb-6">Welcome To Zoldik</h6>
          <h4 className="w-full md:w-3/4 lg:w-3/5 text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase">
            <em className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#fc4aac] to-[#fc4aac]">Browse </em>
            Our Popular Game Here
          </h4>

          <div className="mt-6 md:mt-8 flex justify-start">
            <SectionBtn BtnName="Browse Now"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
