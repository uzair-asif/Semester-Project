import React, { useState, useEffect } from "react";

// all hotels
import { allHotels } from "../actions/hotel";

// component
import SmallCard from "../components/cards/SmallCard";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllHotels();
  }, []);

  const loadAllHotels = async () => {
    let res = await allHotels();

    setHotels(res.data);
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>All Hotels</h1>
      </div>

      <div className="container-fluid">
        <br />

        {/* <pre>{JSON.stringify(hotels, null , 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard key={h._id} h={h} />
        ))}
      </div>
    </>
  );
};

export default Home;
