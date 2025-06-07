import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilPengguna.css";

function ProfilPengguna () {
    const { username } = useParams ();

    return (
        <div class="profilpengguna">
        <h1>Profil Pengguna</h1>
        <h2>Username : {username}</h2>
        {/*Tampilkan Informasi Pengguna */}
        </div>
    )
}

export default ProfilPengguna;