const Banner = ({ title, description, buttons = [], backgroundColor = "bg-[#9538E2]", className = "" }) => {
    return (
        <div className={`text-center ${backgroundColor} ${className}`}>
            <h1 className="text-5xl font-bold mt-28 mb-4 pt-10">
                {title}
            </h1>
            <p>
                {description}
            </p>
            <div className="flex justify-center gap-4 mt-3 mb-16">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`btn rounded-full mt-5 px-5 font-bold ${button.color || "text-[#9538E2]"}`}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
