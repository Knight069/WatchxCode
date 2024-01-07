import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import SplitPane from "react-split-pane";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <SplitPane split="vertical" minSize={50} defaultSize={"50%"}>
        {
          <AppContext>
            <BrowserRouter>
              <div className="flex flex-col h-full">
                <Header />
                <Routes>
                  <Route exact path="/" element={<Feed />} />
                  <Route
                    path="/search/:searchQuery"
                    element={<SearchResult />}
                  />
                  <Route path="/video/:id" element={<VideoDetails />} />
                </Routes>
              </div>
            </BrowserRouter>
          </AppContext>
        }
        {
          <AppContext>
            <Navbar />
            <Landing />
          </AppContext>
        }
      </SplitPane>
    </>
  );
};

export default App;
