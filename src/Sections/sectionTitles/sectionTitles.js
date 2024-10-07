
const section_titles = (props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl px-4 pb-6 text-left ">
           <span className="underline">{props.title1}</span>  <span className="text-[#fc4aac] no-underline">{props.title2}</span>  
       </h3>
    </div>
  )
}

export default section_titles
