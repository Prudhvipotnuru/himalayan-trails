
import logo from '../assets/image.png';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Himalayan Trails logo"
                                className="w-12" />

                            <div>
                                <h3 className="text-xl font-bold">
                                    Himalayan Trails
                                </h3>
                                <p className="text-sm text-gray-400">
                                    EXPLORE THE HIMALAYAS
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-300 mt-5 max-w-sm">
                            Discover the beauty of Sikkim through
                            unforgettable journeys, adventures and
                            authentic local experiences.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-300">
                            <a href="#home" className="hover:text-gold">Home</a>
                            <a href="#destinations" className="hover:text-gold">Destinations</a>
                            <a href="#experiences" className="hover:text-gold">Experiences</a>
                            <a href="#packages" className="hover:text-gold">Packages</a>
                            <a href="#contact" className="hover:text-gold">Contact Us</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Get in Touch
                        </h3>

                        <div className="flex flex-col gap-3 text-gray-300">
                            <p>📍 Sikkim, India</p>
                            <a href="#contact" className="hover:text-gold">
                                WhatsApp Enquiries
                            </a>
                            <a href="#contact" className="hover:text-gold">
                                Send us an enquiry
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Himalayan Trails.
                        All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Demo website — sample content and packages.
                    </p>
                    <p className='mt-2 text-gray-300 font-semibold text-lg'>
                        Santhosh Potnuru
                    </p>
                </div>

            </div>

        </footer>
    );
}
