import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', description: '', image: null });
    const [editProduct, setEditProduct] = useState(null);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3500/menu');
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setNewProduct({ ...newProduct, image: e.target.files[0] });
    };

    // Handle creating a new product
    const handleCreateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newProduct.name);
        formData.append('price', newProduct.price);
        formData.append('category', newProduct.category);
        formData.append('description', newProduct.description);
        formData.append('image', newProduct.image);

        try {
            await axios.post('http://localhost:3500/menu', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            fetchProducts(); // Reload products after creation
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    // Handle deleting a product
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete('http://localhost:3500/menu', { data: { id } });
            fetchProducts(); // Reload products after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Handle updating a product
    const handleUpdateProduct = async (id) => {
        const formData = new FormData();
        formData.append('name', editProduct.name);
        formData.append('price', editProduct.price);
        formData.append('category', editProduct.category);
        formData.append('description', editProduct.description);
        if (editProduct.image) {
            formData.append('image', editProduct.image);
        }

        try {
            await axios.patch('http://localhost:3500/menu', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            fetchProducts(); // Reload products after update
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <h1>Admin Dashboard</h1>

                {/* Form for creating new product */}
                <form onSubmit={handleCreateProduct}>
                    <h2>Create New Product</h2>
                    <input type="text" name="name" placeholder="Product Name" onChange={handleInputChange} required />
                    <input type="text" name="price" placeholder="Price" onChange={handleInputChange} required />
                    <input type="text" name="category" placeholder="Category" onChange={handleInputChange} required />
                    <textarea name="description" placeholder="Description" onChange={handleInputChange}></textarea>
                    <input type="file" name="image" onChange={handleImageChange} required />
                    <button type="submit">Create Product</button>
                </form>

                {/* Product list with update and delete options */}
                <h2>Product List</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>Description: {product.description}</p>
                            <img src={`http://localhost:3500/uploads/${product.image}`} alt={product.name} width="100" />
                            <button onClick={() => setEditProduct(product)}>Edit</button>
                            <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                        </li>
                    ))}
                </ul>

                {/* Form for updating a product */}
                {editProduct && (
                    <form onSubmit={() => handleUpdateProduct(editProduct._id)}>
                        <h2>Edit Product</h2>
                        <input
                            type="text"
                            name="name"
                            value={editProduct.name}
                            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            name="price"
                            value={editProduct.price}
                            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            name="category"
                            value={editProduct.category}
                            onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
                            required
                        />
                        <textarea
                            name="description"
                            value={editProduct.description}
                            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
                        ></textarea>
                        <input type="file" name="image" onChange={(e) => setEditProduct({ ...editProduct, image: e.target.files[0] })} />
                        <button type="submit">Update Product</button>
                    </form>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
