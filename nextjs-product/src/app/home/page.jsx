'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import DefaultLayout from '../layouts/DefaultLayout';
import { getProducts } from '../(product)/products/service/products';
import formatMoney from '@/utils/formatMoney';

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data.data);
            } catch (e) {
                console.error("Error fetching products:", e);
            }
        };

        fetchProducts();
    }, []);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <DefaultLayout>
            <main>
                <div className="relative container mx-auto max-w-full">
                    <div className="relative overflow-hidden h-[50vh]">
                        {products.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute w-full h-full transition-opacity duration-500 ${index === activeSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <div className="relative h-full w-full">
                                    <img
                                        src={slide.preview_img_path}
                                        alt={slide.name}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-black/20">
                                        <div className="container mx-auto h-full flex items-center">
                                            <div className="w-full lg:w-1/2 px-6 md:ml-16">
                                                <p className="text-white text-2xl my-4">{slide.name}</p>
                                                <Link
                                                    href="#"
                                                    className="text-xl inline-block text-white border-b border-white hover:border-gray-300 transition-colors"
                                                >
                                                    view product
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-900 hover:text-white transition-colors z-10"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-900 hover:text-white transition-colors z-10"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === activeSlide ? 'bg-white' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <section className="bg-white py-8">
                    <div className="container mx-auto">
                        <nav className="flex items-center justify-between px-6 py-3">
                            <Link href="#" className="text-xl font-bold text-gray-800">
                                Store
                            </Link>
                            <div className="flex items-center space-x-4">
                                <button className="hover:text-gray-600">
                                </button>
                                <button className="hover:text-gray-600">
                                </button>
                            </div>
                        </nav>

                        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-8">
                            {products.map((product) => (
                                <div key={product.id} className="flex flex-col">
                                    <Link href="#" className="group">
                                        <div className="relative aspect-square mb-3 overflow-hidden">
                                            <img
                                                src={product.preview_img_path}
                                                alt={product.name}

                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-800">{product.name}</p>
                                            <button className="text-gray-500 hover:text-black">
                                                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="text-gray-900 mt-1">{formatMoney(product.price)}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
}