export default function ExperienceCard({ name, desc, image }) {
    return (
        <div className="relative h-96 rounded-2xl overflow-hidden group shadow-md">

            <img
                src={image}
                alt="exp image"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80
            to-transparent pointer-events-none z-10">
            </div>

            {/* Text content goes here */}
            <div className="absolute text-white bottom-0 left-0 p-6 z-20">
                <h3 className="text-2xl font-bold">
                    {name}
                </h3>
                <p className="mt-3 text-white/90">
                    {desc}
                </p>
            </div>

        </div>
    );
}