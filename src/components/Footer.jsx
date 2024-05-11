import React from "react";

const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-5 my-5 border-t">
                <div className="col mb-3">
                    <ul className="flex flex-col">
                        <li className="my-4"><a href="#" className="text-muted">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</a></li>
                        <li className="my-4"><a href="#" className="text-muted">binarcarrental@gmail.com</a></li>
                        <li className="my-4"><a href="#" className="text-muted">081-233-334-808</a></li>
                    </ul>
                </div>

                <div className="col mb-3"></div>

                <div className="col mb-3">
                    <ul className="flex flex-col">
                        <li className="mb-2"><a href="#" className="text-muted">Our services</a></li>
                        <li className="mb-2"><a href="#" className="text-muted">Why Us</a></li>
                        <li className="mb-2"><a href="#" className="text-muted">Testimonial</a></li>
                        <li className="mb-2"><a href="#" className="text-muted">FAQ</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <ul className="flex flex-col">
                        <li className="mb-2"><a href="#" className="text-muted">Connect With us</a></li>
                        <ul className="flex list-none mb-4">
                            <li className="ms-2"><a className="text-dark" href="#"><img src="./Asset/icon_facebook.png" alt="" /></a></li>
                            <li className="ms-2"><a className="text-dark" href="#"><img src="./Asset/icon_instagram.png" alt="" /></a></li>
                            <li className="ms-2"><a className="text-dark" href="#"><img src="./Asset/icon_instagram.png" alt="" /></a></li>
                            <li className="ms-2"><a className="text-dark" href="#"><img src="./Asset/icon_mail.png" alt="" /></a></li>
                            <li className="ms-2"><a className="text-dark" href="#"><img src="./Asset/icon_twitch.png" alt="" /></a></li>
                        </ul>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className="mb-4"> Copyright Binar 2022</h5>
                    <img src="./Asset/Rectangle 74.png" alt="" />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
