import React, { useContext } from "react";
import LeftNav from "./LeftNav/index";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav/index";
import { BiArrowBack } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { SearchContext } from "../../context/SearchContext";
import useWindowSize from "../../helpers/useWindowSize";

const NavigationBar = () => {
  const { showSpecialSearchBar, setShowSpecialSearchBar } =
    useContext(SearchContext);
  const { width } = useWindowSize();

  const specialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25} />
      </button>
      <form>
        <input type="text" name="search" placeholder="search" />
        <button type="submit">
          <ImSearch size={20} />
        </button>
      </form>
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );

  return (
    <nav className="Navbar">
      {width <= 640 && showSpecialSearchBar ? (
        specialSearchBarRender
      ) : (
        <>
          <LeftNav />
          <SearchBar />
          <RightNav />
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
