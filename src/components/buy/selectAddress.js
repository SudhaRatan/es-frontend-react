// import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "../../App"
import Loading from "../loadingAnim"
import { useNavigate,useLocation } from "react-router-dom";
import AddressCard from "../addressCard";

export default function SelectAddress() {
  axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

  const navigate = useNavigate()
  const location = useLocation()
  const [auth, setAuth] = useState(null)
  const [userData, setUserData] = useState({})
  const [prods,setProds] = useState(null)

  useEffect(() => {
    getUserData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getUserData = () => {
    axios
      .get(`${API}/account`)
      .then(res => {
        if (res.data.auth && location.state ) {
          setUserData(res.data.result)
          setAuth(true)
          setProds(location.state.prods)
          // console.log(location.state.prods)
        } else {
          navigate("/login", {
            state: {
              msg: "Login to continue"
            }
          })
        }
      })
  }

  return (
    <div>
      {
        auth ?
          <div>
          <h1 style={{textAlign:"center"}}>Select an address</h1>
          {
            prods ? <AddressCard prods={prods} sel={auth} ids={userData} addresses={userData.addresses} /> : <Loading />
          }
          </div>
          : <Loading />
      }

    </div>
  )
}