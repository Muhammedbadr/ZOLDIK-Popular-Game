import './App.css'; 
import Header from './Sections/Header';
import Containers from './Sections/Containers'; 
import Hero from './Sections/Hero'; 
import MostPopiler from './Sections/MostPopiler/MostPopiler';
import YourGamingLibraryBox from './Sections/YourGamingLibrary/YourGamingLibraryBox';
import Footter from './Sections/Footter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageHome from './Pages/Home/Home'; // Adjust this according to your folder structure

function App() {
    return (
        <div className="App bg-[#111827]">
            <Router>
                <Header />
                <Containers>
                    <Routes>
                        <Route path='/' element={<PageHome />} />  {/* Home page route */}
                        <Route path='/hero' element={<Hero />} />
                        <Route path='/most-popular' element={<MostPopiler />} />
                        <Route path='/your-gaming-library' element={<YourGamingLibraryBox />} />
                    </Routes>
                </Containers>
                <Footter />
            </Router>
        </div>
    );
}

export default App;
