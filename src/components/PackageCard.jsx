export default function PackageCard({ name, desc, image, price, duration }) {
    const phoneNumber = "916281606422";

    const message = `Hello Himalayan Trails! I'm interested in the ${name} package (${duration}). Please share more details.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
        transition-all duration-300">

            {/* Package image */}
            <div className="h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Package details */}
            <div className="p-6">

                <p className="text-sm text-forest font-semibold">
                    {duration}
                </p>

                <h3 className="text-xl font-bold mt-2">
                    {name}
                </h3>

                <p className="text-gray-600 mt-3">
                    {desc}
                </p>

                <div className="mt-5 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Starting from
                    </p>

                    <p className="text-2xl font-bold text-forest mt-1">
                        ₹{price.toLocaleString("en-IN")}
                        <span className="text-sm font-normal text-gray-500">
                            {" "}/ person*
                        </span>
                    </p>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-forest text-white
                        py-3 rounded-full mt-6 hover:bg-green-800
                        transition-colors duration-300"
                    >
                        Enquire Now
                    </a>
                </div>

            </div>

        </div>
    );
}
