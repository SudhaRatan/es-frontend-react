import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { API } from "../../App"
import axios from "axios"
import Loading from "../loadingAnim"
import "./styles/prods.css"
import Button from "../button"

export default function Products() {
    axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')
    axios.defaults.headers.post['x-access-token'] = localStorage.getItem('token')


    const navigate = useNavigate()

    const [auth, setAuth] = useState(null)
    const [images, setImages] = useState([])
    const [prods, setProds] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/sell/products`)
            .then((res) => {
                try {
                    // console.log(res.data)
                    if (res.data.auth) {
                        setAuth(res.data.message)
                        setProds(res.data.prods)
                        setImages(res.data.images)
                        // console.log(images)
                    }
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
                    console.log(error)
                }


            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    return (
        <div className="prod-home"><h1>{auth}</h1>
            {
                auth && images ? (
                    <><Button title="Upload a product" color="#666fff" onClick={() => navigate("/sell")} />
                        <div className="Prods-cont">


                            {
                                prods.map(prod => {
                                    return (
                                        <div key={prod._id} className="prod-card">
                                            <div className="prod-img">
                                                <img height={200} className="prod-img" src={images[prod._id]} alt="efa" />
                                            </div>
                                            <Link to={"../product/" + prod._id} className="prod-name">
                                                <div>{prod.name}</div>
                                                <div>{prod.currency} {prod.price}</div>
                                            </Link>


                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                ) : (<Loading />)
            }
        </div>
    )
}
