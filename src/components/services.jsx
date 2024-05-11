import React from "react";

const Services = () => {
    return (
        <section className="container">
            <div className="container mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-lg-4 mx-4">
                        <img src="/img/img_service.png" alt="" className="mr-4" />
                    </div>
                    <div className="col-lg-6 mt-5 mx-4">
                        <h1 className="text-5xl font-bold mb-4">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <p className="text-xl font-thin mb-5">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">
                                <span className="inline-block mr-2">
                                    <img src="/img/svg/check-circle-blue.svg" alt="Check" className="h-4 w-4" />
                                </span>
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                            </li>
                            <li className="mb-2">
                                <span className="inline-block mr-2">
                                    <img src="/img/svg/check-circle-blue.svg" alt="Check" className="h-4 w-4" />
                                </span>
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </li>
                            <li className="mb-2">
                                <span className="inline-block mr-2">
                                    <img src="/img/svg/check-circle-blue.svg" alt="Check" className="h-4 w-4" />
                                </span>
                                Sewa Mobil Jangka Panjang Bulanan
                            </li>
                            <li className="mb-2">
                                <span className="inline-block mr-2">
                                    <img src="/img/svg/check-circle-blue.svg" alt="Check" className="h-4 w-4" />
                                </span>
                                Gratis Antar - Jemput Mobil di Bandara
                            </li>
                            <li className="mb-2">
                                <span className="inline-block mr-2">
                                    <img src="/img/svg/check-circle-blue.svg" alt="Check" className="h-4 w-4" />
                                </span>
                                Layanan Airport Transfer / Drop In Out
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
