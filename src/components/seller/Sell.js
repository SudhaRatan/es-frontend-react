import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { API } from "../../App";
import Loading from "../loadingAnim";
import "./styles/style.css";
import currency from "../../currency";
import Button from "../button";



function Sell() {
    axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')
    axios.defaults.headers.post['x-access-token'] = localStorage.getItem('token')

    const navigate = useNavigate()
    const [auth, setAuth] = useState(null)
    useEffect(() => {
        axios
            .get(`${API}/sell/upload`)
            .then((res) => {
                try {
                    if (res.data.auth) setAuth(res.data.message)
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

    const [post, setPost] = useState({
        name: "",
        brand: "",
        price: "",
        currency: "",
        description: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

    }

    // const [files, setFiles] = useState([])
    const [results,setResults] = useState([])


    const handleFiles = async (e) => {
        const files = e.target.files
        var temp =[]
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader()
            reader.onloadend = async () => {
                const res = await reader.result.toString()
                temp.push(res)
                setResults(temp)
                // console.log(res)
            }
            reader.readAsDataURL(files[i])
        }

    }

    const handleUpload = async (e) => {
        // console.log(post,results)
        axios
            .post(`${API}/sell/upload`, {post,results})
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div>
            {
                auth ? (
                    <div className="contain">
                        <h1 style={{ margin: "20px" }}>{auth}</h1>
                        <div className="form">
                            <label className="label">Select Brand</label>
                            <input
                                placeholder="Enter brand name"
                                className="inp"
                                type="text"
                                name="brand"
                                onChange={handleChange}
                                value={post.brand}
                            />
                            <label className="label">Product name</label>
                            <input
                                placeholder="Enter product name"
                                className="inp"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={post.name}
                            />
                            <label className="label">Price</label>
                            <input
                                placeholder="Product Price"
                                className="inp"
                                type="number"
                                name="price"
                                onChange={handleChange}
                                value={post.price}
                            />

                            <label className="label">Currency</label>
                            <select
                                className="inp"
                                onChange={handleChange} name="currency">
                                <option disabled selected >Select a currency</option>
                                {
                                    Object.keys(currency).map((curr) => {
                                        return (
                                            <option key={curr} value={curr}>{currency[curr].name}({curr})-{currency[curr].symbol}</option>
                                        )
                                    })
                                }
                            </select>
                            <label className="label">Description</label>
                            <textarea
                                placeholder="Product description"
                                className="inp1"
                                type="text"
                                name="description"
                                onChange={handleChange}
                                value={post.description}
                            />
                            <input
                                className="inp"
                                type="file"
                                name="files"
                                onChange={e => handleFiles(e)}
                                multiple
                            />
                        </div>
                        <Button onClick={handleUpload} color='#666fff' margin="20px 0px" width='100%' title="Upload Product" />
                        <Button color='#FB641B' width='100%' title="Cancel" />
                    </div>

                ) : <Loading />
            }

        </div>
    )
}


export default Sell