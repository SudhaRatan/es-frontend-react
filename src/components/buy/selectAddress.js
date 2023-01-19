// import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "../../App"
import Loading from "../loadingAnim"
import { useNavigate } from "react-router-dom";
import AddressCard from "../addressCard";

export default function SelectAddress() {
  axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

  const navigate = useNavigate()
  const [auth, setAuth] = useState(null)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    getUserData()
  })

  const getUserData = () => {
    axios
      .get(`${API}/account`)
      .then(res => {
        if (res.data.auth) {
          setUserData(res.data.result)
          setAuth(true)
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
            <AddressCard sel={auth} ids={userData} addresses={userData.addresses} />
          </div>
          : <Loading />
      }

    </div>
  )
}