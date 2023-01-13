import { useState, useEffect } from "react"
import axios from "axios"
import st from "../style";
import {  useNavigate } from "react-router-dom"
import { API } from "../../App";
import Loading from "../loadingAnim";
import ProdCard from "../productCard/productCard";



function Cart() {
	axios.defaults.headers.get['x-access-token'] = localStorage.getItem('token')

	const navigate = useNavigate()
	const [cart, setCart] = useState(null)
	const [prods, setProds] = useState(null)
	const [images,setImages] = useState(null)
	useEffect(() => {
		if (prods) {

		} else {
			axios
				.get(`${API}/cart`)
				.then(async (res) => {
					try {
						if (res.data.auth) {
							setCart(res.data.message)
							const ps = res.data.prods.productIds
							setProds(ps)
							getImages(res.data.prods._id)
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
						setCart("Empty cart")
					}
				})
				.catch(err => {
					setCart("Empty Cart")
				})
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart,images])

const getImages = (id) => {
	axios
	.get(`${API}/cart/images/${id}`)
	.then((res) => {
		setImages(res.data.images)
	})
}


	return (
		<div style={st.App}>
			{
				cart ? (
					<div><span>Your Cart</span>
					
						{
							prods ?
							prods.map(prod => {
								return (
									
									<div style={style.cardContainer} key={prod._id}>
									{
										images ? <ProdCard
											id={prod._id}
											src={images[prod._id]}
											name={prod.name}
											currency={prod.currency}
											price={prod.price}
										// small="true"
										/> : <ProdCard
											id={prod._id}
											// src={images[prod._id]}
											name={prod.name}
											currency={prod.currency}
											price={prod.price}
										// small="true"
										/>
									}
									</div>
								)
							}) : null
						}
					</div>

				) : <Loading />
			}

		</div>
	)
}

export default Cart

const style = {
	cardContainer: {
		position: "relative"
	},
	cardOptions: {
		position: "absolute",
		zIndex: "5",
		transform: "translateY(-50px)"
	}
}