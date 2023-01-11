import "./components/homeStyle.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/loadingAnim";
import ProdCard from "./components/productCard/productCard";

export const API = process.env.REACT_APP_API;


function App() {


  const [feat, setFeat] = useState(null)
  const [elec, setElect] = useState(null)
  const [clothes, setClothes] = useState(null)
  const [rand, setRand] = useState(null)
  const [featImg, setFeatImg] = useState(null)

  useEffect(() => {
    getFeature()
    getElectronics()
    getClothes()
    getRandom()
  }, [])

  const navigate = useNavigate();

  const getFeature = () => {
    axios
      .get(`${API}/featProd`)
      .then(res => {
        // console.log(res.data.featProd[0],res.data.imgData.imageData)
        setFeat(res.data.featProd[0])
        setFeatImg(res.data.imgData.imageData[0])
      })
  }

  const getElectronics = () => {
    axios
      .get(`${API}/electronicProds`)
      .then((res) => {
        console.log(res)
      })
  }

  const getClothes = () => {

  }

  const getRandom = () => {

  }

  return (

    <div className="Home">
      <div className="feat">
        {
          feat && featImg ? (
            <div style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr"
            }}>
              <h2>Featuring Product</h2>
              <ProdCard
                key={feat._id}
                id={feat._id}
                src={featImg}
                name={feat.name}
                currency={feat.currency}
                price={feat.price}
              // small="true"
              />
            </div>
          ) : (
            <>
              <Loading />
            </>
          )
        }
      </div>
      <div className="elec">
        {
          elec ? (
            <div style={{
              position: "relative"
            }}>Electronics section</div>
          ) : (
            <>
              <Loading />
            </>
          )
        }
      </div>
      <div className="clothes">
        {
          clothes ? (
            <div style={{
              position: "relative"
            }}>Clothes section</div>
          ) : (
            <>
              <Loading />
            </>
          )
        }
      </div>
      <div className="toys">
        {
          rand ? (
            <div style={{
              position: "relative"
            }}>Others section</div>
          ) : (
            <>
              <Loading />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;

