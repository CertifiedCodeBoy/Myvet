import WelcomeNav from "./WelcomeNav";
import imagi from "../Assets/slideshowImages/5.jpeg";
import Featured from "./Featured";

const Welcome = ({WelcomeNav: WelcomeNav}) => {
    return ( <>
        <WelcomeNav/>
        <div className="bg-primary h-[calc(100vh-75px)] flex justify-center items-center">
            <div className="text-white text-4xl font-bold">
                Welcome to the Home Page
            </div>
        </div>
        <div className="bg-logo bg-no-repeat h-screen flex justify-center items-center mx-auto" style={{
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            backgroundSize: "cover",
            aspectRatio: "16/9",
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
        <div className="bg-logo3 bg-no-repeat h-screen flex justify-center items-center " style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            backgroundSize: "cover",
        }}>
            <div className="container mx-auto p-8 flex flex-col">
                <div className="text-white text-6xl drop-shadow-2xl font-bold w-full mb-4">
                    Hello
                </div>
            <div className="">
                
                <div className=" rounded-lg">
                    
                <div className="text-white text-4xl drop-shadow-2xl font-bold w-full">
                    Try this 
                </div>
                    <Featured direction={"row"}/>
                </div>
            </div>
            </div>
        </div>
    </> );
}
 
export default Welcome;