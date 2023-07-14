import { useState } from "react";

import { Outlet, useNavigate} from "react-router-dom";

type RequestTypeType = "current" | "forecast";

type CityType = "almaty" | "astana" | "boston" | "dublin";

export const BaseComponent = () => {
  const [type, setType] = useState<RequestTypeType>("current");

  const [city, setCity] = useState<CityType>("almaty");
  const navigate = useNavigate();

  const handleCityChange = (e: any) => {
    setCity(e.target.value);
  };

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const handlePickCity = () => {
    navigate(type + "/" + city);
  };

  const handlePickType = () => {
    navigate(type);
  };

  return (
    <div>
      <div className="App">
        <input value={city} onChange={handleCityChange}/>
        <button onClick={handlePickCity}>Pick city</button>
        <input value={type} onChange={handleTypeChange} />
        <button onClick={handlePickType}>Pick Type</button>
      </div>
      <Outlet />
    </div>
  );
};