import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectProductById } from './productsApiSlice'

const Product = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))

    const navigate = useNavigate()

    if (product) {
        const handleEdit = () => navigate(`/dash/products/${productId}`)

        return (
            <tr className="table__row product">
                <td className="table__cell">{product.name}</td>
                <td className="table__cell">${product.price.toFixed(2)}</td>
                <td className="table__cell">{product.category}</td>
                <td className="table__cell">
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}
export default Product