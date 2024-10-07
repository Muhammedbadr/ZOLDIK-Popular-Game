import React from 'react'
import Hero from '../../Sections/Hero'; // Consistent naming for HeroPart
import MostPopiler from '../../Sections/MostPopiler/MostPopiler';
import YourGamingLibraryBox from '../../Sections/YourGamingLibrary/YourGamingLibraryBox'
const PageHome = () => {
  return (
    <>
    <Hero /> {/* Ensure this matches the import */}
    <MostPopiler />
    <YourGamingLibraryBox/>
                </>
  )
}

export default PageHome
