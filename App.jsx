import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import HeadMember from "./components/HeadMember";
import About from "./components/About";
import Magazine from "./components/Magazine";
import Information from "./components/Information";
import Notification from "./components/Notification";
import Circular from "./components/Circular";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ProjectTender from "./components/ProjectTender";
import Achievement from "./components/Achievements";
import Update from "./components/Update";
import Extra from "./components/Extra";
import Map from "./components/Map";
import Access from "./components/Access";
import Dark from "./components/Dark";
import Social from "./components/Social";
import Resizer from "./components/Resizer";
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/Admin";
import "./App.css";
function App() {
  return (
    <div>
      {/* <Admin/> */}
      <Access/>
      <Header />
      <Social/>
      <Navbar />
      <Slideshow />
      <div className=" mt-10">
      <Update />
        <HeadMember />
        <Information />
      </div>
      <Achievement />
      <Extra />
      <div className="ml-2">
        <Circular />
        <About />
        <Notification />
      </div>
      <ProjectTender />
      <Gallery />
      {/* <Map/> */}
      <Logo />
      <Footer />
    </div>
  );
}
export default App;