import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import CenterScreen from "./CenterScreen";
import axios from "axios";
import Loader from "./Loader";
import SortBy from "./SortBy";

function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    const users = await axios.get("https://demo7303877.mockable.io/");
    setData(users.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data, loading);

  return (
    <>
      {!loading ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <SortBy/>  
              <SidePanel rawData={data} filterDataHandler={setFilteredData} />
            </div>
            <div className="col-lg-9">
              <CenterScreen
                productData={data.products}
                filteredData={filteredData}
              />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
