import "./App.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductsList from "./pages/ProductsList";
import Bookmark from "./pages/Bookmark";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isModal = useSelector((state) => state.modal.isModalOpen);
  return (
    <BrowserRouter>
      <ToastContainer 
        position="bottom-right" 
        autoClose={2000}
        pauseOnFocusLoss={false}
        closeButton={false}
        hideProgressBar={true}
        transition={Slide}
        />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductsList />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
        <Footer />
        {isModal ? <Modal /> : null}
      </div>
    </BrowserRouter>
    
  );
}

export default App;

