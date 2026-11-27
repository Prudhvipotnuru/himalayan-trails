import { useState } from 'react'
import logo from './assets/image.png';
import heroImage from './assets/dhruvin-pandya.webp';
import northsikkimcard from './assets/northSikkimCard.webp';
import southSikkimCard from './assets/southSikkimCard.webp';
import westSikkimCard from './assets/westSikkimCard.webp';
import eastSikkimCard from './assets/eastSikkimCard.webp';
import DestinationCard from './components/DestinationCard';
import ExperienceCard from './components/ExperienceCard';
import adventureImage from './assets/adventure.jpg';
import pilgrimageImage from './assets/piligrimage.webp';
import ruralImage from './assets/rural.webp';
import PackageCard from './components/PackageCard';
import Footer from './components/Footer';
function App() {
    const [isMenu, setIsMenu] = useState(false);
    const arr = [
        {
            name: "North Sikkim",
            desc: "Explore alpine lakes, snow-covered mountains and scenic valleys.",
            imgCard: northsikkimcard
        },
        {
            name: "South Sikkim",
            desc: "Discover cultural landmarks, peaceful hill towns and beautiful landscapes.",
            imgCard: southSikkimCard
        },
        {
            name: "East Sikkim",
            desc: "Experience mountain passes, glacial lakes and stunning Himalayan views.",
            imgCard: eastSikkimCard
        },
        {
            name: "West Sikkim",
            desc: "Explore monasteries, heritage villages and breathtaking Kanchenjunga views.",
            imgCard: westSikkimCard
        }
    ];
    const experiences = [
        {
            name: "Adventure Tourism",
            desc: "Experience trekking, mountain adventures and thrilling outdoor activities.",
            image: adventureImage
        },
        {
            name: "Pilgrimage Tourism",
            desc: "Explore peaceful monasteries, sacred places and spiritual destinations.",
            image: pilgrimageImage
        },
        {
            name: "Rural Tourism",
            desc: "Discover traditional villages, local culture and authentic homestays.",
            image: ruralImage
        }
    ];
    const packages = [
        {
            name: "North Sikkim Escape",
            duration: "4 Days / 3 Nights",
            price: 8999,
            image: northsikkimcard,
            desc: "Explore Gurudongmar Lake, scenic valleys and snow-covered mountains."
        },
        {
            name: "East Sikkim Explorer",
            duration: "3 Days / 2 Nights",
            price: 6499,
            image: eastSikkimCard,
            desc: "Discover Tsomgo Lake, mountain passes and beautiful landscapes."
        },
        {
            name: "Sikkim Grand Tour",
            duration: "6 Days / 5 Nights",
            price: 12999,
            image: westSikkimCard,
            desc: "Experience monasteries, picturesque villages and Himalayan views."
        }
    ];
    const [formData, setFormData] = useState({
        fullName: '',
        travellers: '',
        destination: '',
        travelDate: '',
        message: ''
    });
    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();

        const phoneNumber = "917989737195";

        const message = `Hello Himalayan Trails!

I'd like to enquire about a trip.

Name: ${formData.fullName}
Number of Travellers: ${formData.travellers}
Destination: ${formData.destination}
Travel Date: ${formData.travelDate}

Additional Message:
${formData.message || "Not provided"}
        `;

        const whatsappUrl =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
    return (
        <div className="min-h-screen bg-cream" id="home">
            <nav className="bg-charcoal text-white">
                <div className="mx-auto px-6 py-6 max-w-7xl flex flex-col md:flex-row 
                justify-between items-center rounded-lg">
                    <div className='flex justify-between w-full'>
                        <div className="flex gap-5">
                            <img src={logo} alt="photo not available"
                                className="w-10" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">Himalayan Trails</span>
                                <span className="font-medium">EXPLORE THE HIMALAYAS</span>
                            </div>
                        </div>
                        <button
                            type='button'
                            aria-label={isMenu ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMenu}
                            className='md:hidden text-2xl focus-visible:ring-4 focus-visible:ring-gold'
                            onClick={() => setIsMenu(!isMenu)}>{isMenu ? '✕' : '☰'}</button>
                    </div>
                    <div className="hidden md:flex space-x-3 items-center">
                        <a href="#home" className="hover:text-gold transition-colors duration-300">Home</a>
                        <a href="#destinations" className="hover:text-gold transition-colors duration-300">Destinations</a>
                        <a href="#packages" className="hover:text-gold transition-colors duration-300">Packages</a>
                        <a href="#experiences" className="hover:text-gold transition-colors duration-300">Experiences</a>
                        <a href="#contact" className="rounded-full bg-forest px-6 py-3 hover:bg-green-800 
                    transition-colors duration-300 hover:scale-105 cursor-pointer w-38">Plan your trip</a>
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenu
                        ? 'max-h-72 opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-4 bg-charcoal text-white px-6 py-5">
                        <a href="#home" onClick={() => setIsMenu(false)}>Home</a>
                        <a href="#destinations" onClick={() => setIsMenu(false)}>Destinations</a>
                        <a href="#experiences" onClick={() => setIsMenu(false)}>Experiences</a>
                        <a href="#packages" onClick={() => setIsMenu(false)}>Packages</a>
                        <a href="#contact" onClick={() => setIsMenu(false)}>Plan Your Trip</a>
                    </div>
                </div>
            </nav>

            <section
                className="relative min-h-[85vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
                </div>

                {/* Hero content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-0 w-full">

                    <p className="text-gold font-semibold tracking-widest uppercase mb-4">
                        Discover the Himalayas
                    </p>

                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
                        Find Your Next Himalayan Escape
                    </h1>

                    <p className="text-white/90 text-lg mt-6 max-w-xl">
                        Explore breathtaking mountains, peaceful valleys and
                        unforgettable journeys through the beautiful landscapes
                        of Sikkim.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <a className="bg-forest text-white px-8 py-4 rounded-full
                     hover:bg-green-800 transition-all duration-300
                     focus-visible:ring-4 focus-visible:ring-gold"
                            href="#packages">
                            Explore Packages
                        </a>

                        <a href='#contact'
                            className="border border-white text-white px-8 py-4 
                    rounded-full hover:bg-white hover:text-charcoal 
                    focus-visible:ring-4 focus-visible:ring-gold
                    transition-all duration-300">
                            Contact Us
                        </a>

                    </div>

                </div>

            </section>
            <section className="py-20 px-6 bg-cream" id="destinations">

                <div className="max-w-7xl mx-auto">

                    {/* Section heading */}
                    <div className="text-center mb-12">
                        <p className="text-forest font-semibold tracking-widest uppercase">
                            Explore Sikkim
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Discover Our Destinations
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            From breathtaking mountain landscapes to peaceful villages,
                            discover the beauty of every corner of Sikkim.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {arr.map(obj => (
                            <DestinationCard
                                key={obj.name}
                                {...obj}
                            />
                        ))}
                    </div>

                </div>

            </section>

            <section className="py-20 px-6 bg-light-green" id="experiences">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-forest font-semibold tracking-widest uppercase">
                            Discover Experiences
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Experiences Beyond Travel
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Discover Sikkim through thrilling adventures,
                            spiritual journeys and authentic village experiences.
                        </p>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {experiences.map((exp) => (
                            <ExperienceCard
                                key={exp.name}
                                {...exp}
                            />
                        ))}
                    </div>

                </div>

            </section>
            <section className='py-20 px-6 bg-cream' id="packages">
                <div className='max-w-7xl mx-auto'>
                    <div className="text-center mb-12">

                        <p className="text-forest font-semibold tracking-widest uppercase">
                            Find Your Perfect Journey
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Popular Tour Packages
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Explore our sample travel packages and discover
                            unforgettable experiences across the beautiful landscapes of Sikkim.
                        </p>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {packages.map((pack) => (
                            <PackageCard
                                key={pack.name}
                                {...pack}
                            />
                        ))}
                    </div>
                </div>

            </section>

            <section id="contact" className="py-20 px-6 bg-light-green">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-forest font-semibold tracking-widest uppercase">
                            Get In Touch
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Let's Plan Your Himalayan Journey
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Have a trip in mind? Get in touch with us
                            and let's create an unforgettable Himalayan experience.
                        </p>

                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                        {/* Left: Contact information */}
                        <div className="bg-charcoal text-white rounded-2xl p-8">

                            <h3 className="text-2xl font-bold">
                                Get in Touch
                            </h3>

                            <p className="text-gray-300 mt-3">
                                Have questions about your next Himalayan adventure?
                                We'd love to hear from you.
                            </p>

                            <div className="mt-8 space-y-6">

                                {/* WhatsApp */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-forest p-3 rounded-full">
                                        <span className="text-xl">📱</span>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">WhatsApp Enquiries</h4>
                                        <p className="text-gray-300 text-sm">
                                            7989737195
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-forest p-3 rounded-full">
                                        <span className="text-xl">✉️</span>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <p className="text-gray-300 text-sm">
                                            prudhvipotnuru@zohomail.in
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-forest p-3 rounded-full">
                                        <span className="text-xl">📍</span>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">Travel Region</h4>
                                        <p className="text-gray-300 text-sm">
                                            Sikkim, India
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Right: Enquiry form */}
                        <form
                            className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-5"
                            onSubmit={handleSubmit}
                        >

                            <h3 className="text-2xl font-bold mb-6">
                                Plan Your Trip
                            </h3>

                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="fullName"
                                    className="font-medium text-sm"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="border border-gray-300 rounded-lg px-4 py-3
                                    focus:outline-none focus:ring-2 focus:ring-forest"
                                    required
                                />

                                <label
                                    htmlFor="travellers"
                                    className="font-medium text-sm"
                                >
                                    Number of Travellers
                                </label>

                                <input
                                    type="number"
                                    id="travellers"
                                    name="travellers"
                                    value={formData.travellers}
                                    onChange={handleChange}
                                    min='1'
                                    step='1'
                                    placeholder="Enter number of travellers"
                                    className="border border-gray-300 rounded-lg px-4 py-3
                                    focus:outline-none focus:ring-2 focus:ring-forest"
                                    required
                                />

                            </div>
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="destination"
                                    className="font-medium text-sm"
                                >
                                    Preferred Destination
                                </label>

                                <select
                                    id="destination"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-300 rounded-lg px-4 py-3
                                    focus:outline-none focus:ring-2 focus:ring-forest"
                                >
                                    <option value="" disabled>
                                        Select your destination
                                    </option>

                                    <option value="North Sikkim">North Sikkim</option>
                                    <option value="South Sikkim">South Sikkim</option>
                                    <option value="East Sikkim">East Sikkim</option>
                                    <option value="West Sikkim">West Sikkim</option>
                                    <option value="Entire Sikkim">Explore Entire Sikkim</option>
                                    <option value="Not decided">Not decided yet</option>

                                </select>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <label
                                    htmlFor="travelDate"
                                    className="font-medium text-sm"
                                >
                                    Travel Date
                                </label>

                                <input
                                    type="date"
                                    id="travelDate"
                                    name="travelDate"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    placeholder="Enter your travel date"
                                    className="border border-gray-300 rounded-lg px-4 py-3
                                    focus:outline-none focus:ring-2 focus:ring-forest"
                                    required
                                />

                            </div>
                            <div className="flex flex-col gap-2">

                                <label
                                    htmlFor="message"
                                    className="font-medium text-sm"
                                >
                                    Additional Message
                                    <span className="text-gray-500 font-normal">
                                        {" "}(Optional)
                                    </span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    onChange={handleChange}
                                    value={formData.message}
                                    placeholder="Tell us about your travel preferences..."
                                    className="border border-gray-300 rounded-lg px-4 py-3
                                    focus:outline-none focus:ring-2 focus:ring-forest
                                    resize-none"
                                />

                            </div>
                            <button
                                type="submit"
                                className="w-full bg-forest text-white py-4 rounded-full
                            font-semibold hover:bg-green-800 transition-colors duration-300
                            focus-visible:ring-2 focus-visible:ring-gold"

                            >
                                Send Enquiry
                            </button>


                        </form>

                    </div>

                </div>

            </section >

            <Footer/>



        </div >
    )
}

export default App
