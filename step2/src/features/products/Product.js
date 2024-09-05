import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductById } from './productsApiSlice';

const Product = ({ productId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
    const product = useSelector((state) => selectProductById(state, productId));

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (product) {
        return (
            <>
                <div className="product-card">
                    <div className="product-image" onClick={handleImageClick}>
                        <img src={`http://localhost:3500/uploads/${product.image}`} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <p className="product-category">{product.category}</p>
                    </div>
                </div>

                {/* Modal for showing product details */}
                {isModalOpen && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={handleCloseModal}>X</button>
                            <div className="modal-content">
                                <img src={`http://localhost:3500/uploads/${product.image}`} alt={product.name} className="modal-image" />
                                <h3 className="modal-product-name">{product.name}</h3>
                                <p className="modal-product-price">${product.price.toFixed(2)}</p>
                                <p className="modal-product-description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    } else return null;
};

export default Product;
