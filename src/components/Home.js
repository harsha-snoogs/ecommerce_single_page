import React, { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import CenterScreen from "./CenterScreen";
import axios from "axios";
import Loader from "./Loader";


function Home() {
  const [data, setData] = useState({});
  const [loading,setLoading]=useState(true);

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
              <SidePanel />
            </div>
            <div className="col-lg-9">
              <CenterScreen productData={data.products} />
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
