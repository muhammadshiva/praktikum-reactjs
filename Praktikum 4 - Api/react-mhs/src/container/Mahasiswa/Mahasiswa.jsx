import React, { Component } from "react";
import PostMhs from "../../components/PostMhs";
import './Mahasiswa.css'

class Mahasiswa extends Component {

    state = {
        listMahasiswa: []
    }

    componentDidMount() {
        fetch('http://localhost:3003/posts')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <h2>List Mahasiswa</h2>

            </div>
        )
    }
}

export default Mahasiswa;