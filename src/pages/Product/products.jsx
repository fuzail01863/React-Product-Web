import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import Loader from '../../components/Loader/loader';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
	let navigate = useNavigate()


    // Initial products fetch
    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products || []);
        } catch (error) {
            console.error('Failed to fetch products', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Live search fetch - Triggers immediately when length >= 2
    useEffect(() => {
        const query = searchInput.trim();

        if (query.length >= 2) {
            setIsLoading(true);
            axios.get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    setSearchProducts(response?.data?.products || []);
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setSearchProducts([]);
        }
    }, [searchInput]);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Show search results if length >= 2, otherwise show default products
    const isSearching = searchInput.trim().length >= 2;
    const displayedProducts = isSearching ? searchProducts : products;

    return (
        <div className="min-h-screen bg-[#fffaf7] px-4 py-10 text-slate-800 sm:px-6 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-7xl">
                
                {/* Header Section with Integrated Search Bar */}
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                            Featured collection
                        </p>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                            Beauty essentials made for everyday radiance.
                        </h1>
                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Discover soft-focus formulas, nourishing hydration, and effortless color in one curated collection.
                        </p>
                    </div>

                    {/* Styled Search Input Matching Theme */}
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                            className="w-full rounded-full border border-pink-200 bg-white px-5 py-3 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition focus:border-[#d9776a] focus:outline-none focus:ring-2 focus:ring-[#d9776a]/30"
                        />
                        {searchInput && (
                            <button
                                onClick={() => setSearchInput('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                            >
                                Clear
                            </button>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                {isLoading ? (
                    <div className="flex justify-center py-20">
                        <Loader />
                    </div>
                ) : displayedProducts.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {displayedProducts.map((p) => (
                            <div 
                                key={p.id} 
                                onClick={() => navigate(`/product/${p.id}`)}
                                className="rounded-[20px] border border-pink-100 bg-white p-4 shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="overflow-hidden rounded-[14px]">
                                        <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#fceae3] to-[#f9d8c8]">
                                            <img 
                                                src={p.thumbnail} 
                                                alt={p.title} 
                                                className="h-full w-full object-cover" 
                                                loading="lazy" 
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{p.description}</p>
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-slate-900">${p.price}</span>
                                    <a href="#" className="rounded-full bg-[#d9776a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c96b5f]">
                                        Add to bag
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center text-slate-500">
                        No products found matching "{searchInput}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;