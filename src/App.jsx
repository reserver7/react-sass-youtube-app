import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/index";
import SearchedVideoPage from "./pages/SearchedVideoPage/index";
import VideoPage from "./pages/VideoPage/index";
import NavigationBar from "./components/NavigationBar/index";
import SideBar from "./components/SideBar/index";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/results/:input" element={<SearchedVideoPage />} />
          <Route path="/video/:videoId" element={<VideoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
