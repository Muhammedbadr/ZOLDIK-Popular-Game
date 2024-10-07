import MosstPopilerCard  from "./MosstPopilerCard";
import MostPopilerDateBox from "./MostPopilerDateBox";
import Section_titles from "../sectionTitles/sectionTitles";
import  SectionBtn from "../section_btn/SectionBtn";

const MostPopiler = () => {
    <MostPopilerDateBox/>
    
    const mostPopulerItemCard = MostPopilerDateBox.map(card=>{
      return <MosstPopilerCard key={card.id} image={card.image} title={card.title}  stars={card.stars}  category={card.category}  download={card.download} BtnName={card.BtnName}/>
    })
  return (
    <div className="relative bg-[#111827] mb-16 py-10 pb-14 px-5 rounded-3xl text-white">
       <Section_titles title1="Most Popular" title2="Right Now"  />
        
       <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6 ">
            {/* first div */}
            {mostPopulerItemCard}
        </div>
        <div className="absolute  w-full text-center -bottom-6 ">
          <SectionBtn className=" hover:underline" BtnName="See All"/>
        </div>

    </div>
  )
}

export default MostPopiler

{/* <MosstPopilerCard image={image_01} title="Fort nite" stars="5.5" Catagery="Sandbox" Download="2.304M"/>
            <MosstPopilerCard image={image_02} title="Car game"stars="3.5" Catagery="Sandbox" Download="232M"/>
            <MosstPopilerCard image={image_03}title="Cart OK" stars="2.5" Catagery="Sandbox"  Download="232M"/>
            <MosstPopilerCard image={image_04} title="Wecht dogs" stars="4.5"Catagery="Sandbox" Download="2.2M"/>
            <MosstPopilerCard image={image_05} title="Galexy " stars="5.5"Catagery="Sandbox" Download="23.2M"/>
            <MosstPopilerCard image={image_06} title="Ninja kiwi" stars="5.5"Catagery="Sandbox" Download="23.2M"/>
            <MosstPopilerCard image={image_02} title="Car game"stars="3.5" Catagery="Sandbox" Download="232M"/>
            <MosstPopilerCard image={image_03}title="Cart OK" stars="2.5" Catagery="Sandbox"  Download="232M"/> */}