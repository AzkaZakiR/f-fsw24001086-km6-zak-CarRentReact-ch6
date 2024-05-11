import React from "react";

const Home = () => {
    return (
        <div className="beda">
            <header className="p-3 justify-center">
                <div className="container mx-auto ">
                    <div className="flex justify-between items-center">
                        <a href="/" className="flex items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src="./Asset/Rectangle 74.png" alt="" />
                        </a>
                        <ul className="flex flex-row justify-end flex-grow mb-2 mb-md-0 p-2">
                            <li><a href="#" className="text-dark font-semibold m-3">Our Services</a></li>
                            <li><a href="#" className="text-dark font-semibold m-3">Why Us</a></li>
                            <li><a href="#" className="text-dark font-semibold m-3">Testimonial</a></li>
                            <li><a href="#" className="text-dark font-semibold m-3">FAQs</a></li>
                            <li><button type="button" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Register</button></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className="container mb-5">
                <div className="flex flex-col md:flex-row mb-5">
                    <div className="md:w-1/2 mt-5 p-4">
                        <h1 className="text-3xl font-bold mb-5">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p className="mb-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a class="mt-5 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href="/">Mulai Sewa Mobil</a>
                    </div>
                    <div className="md:w-1/2 mt-5 md:ml-5">
                        <img src="/img/img_car.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
