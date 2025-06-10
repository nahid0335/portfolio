import bannerImage from "../assets/IMG_0977.png"

const Banner = () => {
    return (
        <div className="main-container flex items-center">
            <div className="w-full flex justify-center">
                {/* text */}
                <div className="w-2/3 space-y-2 ms-10">
                    <h3 className="text-3xl font-semibold">
                        Hy, I am
                    </h3>
                    <h1 className="text-4xl font-bold">
                        Nahid Tamzid Hasan
                    </h1>
                    <h2 className="text-2xl">
                        And I am Full-stack Developer
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quam excepturi officia repellat possimus rerum, sit numquam exercitationem amet. Dolores, saepe.
                    </p>
                    <br />
                    <a className="px-3 py-2 bg-orange-500 shadow-lg rounded-full" href="/contact">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="w-full flex justify-center px-2 py-10">
                {/* image */}
                <img className="rounded-full shadow-lg aspect-square object-cover w-96" src={bannerImage} />
            </div>
        </div>
    );
};

export default Banner;
