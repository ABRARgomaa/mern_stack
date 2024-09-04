import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectProductById } from './productsApiSlice'

const Product = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))

    const navigate = useNavigate()

    if (product) {

        return (
            <tr className="table__row product">
                <td className="table__cell">{product.name}</td>
                <td className="table__cell">${product.price.toFixed(2)}</td>
                <td className="table__cell">{product.category}</td>
            </tr>
        )

    } else return null
}
export default Product