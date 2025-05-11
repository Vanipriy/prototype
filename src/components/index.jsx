import trendingCollections from "/src/data/levis.json";
import bestSellers from "/src/data/bestsellers.json";
import backpack from "/src/data/backpack.json";
import latestdrop from "/src/data/latestdrop.json";
import fitCollections from "/src/data/fitCollections.json";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const heroSlides = [
    {
        image: "/bg.png",
        heading: "LEVI'S® X PRINCESS MONONOKE",
        subheading: "Oh, this place is magical",
        description:
            "Awaken your inner forest spirit. Our collaboration with the epic animated feature film pays tribute to the enchanting world created by Studio Ghibli.",
    },
    {
        image: "public/Background.png",
        heading: "NEW COLLECTION OUT NOW",
        subheading: "Discover the Drop",
        description:
            "From legendary stories to legendary style. Dive into our latest Studio Ghibli inspired release.",
    },
    {
        image: "public/Background.png",
        heading: "",
        subheading: "",
        description:
            "",
    },
];


const FreeShippingBanner = () => {
    const text = "TRENDING COLLECTIONS";
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const { image, heading, subheading, description } = heroSlides[currentSlide];


    return (
        <div className="w-screen">
            <div className="bg-[#D6E4FC] text-center py-2 px-2">
                <p className="text-bold md:text-xs uppercase tracking-wide mb-1">
                    14-31 AUG
                </p>
                <p className="text-xs uppercase tracking-widest">
                    AWESOME AUGUST
                </p>
                <h2 className="md:text-3xl font-bold mt-2 text-black">
                    FREE SHIPPING SITEWIDE
                </h2>
                <h4 className="mt-1">No min. spend required</h4>
                <div className="mt-4 flex flex-col md:flex-row md:justify-center items-center md:space-x-4 space-y-2 md:space-y-0">
                    <button className="border border-black text-black px-4 py-1.5 text-xs md:px-6 md:py-2 md:text-sm transition">
                        SHOP MEN
                    </button>
                    <button className="border border-black text-black px-4 py-1.5 text-xs md:px-6 md:py-2 md:text-sm transition">
                        SHOP WOMEN
                    </button>
                    <button className="border border-black text-black px-4 py-1.5 text-xs md:px-6 md:py-2 md:text-sm transition">
                        SHOP ALL
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                    *Valid on all orders. Discount auto-applied at checkout.
                </p>
                <a href="#" className="border-b-2 border-black hover:border-b-4 transition duration-200">
                    Terms & Conditions
                </a>
                {" "}
                apply.
            </div>
            <div className="bg-white h-10"></div>

            <div className="relative">
                <div
                    className="relative bg-cover bg-center bg-no-repeat text-white h-[600px] flex items-center justify-center transition-all duration-700"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-30 z-0" />
                    <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
                        <img
                            src="/Prototype13.png"
                            alt="Levi's x Princess Mononoke"
                            className="mx-auto w-auto mb-4"
                        />
                        <h4 className="text-xs uppercase tracking-widest">{subheading}</h4>
                        <h2 className="text-4xl font-bold mt-2">{heading}</h2>
                        <p className="text-sm mt-4 leading-relaxed">{description}</p>
                        <button className="border border-black text-black bg-white px-6 py-2 text-sm hover:bg-gray-100 transition mt-5">
                            Shop The Collection
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4 space-x-4">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-red-600 w-10" : "bg-gray-300 w-6"
                                }`}
                        />
                    ))}
                </div>
            </div>
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-6 inline-block">
                    {text.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.05,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
                        HOODIES & SWEATSHIRTS
                    </button>
                    <button className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
                        JEANS
                    </button>
                    <button className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
                        BACKPACKS
                    </button>
                    <button className="border border-gray-800 px-4 py-2 text-sm hover:bg-gray-100 transition">
                        TRUCKERS & SHERPAS
                    </button>
                </div>
            </div>
            <div className="text-center py-12 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {trendingCollections.map((item, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[386x] h-[300px] object-cover"
                            />
                            <p className="mt-2 font-semibold">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-white max-w-6xl mx-auto">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 leading-tight">
                        GET A <br /> LEVI'S® MEN'S HERITAGE BELT
                    </h1>
                    <h4 className="text-lg font-bold mt-4">
                        WITH A MIN. PURCHASE OF <span className="text-black">$220</span>
                    </h4>
                    <div className="relative inline-block">
                        <svg
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-full"
                            viewBox="0 0 300 40"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,20 Q30,0 60,20 T120,20 T180,20 T240,20 T300,20"
                                stroke="yellow"
                                strokeWidth="20"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ filter: "blur(1px)" }}
                            />
                        </svg>
                        <p className="relative font-bold text-sm uppercase text-black px-1">
                            WHILE STOCKS LAST.
                        </p>
                    </div>


                    <p className="text-sm text-gray-600 mt-2">
                        Auto-applied at checkout. <a href="#" className="underline">Terms & Conditions</a> apply.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                        src="/Belt.png"
                        alt="Levi's Men's Heritage Belt"
                        className="w-[500px] h-auto object-contain"
                    />
                </div>
            </div>
            <div className="bg-red-700 text-white text-center py-8 px-6">
                <p className="uppercase text-xs tracking-wide">Special Offers ››</p>
                <h2 className="text-3xl font-bold mt-2">40% OFF SELECTED STYLES</h2>
                <p className="text-sm mt-1">
                    Treat yourself to some of our favourite styles.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <button className="border border-white bg-white text-black px-4 py-2 text-sm transition">
                        SHOP MEN
                    </button>
                    <button className="border border-white bg-white text-black px-4 py-2 text-sm transition">
                        SHOP WOMEN
                    </button>
                    <button className="border border-white bg-white text-black px-4 py-2 text-sm transition">
                        SHOP KIDS
                    </button>
                </div>
            </div>
            <div className="text-center py-12 md:px-20">
                <h2 className="text-2xl font-bold mb-6">BEST SELLERS</h2>
                <div className="overflow-x-auto">
                    <div className="flex gap-6 px-4">
                        {bestSellers.map((product, index) => (
                            <div key={index} className="min-w-[150px] text-left">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-[150px] h-[200px] object-cover"
                                />
                                <p className="text-sm mt-2 truncate">{product.name}</p>
                                <p className="text-sm font-semibold">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="mx-2 text-xl font-bold hover:opacity-70">←</button>
                    <button className="mx-2 text-xl font-bold hover:opacity-70">→</button>
                </div>
            </div>
            <div className="flex flex-col md:px-20 md:flex-row w-full h-auto">
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10">
                    <h2 className="text-red-700 font-bold text-lg">LEVI’S<sup>®</sup> REDTAB</h2>
                    <h1 className="text-2xl md:text-3xl font-extrabold mt-2 leading-tight">
                        LIVE NOW: <br /> PLANT-BASED 501<sup>®</sup> ORIGINAL JEANS
                    </h1>
                    <p className="text-gray-700 mt-4">
                        Our plant-based 501<sup>®</sup> Originals are made from 97% bio-based content. These jeans are made with
                        organically grown cotton, plant-based indigo dye, ink made from wood waste, and even a bio-based back patch
                        that contains no petrochemicals or plastics.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Available online and in-store only at Levi’s<sup>®</sup> ION Orchard.
                    </p>
                    <div className="mt-4">
                        <button className="underline text-black px-4 py-2 text-sm uppercase tracking-wide mr-2 hover:bg-black hover:text-white transition">
                            SHOP NOW
                        </button>
                        <button className="underline text-gray-700 px-4 py-2 text-sm uppercase tracking-wide hover:bg-gray-200 transition">
                            STORE LOCATOR
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="/Image12.png"
                        alt="Plant-Based 501® Original Jeans"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex px-6 md:px-20 flex-col md:flex-row w-full h-auto md:mt-0">
                <div className="w-full md:w-1/2">
                    <img
                        src="/Levi.png"
                        alt="Levi's Performance"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10">
                    <h2 className="text-lg font-bold">+LEVI’S<sup>®</sup> COOL</h2>
                    <p className="text-gray-700 mt-2">
                        Advance Fabrics. Innovative Technology. Designed to keep you cool on hot days.
                    </p>
                    <button className="mt-2 text-black text-sm uppercase underline">
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className="text-center py-12 md:px-20">
                <h2 className="text-2xl font-bold mb-3">BACKPACKS</h2> {/* Reduced margin */}
                <div className="flex flex-wrap justify-center gap-2"> {/* Reduced gap */}
                    <button className="border border-black px-4 py-2 text-sm transition">
                        SHOP NOW
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <div className="flex gap-6 px-4">
                        {backpack.map((item, index) => (
                            <div key={index} className="min-w-[150px] text-left">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-[200px] h-[250px] object-cover mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="mx-2 text-xl font-bold hover:opacity-70">←</button>
                    <button className="mx-2 text-xl font-bold hover:opacity-70">→</button>
                </div>
            </div>
            <div className="text-center md:px-20 py-6">
                <h2 className="text-2xl font-bold mb-3">LATESET DROP</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    <button className="border bg-black text-white px-4 py-2 text-sm  transition">
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className="text-center md:px-20 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {latestdrop.map((item, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-64 h-48 object-cover mx-auto"
                            />
                            <p className="mt-2 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center md:px-20 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                    {fitCollections.map((item, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[386x] h-[300px] object-cover"
                            />
                            <p className="mt-2 font-semibold">LEVI’S<sup>®</sup>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="font-sans">
                <div className="bg-gray-300 text-center py-6 px-4">
                    <h1 className="text-2xl font-bold text-red-700">LEVI'S<span className="text-black">REDTAB</span></h1>
                    <h3 className="text-2xl font-bold">MEMBER PROGRAM</h3>
                    <p className="text-sm text-gray-700 max-w-2xl mx-auto mt-2">
                        Membership is free and open to all. Your Levi’s® Red Tab™ member program rewards you with exclusive access to products, VIP events, and offers, all when you shop on <span className="underline">Levi.com.sg</span> and in-store.
                    </p>
                    <div className="mt-4 space-x-4">
                        <button className="underline px-4 py-2 text-sm font-medium transition underline">
                            SIGN UP
                        </button>
                        <button className="underline px-4 py-2 text-sm font-medium transition underline">
                            MEMBER EXCLUSIVES
                        </button>
                    </div>
                </div>
                <div className="bg-blue-900 text-center text-white py-8 px-4">
                    <p className="text-sm tracking-wide uppercase">LEVI'S® SALE</p>
                    <h2 className="text-3xl font-bold mt-2">30% OFF SALE STYLES</h2>

                    <div className="mt-4 flex flex-col md:flex-row md:justify-center items-center md:space-x-4 space-y-2 md:space-y-0">
                        <button className="border border-white bg-white text-blue-900 px-4 py-2 text-sm transition">
                            SHOP MEN
                        </button>
                        <button className="border border-white bg-white text-blue-900 px-4 py-2 text-sm transition">
                            SHOP WOMEN
                        </button>
                        <button className="border border-white bg-white text-blue-900 px-4 py-2 text-sm transition">
                            SHOP ALL
                        </button>
                    </div>
                    <p className="mt-4 text-xs opacity-80">
                        Online only. All sales are final. <a href="#" className="underline">Terms & Conditions</a> apply.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-8">
                    <div className="text-center">
                        <img src="/Prototype6.png" alt="Shop New Arrivals" className="w-[286px] h-[300px] object-cover mx-auto" />
                        <p className="mt-2 text-sm font-medium uppercase">SHOP NEW ARRIVALS</p>
                    </div>
                    <div className="text-center">
                        <img src="/Prototype7.png" alt="Shop Men's" className="w-[286px] h-[300px] object-cover mx-auto" />
                        <p className="mt-2 text-sm font-medium uppercase">SHOP MEN'S</p>
                    </div>
                    <div className="text-center">
                        <img src="/Prototype8.png" alt="Shop Women's" className="w-[286px] h-[300px] object-cover mx-auto" />
                        <p className="mt-2 text-sm font-medium uppercase">SHOP WOMEN'S</p>
                    </div>
                </div>
            </div>
            <div className="font-sans">
                <div className="bg-gray-100 py-10 px-6 md:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="md:w-3/5 text-center">
                            <h2 className="text-xl font-bold uppercase text-center md:text-left">#LIVEINLEVIS</h2>
                            <p className="text-sm text-gray-600 mt-1 text-center md:text-left">
                                Tag @levis_sea on Instagram for a chance to be featured.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                                <img src="/Prototype9.png" alt="Prototype9" className="w-32 h-32 object-cover" />
                                <img src="/Prototype10.png" alt="Prototype10" className="w-32 h-32 object-cover" />
                                <img src="/Prototype11.png" alt="Prototype11" className="w-32 h-32 object-cover" />
                                <img src="/Prototype12.png" alt="Prototype12" className="w-32 h-32 object-cover" />
                            </div>
                        </div>
                        <div className="md:w-2/5 bg-white p-6 shadow-lg">
                            <h2 className="text-lg font-bold uppercase">GET THE ORIGINAL STYLE INSPIRATION AND MORE BENEFITS!</h2>
                            <button className="mt-4 bg-black text-white px-6 py-2 text-sm uppercase hover:bg-gray-800 transition">
                                Sign Up Now
                            </button>
                            <p className="text-xs text-gray-600 mt-2">
                                By clicking the button above, you are opting to become a Levi’s® Red Tab™ member and agree to the Levi’s®
                                <span className="underline"> Privacy Policy</span> and
                                <span className="underline"> Terms & Conditions.</span>
                            </p>
                            <div className="flex justify-end mt-4">
                                <img src="/Prototype14.png" alt="Payment Options" className="w-56" />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-gray-100 py-6 px-6 text-sm md:px-10">
                    <div className="flex flex-col md:flex-row md:items-start text-xs gap-40">
                        <div>
                            <h3 className="font-extrabold">Support</h3>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Find A Store</a></li>
                                <li><a href="#">Track Order</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-extrabold">Company</h3>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-extrabold">Quick Links</h3>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li><a href="#">Levi’s® Red Tab™ Program</a></li>
                                <li><a href="#">Find a Store</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 py-4 px-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-xs text-gray-700 gap-4">
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-center md:text-left">
                                <p className="hover:underline cursor-pointer">Sitemap</p>
                                <p className="hover:underline cursor-pointer">Privacy Policy</p>
                                <p className="hover:underline cursor-pointer">Terms of Use</p>
                                <p>© 2024 Levi Strauss & Co</p>
                            </div>
                            <div className="flex justify-center md:justify-end gap-4 text-base">
                                <a href="#" aria-label="Instagram" className="hover:text-black">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="Facebook" className="hover:text-black">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="YouTube" className="hover:text-black">
                                    <FaYoutube />
                                </a>
                                <a href="#" aria-label="Twitter" className="hover:text-black">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default FreeShippingBanner;
