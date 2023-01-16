import AccountCard from "../components/accountCard";
import Loading from "../components/loadingAnim";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../App"

const Account = () => {
  axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

  const [auth, setAuth] = useState(false)
  const [userData,setUserData] = useState({})

  const getUserData = () => {
    axios
      .get(`${API}/account`)
      .then(res => {
        if (res.data.auth){
          setUserData(res.data.result)
          setAuth(true)
        }
      })
  }

  useEffect(() => {
    getUserData()
  }, []);

  return (
    <div >
      <h1 style={{
        textAlign: "center",
      }}>Your account</h1>
      {
        auth ?
          <>
            <AccountCard name={userData.name} phone={userData.phone} />
          </>
          :
          <Loading />
      }
    </div>
  )
}

export default Account;