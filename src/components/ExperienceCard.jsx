export default function ExperienceCard({ name, desc, image }) {
    return (
        <div className="relative h-96 rounded-2xl overflow-hidden group shadow-md">

            <img
                src={image}
                alt="exp image"
                className="w-full h-full object-cover object-[60%_center] group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            </div>

            {/* Text content goes here */}
            <div className="absolute text-white bottom-0 left-0 p-6">
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