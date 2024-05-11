import React from "react";

const WhyUs = () => {
    return (
        <section className="py-8">
            <div className="container mt-4">
                <h2 className="sub-title text-4xl font-bold">Why Us?</h2>
                <p className="description my-4">Mengapa harus pilih Binar Car Rental?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="card bg-white p-4 flex-grow mb-4">
                            <img className="card-image h-16 w-16 mx-auto" src="/img/svg/thumbs-up-yellow.svg" alt="Icon Jempol Up" />
                            <p className="card-title-text text-center mt-4 font-semibold">Mobil Lengkap</p>
                            <p className="card-content-text text-center">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="card bg-white p-4 flex-grow">
                            <img className="card-image h-16 w-16 mx-auto" src="/img/svg/price.svg" alt="Icon harga" />
                            <p className="card-title-text text-center mt-4 font-semibold">Harga Murah</p>
                            <p className="card-content-text text-center">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="card bg-white p-4 flex-grow">
                            <img className="card-image h-16 w-16 mx-auto" src="/img/svg/clock.svg" alt="Icon clock" />
                            <p className="card-title-text text-center mt-4 font-semibold">Layanan 24 Jam</p>
                            <p className="card-content-text text-center">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="card bg-white p-4 flex-grow">
                            <img className="card-image h-16 w-16 mx-auto" src="/img/svg/professional.svg" alt="Icon Pro" />
                            <p className="card-title-text text-center mt-4 font-semibold">Sopir Profesional</p>
                            <p className="card-content-text text-center">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
