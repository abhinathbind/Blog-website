

// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from "react";
// import { useContext } from "react";
// import { Context } from "./context/Context";

// function App() {
//   const { currentUser } = useContext(Context);
//   return (
//     <Router>
//       <Topbar />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/posts" element={<Homepage />} />
//         <Route
//           path="/register"
//           element={currentUser ? <Homepage /> : <Register /> }
//         />
//         <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
//         <Route path="/post/:id" element={<Single />} />
//         <Route
//           path="/write"
//           element={currentUser ? <Write /> : <Login />}
//         />
//         <Route
//           path="/settings"
//           element={currentUser ? <Settings /> : <Login />}
//         />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

import Home from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
