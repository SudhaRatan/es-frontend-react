import { useState, useEffect } from "react"
import axios from "axios"
import st from "./style";
import { useNavigate } from "react-router-dom"
import { API } from "../App";
import Loading from "./loadingAnim";



function Sell() {
    axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

    const navigate = useNavigate()
    const [auth, setAuth] = useState(null)
    useEffect(() => {
        axios
            .get(`${API}/sell/products`)
            .then((res) => {
                try {
                    if (res.data.auth) setAuth(res.data.auth)
                    else {
                        localStorage.removeItem('token')
                        navigate("/login", {
                            state: {
                                msg: "Login to continue"
                            }
                        })
                    }
                } catch (error) {
                    setAuth("error")
                }


            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])




    return (
        <div style={st.App}>
            {
                auth ? (
                    <div>
                        {auth}
                    </div>

                ) : <Loading />
            }

        </div>
    )
}


export default Sell