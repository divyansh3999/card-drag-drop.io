import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DragDnd from "./react-beautiful-dnd/DragDnd";

export default function MaterialUi() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DragDnd />} />
        </Routes>
      </Router>
    </>
  );
}
