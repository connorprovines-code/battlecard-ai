import Layout from "./Layout.jsx";

import Home from "./Home";
import CrayonAlternative from "./CrayonAlternative";
import KlueAlternative from "./KlueAlternative";
import BlogIndex from "./BlogIndex";
import Blog from "./Blog";
import CrayonVsKlue from "./CrayonVsKlue";
import Competitors from "./Competitors";
import BlogHowToBuild from "./BlogHowToBuild";
import BlogKluePricing from "./BlogKluePricing";
import NotFound from "./NotFound";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    Home: Home,
    CrayonAlternative: CrayonAlternative,
    KlueAlternative: KlueAlternative,
    BlogIndex: BlogIndex,
    Blog: Blog,
    CrayonVsKlue: CrayonVsKlue,
    Competitors: Competitors,
    BlogHowToBuild: BlogHowToBuild,
    BlogKluePricing: BlogKluePricing,
    NotFound: NotFound,
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/crayon-alternative" element={<CrayonAlternative />} />
                <Route path="/klue-alternative" element={<KlueAlternative />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/why-i-built-battlecard-ai" element={<Blog />} />
                <Route path="/crayon-vs-klue" element={<CrayonVsKlue />} />
                <Route path="/competitors" element={<Competitors />} />
                <Route path="/blog/how-to-build-battlecards" element={<BlogHowToBuild />} />
                <Route path="/blog/klue-pricing" element={<BlogKluePricing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}