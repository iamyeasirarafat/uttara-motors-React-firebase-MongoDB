import axios from "axios";
import { useEffect, useState } from "react";


const handleDelete = (id) => {
    const URLDev = `http://localhost:5000/${id}`;
    const URL = `https://pure-citadel-40053.herokuapp.com/${id}`;
    axios.delete(URLDev).then((res) =>console.log(res.data))

   
}