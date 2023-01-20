import ProdCardB from "../components/productCard/productCardB"
import { useEffect, useState } from "react"
import Loading from "../components/loadingAnim"
import axios from "axios"
import { API } from "../App"
import { useNavigate } from "react-router-dom"

export default function Orders() {
  axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

  const [auth, setAuth] = useState(null)
  const [orders,setOrders] = useState(null)
  const navigate = useNavigate()

  const getOrders = () => {
    axios
      .get(`${API}/account/orders`)
      .then(res => {
        console.log(res.data)
        if (res.data.auth) {
          setAuth(res.data.auth)
          setOrders(res.data.orders.orders)
        } else {
          navigate("/login",{
            state:{
              msg: "Login to continue"
            }
          })
        }
      })
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div style={{
      display: "grid",
    }}>
      <span style={{
        textAlign: "center",
        width: "100vw",
        fontSize: "28px",
        fontWeight: "600",
      }}>
        Orders Page
      </span>
      {
        auth && orders ?
          <>
            {
              orders.map(order => {
                return (<div key={order._id}></div>)
              })
            }
          </> : <Loading />
      }
    </div>
  )
}