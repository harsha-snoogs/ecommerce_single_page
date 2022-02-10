import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import CenterScreen from "./CenterScreen";
import axios from "axios";
import Loader from "./Loader";
import Navbar from "./Navbar";

function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilterData] = useState([]);

  const getData = async () => {
    const users = await axios.get("https://demo7303877.mockable.io/");
    setData(users.data);
    setLoading(false);
  };

  useEffect(() => {
    //data loaded from API for the first render
    getData();
  }, []);

  return (
    <>
      {!loading ? (
        <div className="container-fluid">
          <div className="row" style={{marginBottom:"0.75rem"}}>
            <Navbar />
          </div>
          <div className="row">
            <div className="col-lg-2" style={{borderRight:"1px solid #C0C0C0"}}>
              <SidePanel rawData={data} filterDataHandler={setFilterData} />
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
