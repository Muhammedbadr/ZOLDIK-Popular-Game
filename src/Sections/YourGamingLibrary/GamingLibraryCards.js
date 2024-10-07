const GamingLibraryCards = (props) => {
    return (
        <div className="flex flex-col md:flex-row mb-4 gap-4 md:gap-12 w-full p-4 md:p-8 bg-gray-900 rounded-lg">
          
          <div className="flex gap-4 w-full md:w-1/3">
            <div>
              <img className="rounded-xl w-16 h-16" src={props.image} alt={props.title} />
            </div>
            <div className="flex flex-col justify-center text-left">
              <p className="font-bold text-white">{props.title}</p>
              <p className="text-gray-500">{props.category}</p>
            </div>
          </div>

          <div className="flex w-full md:w-1/2 items-center justify-around text-center space-x-6 md:space-x-12">
            <ul className="flex flex-col items-center">
              <li className="text-white">{props.textName}</li>
              <li className="text-gray-500">{props.number}</li>
            </ul>
            <ul className="flex flex-col items-center">
              <li className="text-white">{props.played}</li>
              <li className="text-gray-500">{props.playedH}</li>
            </ul>
            <ul className="flex flex-col items-center">
              <li className="text-white">{props.currety}</li>
              <li className="text-gray-500">{props.curretyN}</li>
            </ul>
          </div>

          <div className="flex w-full md:w-1/3 justify-center items-center mt-4 md:mt-0">
            <button className="hover:border-pink-500 transition duration-300 ease-in-out transform hover:scale-105 text-white border-2 border-gray-800 px-6 py-2.5 rounded-full">
              {props.BtnName}
            </button>
          </div>
        </div>
    );
};

export default GamingLibraryCards;
