import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Appi() {


    const [data, setData] = useState([]);

    useEffect(() => {

        getMovies();

    }, [])

    //fetch
    /*
    async function getMovies() {
    
            const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1 ")
                const responseData = await response.json();
                setData(responseData.results);
                console.log(data);
        }*/


    // metodo fetch con .then
    /*
    function getMovies() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
            .then((response) => response.json())
            .then((responseData) => {setData(responseData.results)})

            .catch((error) => {console.log(error)})
    }*/

    //axios 
    /*
    async function getMovies() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1");
        setData(response.data.results);
    }
    */


    //axios .then
    async function getMovies() {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=1")
            .then((response) => {
                setData(response.data.results);
            })

            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            {
                data.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    )
}
