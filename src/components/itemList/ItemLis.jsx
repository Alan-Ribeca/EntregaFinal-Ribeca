/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Item } from "../item/Item"
import { ItemCart } from "../itemCart/ItemCart"

export const ItemList = ({ products, plantilla }) => {
    return (
        <>
            {
                plantilla === "Item" 
                ?
                    products.map( prod => <Item key={prod.id} product={prod} />)
                :
                    products.map( prod => <ItemCart key={prod.id} product={prod} />)

            }
        </>
    )
} 