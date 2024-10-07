const SectionBtn = (props) => {
  return (
    <div className="flex justify-center">
      <a href="browse.html">
        <button
          type="button"
          className="py-3 px-8 md:px-10 text-sm md:text-base font-medium text-white focus:outline-none bg-[#fc4aac] rounded-3xl border border-[#fc4aac] focus:z-10 focus:ring-4 focus:ring-pink-500 hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
        >
          {props.BtnName}
        </button>
      </a>
    </div>
  );
};

export default SectionBtn;
