import ProdCardB from "../productCard/productCardB"

export default function OrdersCard(props) {

  const d = new Date(props.order.orderDate)

  return (
    <div style={{
      position: "relative",
      width: "100%",
    }}>
      <span style={{
        fontSize: "18px",
        fontWeight: "500"
      }}>Ordered on {[(d.getDate()), (d.getMonth() + 1), d.getFullYear()].join('/')} at {d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
      <div style={{
        position: "relative",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}>
        {
          props.order.productIds.map(prod => {
            return (
              <div style={{
                display: "inline"
              }} key={prod._id}>

                <ProdCardB small={true}
                  id={prod._id}
                  name={prod.name}
                  brand={prod.brand}
                />
                {/* {
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
                } */}
              </div>
            )

          })
        }

      </div>
    </div>
  )
}