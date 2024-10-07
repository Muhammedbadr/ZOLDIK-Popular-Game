
import GamingLibraryCards from "./GamingLibraryCards";
import MostPopilerDateBox from "../MostPopiler/MostPopilerDateBox";
import SectionTitles from "../sectionTitles/sectionTitles";
import SectionBtn from "../section_btn/SectionBtn";
const YourGamingLibraryBox = () => {
  const GamingLibraryCardDiv = MostPopilerDateBox.map((card) => (
    <GamingLibraryCards
      key={card.id}
      image={card.image}
      textName={card.textName}
      BtnName={card.BtnName}
      number={card.number}
      title={card.title}
      category={card.category}
      download={card.download}
      stars={card.stars}
      played={card.played} 
      playedH={card.playedH} 
      currety={card.currety}  
      curretyN={card.curretyN} 
    />
  ));

  return (
    <div className="relative bg-gray-900 py-10 pb-14 px-5 rounded-3xl text-white">
      <SectionTitles title1="Your Gaming" title2="Library" />
      <div>{GamingLibraryCardDiv}</div>
      
      <div className="absolute  w-full  text-center -bottom-6 ">
          <SectionBtn className=" hover:underline" BtnName="View Your Library"/>
        </div>
    </div>
  );
};

export default YourGamingLibraryBox;
