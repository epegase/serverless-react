import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./containers/NotFound";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notes/new" element={<NewNote />} />
      <Route path="*" element={<NotFound />} />;
    </Routes>
  );
}