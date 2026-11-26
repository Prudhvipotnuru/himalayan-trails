export default function DestinationCard(props) {
    const {name, imgCard, desc}=props;
    return (
        <>
            <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-72 overflow-hidden">
                    <img
                        src={imgCard}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                <div className="p-5">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-gray-600 mt-2">
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}