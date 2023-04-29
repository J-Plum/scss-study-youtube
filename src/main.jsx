import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchedVideoPage from "./pages/SearchedVideoPage";
import VideoPage from "./pages/VideoPage";
import App from "./App";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/main", element: <MainPage /> },
      { path: "/results/:input", element: <SearchedVideoPage /> },
      { path: "/video/:videoId", element: <VideoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
