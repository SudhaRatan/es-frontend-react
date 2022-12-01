import { useState } from "react"
import img from "../images/img.jpg"
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import pic4 from "../images/pic4.jpg"
import "./styles/productstyle.css"
import RArrow from "../images/LArrow.png"
import LArrow from "../images/RArrow.png"

export default function Product() {

    const imgArray = [img, pic1, pic2, pic3, pic4]

    const [count, setCount] = useState(0)

    const inc = () => {
        setCount((count + 1) % imgArray.length)
    }
    const dec = () => {
        if (count === 0) setCount(imgArray.length - 1)
        else setCount(count - 1)
    }

    const Button = (props) => {
        return (
            <button style={{
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                width: "30%",
                boxSizing: "border-box",
                margin: "0px 20px",
                backgroundColor: `${props.color}`,
                boxShadow: `0px 0px 8px 1px ${props.color}90`
            }}>{props.title}</button>

        )
    }

    return (
        <div className="cont">
            <div className="container">
                <div>
                    <div className="img">
                        <div onClick={dec} className="arrow"><img src={LArrow} alt="img" /></div>
                        <div className="img-child"><img alt="img" className="imgg" src={imgArray[count]} /></div>
                        <div onClick={inc} className="arrow"><img alt="img" src={RArrow} /></div>
                    </div>
                    <div style={{ textAlign: "center", width: "100%" }}>{count + 1}/{imgArray.length}</div>
                </div>
                <div className="attr">
                    <div className="name">Nokia 105 Single SIM, Keypad Mobile Phone with Wireless FM Radio | Blue</div>
                    <div className="rating">Rating</div>
                    <div className="price">$1299</div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium fugit quam iusto expedita doloribus non ut? Aut velit molestiae a inventore possimus omnis sed dolorum laboriosam? Tempora, sapiente cumque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium fugit quam iusto expedita doloribus non ut? Aut velit molestiae a inventore possimus omnis sed dolorum laboriosam? Tempora, sapiente cumque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium fugit quam iusto expedita doloribus non ut? Aut velit molestiae a inventore possimus omnis sed dolorum laboriosam? Tempora, sapiente cumque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum praesentium fugit quam iusto expedita doloribus non ut? Aut velit molestiae a inventore possimus omnis sed dolorum laboriosam? Tempora, sapiente cumque.
                    </div>
                </div>

                <div>
                    <h1>Reviews</h1>
                </div>
                <div style={{ height: "80px" }}></div>
            </div>
            <div className="buy">
                <div className="btngrp">
                    <Button color='#FB641B' title="Add to cart" />
                    <Button color='#666fff' title="Buy now" />
                </div>
            </div>
        </div>
    )
}
