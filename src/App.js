/**
 * The App component sets up the routing for different pages in a React application, including the main
 * feed, search results, and video details.
 * @returns The `App` component is being returned. It includes the `BrowserRouter` component from
 * react-router-dom, which sets up the routing for the application. Inside the `BrowserRouter`, there
 * is a `div` element with a class name of "flex flex-col h-full" containing the `Header` component and
 * the `Routes` component. The `Routes` component defines the different routes of the application,
 */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full backgroundimage">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

alert('this is under development u will not able to use for now...');

export default App;