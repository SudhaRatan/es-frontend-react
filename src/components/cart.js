import { useState, useEffect } from "react"
import axios from "axios"
import st from "./style";
import { useNavigate } from "react-router-dom"
function Cart() {
    axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

    const navigate = useNavigate()
    const [cart, setCart] = useState(null)
    useEffect(() => {
        axios
            .get("/cart")
            .then((res) => {

                if (res.data.auth) setCart(res.data.message)
                else {
                    localStorage.removeItem('token')
                    navigate("/login", {
                        state: {
                            msg: "Login to continue"
                        }
                    })
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    const handleCLick = async () => {
        await localStorage.removeItem('token')
        setCart(null)
        // navigate("/")
    }



    return (
        <div style={st.App}>
            {cart}
            <button onClick={handleCLick}>Logout</button>
        </div>
    )
}


export default Cart