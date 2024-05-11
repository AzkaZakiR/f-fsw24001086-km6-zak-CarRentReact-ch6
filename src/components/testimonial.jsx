import React from "react";

const Testimonial = () => {
    return (
        <>
            <section className="testimonial bg-gray-100 py-8" id="testimonial">
                <div className="container">
                    <h2 className="sub-title testimonial-sub-title text-center">
                        Testimonial
                    </h2>
                    <p className="description testimonial-description text-center">
                        Berbagai review positif dari para pelanggan kami
                    </p>
                </div>
                <div className="owl-carousel owl-theme">
                    <div className="item testimonial-item">
                        <div className="flex">
                            <div className="w-1/4">
                                <img
                                    className="testimonial-profile h-20 w-20 object-cover rounded-full mx-auto"
                                    src="./assets/img/profile_picture_1.png"
                                    alt=""
                                />
                            </div>
                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="rate">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                width={16}
                                                height={15}
                                                viewBox="0 0 16 15"
                                                fill="#F9CC00"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="inline-block"
                                            >
                                                <path
                                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-text">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                    <div className="item testimonial-item">
                        <div className="flex">
                            <div className="w-1/4">
                                <img
                                    className="testimonial-profile h-20 w-20 object-cover rounded-full mx-auto"
                                    src="./assets/img/profile_picture_2.png"
                                    alt=""
                                />
                            </div>
                            <div className="w-3/4">
                                <div className="flex items-center">
                                    <div className="rate">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                width={16}
                                                height={15}
                                                viewBox="0 0 16 15"
                                                fill="#F9CC00"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="inline-block"
                                            >
                                                <path
                                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial-text">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod”
                                </p>
                                <p className="testimonial-name">John Dee 32, Bromo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
