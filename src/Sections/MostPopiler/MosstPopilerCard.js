import { AiFillStar } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";

const MosstPopilerCard = (props) => {
  return (
    <div>
       <div className="bg-[#141d2f]   p-3 py-6 rounded-2xl">
                    <img className="rounded-2xl w-full h-[35vh]" src={props.image} alt="" />
                    <div className="py-2">
                        <div className="flex  justify-between">
                            <p>{props.title} </p>
                            <div className="flex items-center space-x-2 ">
                              {/* icon */}
                              <AiFillStar className="text-yellow-300"/>
                            <span> {props.stars} </span>
                            </div>
                        </div>   
                        <div className="flex text-gray-500 justify-between">
                            <p className="text-gray-600">{props.category} </p>
                            <div className="flex items-center space-x-1">
                              {/* icon */}
                              <AiOutlineDownload className="text-pink-500 font-extrabold text-lg" />
                              <span>{props.download}</span>
                            </div>

                        </div>   
                    </div>
                    
                </div>
    </div>
  )
}

export default MosstPopilerCard
