import React from "react";

const PostMhs = (props) => {
    return (
        <div className="mahasiswa">
            <div className="mahasiswa">
                <div className="gambar-mahasiswa">
                    <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Mahasiswa" />
                </div>
                <div className="content-mahasiswa">
                    <div className="judul-mahasiswa">{props.judul}</div>
                    <p className="isi-mahasiswa">{props.isi}</p>
                </div>
            </div>
        </div>
    )
}

export default PostMhs