import { useState } from "react";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5">
                    <h2 className="sub-title font-semibold text-4xl">Frequently Asked Questions</h2>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="lg:w-3/5">
                    <div className="accordion" id="faqlist">
                        {faqItems.map((item, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-md my-3 border">
                                <button
                                    className={`w-full text-left px-4 py-3 font-semibold ${openIndex === index ? 'bg-gray-200' : 'bg-white'
                                        }`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.question}
                                </button>
                                <div
                                    className={`${openIndex === index ? 'block' : 'hidden'
                                        } p-4 bg-gray-100`}
                                >
                                    <p className="text-sm">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const faqItems = [
    {
        question: "Apa saja syarat yang dibutuhkan?",
        answer: "Syarat yang dibutuhkan adalah ..."
    },
    {
        question: "Berapa hari minimal sewa mobil lepas kunci?",
        answer: "Minimal sewa mobil lepas kunci adalah ..."
    },
    {
        question: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
        answer: "Minimal sebelumnya sabaiknya booking sewa"
    },
    {
        question: "Apakah Ada biaya antar-jemput?",
        answer: "Ada biaya antar jemput"
    },
    {
        question: "Bagaimana jika terjadi kecelakaan?",
        answer: "Ada asuransi"
    },
];

export default Faq;
