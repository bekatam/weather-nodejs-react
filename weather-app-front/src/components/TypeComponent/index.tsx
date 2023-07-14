import {Outlet, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
export const TypeComponent = () => {
    const {type, city = "almaty"} = useParams();
    const [data, setData] = useState([]);
    const getAxios = async () => {
        await axios.get(`http://localhost:8000/${type}/${city}`).then((response) => response.data).then(responce => setData(responce));
    }
    useEffect(()=>{
        getAxios().catch(err=>console.log(err));
    },[type,city])
    console.log("type", data);
    return (
      <div>TypeComponent

        {city && <Outlet/>}
      </div>
    )
  }
  