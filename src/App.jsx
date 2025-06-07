import React from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "./Pages/Beranda";
import DetailArtikel from "./Pages/DetailArtikel";
import Kontak from "./Pages/Kontak";
import NotFound from "./Pages/NotFound";
import TentangSaya from "./Pages/TentangSaya";
import Navigasi from "./Components/Navigasi";
import ProfilPengguna from "./Pages/ProfilPengguna";

function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda/>}/>
        <Route path="/DetailArtikel" element={<DetailArtikel/>}/>
        <Route path="/Kontak" element={<Kontak/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/TentangSaya" element={<TentangSaya/>}/>
        <Route path="/profil/:username" element={<ProfilPengguna/>}/>
      </Routes>
      <br/>
      <Navigasi />
    </div>
  )
}

export default App;