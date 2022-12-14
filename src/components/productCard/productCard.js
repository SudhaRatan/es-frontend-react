import "../../components/seller/styles/prods.css"
import { Link } from "react-router-dom"

const ProdCard = (props) => {
  return (
    <div style={{
      maxWidth: props.small ?"320px" : "100%" ,
      backgroundColor:"#ffffff",
      // boxShadow:"3px 3px 10px 1px #00000080"
    }} className="prod-card">
      <div className="prod-img">
        <img height={200} width={150} className="prod-img" src={props.src} alt="efa" />
      </div>
      <Link to={"../product/" + props.id} className="prod-name">
        <div>{props.name}</div>
        <div>{props.currency} {props.price}</div>
      </Link>
    </div>
  )
}

export default ProdCard;