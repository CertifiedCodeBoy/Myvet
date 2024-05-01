import WelcomeNav from "./WelcomeNav";
import imagi from "../Assets/slideshowImages/5.jpeg";

const Welcome = ({WelcomeNav: WelcomeNav}) => {
    return ( <>
        <WelcomeNav/>
        <div className="bg-primary h-[calc(100vh-75px)] flex justify-center items-center">
            <div className="text-white text-4xl font-bold">
                Welcome to the Home Page
            </div>
        </div>
        <div className="bg-logo bg-no-repeat h-screen flex justify-center items-center" style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            backgroundSize: "cover",
        }}>
            <div className="text-white text-4xl font-bold">
                Welcome to the Home Page
            </div>
        </div>
        <div className="bg-logo2 bg-no-repeat h-screen flex justify-center items-center" style={{
            backgroundAttachment: "scroll",
            backgroundPosition: "top",
            backgroundSize: "cover",
        }}>
            <div className="text-white text-4xl font-bold">
                Welcome to the Home Page
            </div>
        </div>
        <div className="bg-logo3 bg-no-repeat h-screen flex justify-center items-center" style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            backgroundSize: "cover",
        }}>
            <div className="container mx-auto p-8 flex flex-col gap-4">
                <div className="text-white text-6xl drop-shadow-2xl font-bold w-full">
                    Hollw
                </div>
            <div className=" grid grid-cols-2 grid-rows-2 gap-4">
                <div className="border border-black rounded-lg h-full col-span-1 row-span-2">
                    <div className="flex flex-col p-4 gap-8">
                        <p className="text-white text-2xl text-center font-semibold ">
                            Welcome nigga
                        </p>
                        <div className="relative rounded-lg overflow-hidden">
                            <img src={imagi} alt="" />
                            <div className="absolute bottom-0 bg-gradient-to-t from-gray-900 h-full w-full flex flex-col justify-end items-center">
                                <p className="text-white text-3xl mb-8 font-semibold">
                                    Hello black guy, nigga
                                </p>
                                <div>
                                <button className="text-black mr-4 mb-4 bg-slate-50 rounded-full w-20 h-8 ">hi</button>
                                <button className="text-black mr-4 mb-4 bg-slate-50 rounded-full w-20 h-8 ">hello</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-black rounded-lg col-span-1 row-span-1"></div>
                <div className="border border-black rounded-lg col-span-1 row-span-1"></div>
            </div>
            </div>
        </div>
    </> );
}
 
export default Welcome;