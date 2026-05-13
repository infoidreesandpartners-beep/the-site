import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import FutureVision from './pages/FutureVision';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';

export const PAGES = {
    "Home": Home,
    "About": About,
    "PracticeAreas": PracticeAreas,
    "FutureVision": FutureVision,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};