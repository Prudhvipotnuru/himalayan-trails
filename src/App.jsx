import { useState } from 'react'
import logo from './assets/image.png';
import heroImage from './assets/dhruvin-pandya.jpg';
import northsikkimcard from './assets/northsikkimcard.jpg';
import southSikkimCard from './assets/southSikkimCard.jpg';
import westSikkimCard from './assets/westSikkimCard.jpg';
import eastSikkimCard from './assets/eastSikkimCard.jpg';
import DestinationCard from './components/DestinationCard';
import ExperienceCard from './components/ExperienceCard';
import adventureImage from './assets/adventure.jpg';
import pilgrimageImage from './assets/piligrimage.jpg';
import ruralImage from './assets/rural.jpg';
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
    return (
        <div className="min-h-screen bg-cream">
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
                        <span className="hover:text-gold transition-colors duration-300">Home</span>
                        <span className="hover:text-gold transition-colors duration-300">Destinations</span>
                        <span className="hover:text-gold transition-colors duration-300">Packages</span>
                        <span className="hover:text-gold transition-colors duration-300">About</span>
                        <button className="rounded-full bg-forest px-6 py-3 hover:bg-green-800 
                    transition-colors duration-300 hover:scale-105 cursor-pointer w-38">Plan your trip</button>
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenu
                        ? 'max-h-72 opacity-100'
                        : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="flex flex-col gap-4 bg-charcoal text-white px-6 py-5">
                        <a href="#" onClick={() => setIsMenu(false)}>Home</a>
                        <a href="#" onClick={() => setIsMenu(false)}>Destinations</a>
                        <a href="#" onClick={() => setIsMenu(false)}>Packages</a>
                        <a href="#" onClick={() => setIsMenu(false)}>About</a>
                        <a href="#" onClick={() => setIsMenu(false)}>Plan Your Trip</a>
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

                        <button className="bg-forest text-white px-8 py-4 rounded-full
                     hover:bg-green-800 transition-all duration-300
                     focus-visible:ring-4 focus-visible:ring-gold">
                            Explore Packages
                        </button>

                        <button className="border border-white text-white px-8 py-4 
                    rounded-full hover:bg-white hover:text-charcoal 
                    focus-visible:ring-4 focus-visible:ring-gold
                    transition-all duration-300">
                            Contact Us
                        </button>

                    </div>

                </div>

            </section>
            <section className="py-20 px-6 bg-cream">

                <div className="max-w-7xl mx-auto">

                    {/* Section heading */}
                    <div className="text-center mb-12">
                        <p className="text-forest font-semibold tracking-widest uppercase mt-10">
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

            <section className="py-20 px-6 bg-light-green">

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


        </div>
    )
}

export default App
