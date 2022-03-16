import React from "react";

const MhsPost = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <div className="judul-mahasiswa">Nama : {props.nama}</div>
                <p className="isi mahasiswa">Nim : {props.nim}</p>
                <p className="isi mahasiswa">Alamat :{props.alamat}</p>
                <p className="isi mahasiswa">Hp : {props.hp}</p>
                <p className="isi mahasiswa">Angkatan :{props.angkatan}</p>
                <p className="isi mahasiswa">Status : {props.status}</p>
                <button className="btn btn-sa btn-warning" onClick={() => props.hapusMahasiswa(props.idNim)}>Hapus</button>
            </div>
        </div>
    )
}

export default MhsPost;