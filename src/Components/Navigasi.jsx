import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigasi.css"

function Navigasi () {
    return (
        <div class="Navigation">
        <h3 class="JudulNavigasi">Blog Pages</h3>
        <ul class="Pages">
            <li class="button">
                <Link to="/">Beranda</Link>
            </li>
            <li class="button">
                <Link to="/DetailArtikel">Detail Artikel</Link>
            </li>
            <li class="button">
                <Link to="/Kontak">Kontak</Link>
            </li>
            <li class="button">
                <Link to="/TentangSaya">Tentang Saya</Link>
            </li>
            <li class="button">
                <Link to="/profil/:username">Profil Pengguna</Link>
            </li>
        </ul>
        </div>
    )
}

export default Navigasi;