import { useState, useEffect } from "react"
import axios from "axios"
import st from "./style";
import { useNavigate } from "react-router-dom"
import { API } from "../App";
import Loading from "./loadingAnim";



function Cart() {
    axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

    const navigate = useNavigate()
    const [cart, setCart] = useState(null)
    useEffect(() => {
        axios
            .get(`${API}/cart`)
            .then((res) => {
                try {
                    if (res.data.auth) setCart(res.data.message)
                    else {
                        localStorage.removeItem('token')
                        navigate("/login", {
                            state: {
                                msg: "Login to continue"
                            }
                        })
                    }
                } catch (error) {
                    setCart("error")
                }


            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])




    return (
        <div style={st.App}>
            {
                cart ? (
                    <div>
                        {cart}
                    </div>

                ) : <Loading />
            }

        </div>
    )
}


export default Cart