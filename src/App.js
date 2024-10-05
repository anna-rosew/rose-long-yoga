import "./styles/Main.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotPage from "./pages/NotPage";
import Approach from "./pages/Approach";
import Groups from "./pages/Groups";
import OneToOne from "./pages/OneToOne";
import Retreats from "./pages/Retreats";
import Membership from "./pages/MembershipLanding";
import Blog from "./pages/Blog";
import Qualifications from "./pages/Qualifications";
import InPerson from "./pages/InPerson";

//blog articles
import FoodArticle from "./pages/BlogPosts/FoodArticle";
import SelfArticle from "./pages/BlogPosts/SelfAwarenessAug";
import RiskArticle from "./pages/BlogPosts/RiskAug24";
import VoiceArticle from "./pages/BlogPosts/VoicesArticle";
import SugarArticle from "./pages/BlogPosts/SugarArticle";
import InsideOutArticle from "./pages/BlogPosts/InsideOutArticle";
import HiddenTreasureArticle from "./pages/BlogPosts/HiddenTreasure";
import LynnInterview from "./pages/BlogPosts/LynnInterview";

import NavBar from "./components/Nav/NavBar";
import CreditsFooter from "./components/CreditsFooter";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/onetoone" element={<OneToOne />} />
        <Route path="/retreats" element={<Retreats />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/inperson" element={<InPerson />} />
        <Route path="*" element={<NotPage />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/foodarticle" element={<FoodArticle />} />
        <Route path="/selfarticle" element={<SelfArticle />} />
        <Route path="/riskarticle" element={<RiskArticle />} />
        <Route path="/voicearticle" element={<VoiceArticle />} />
        <Route path="/sugararticle" element={<SugarArticle />} />
        <Route path="/insidearticle" element={<InsideOutArticle />} />
        <Route path="/hiddenarticle" element={<HiddenTreasureArticle />} />
        <Route path="/lynninterview" element={<LynnInterview />} />
      </Routes>{" "}
      <CreditsFooter />
    </div>
  );
}

export default App;
