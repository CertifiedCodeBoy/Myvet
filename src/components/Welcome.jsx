import { Link } from "react-router-dom";
import imagi from "../Assets/slideshowImages/5.jpeg";
import logo from "../Assets/whit_logo.png";

const Welcome = () => {
  return (
    <>
      <div
        className="relative bg-no-repeat h-screen flex justify-center items-center hover-effect"
        style={{
          backgroundImage: `url(${imagi})`,
          backgroundAttachment: "scroll",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-500"></div>
        <div className="absolute top-5 left-5 z-10">
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="w-20" />{" "}
          </Link>
        </div>
        <div className="text-container left-text shadow-down z-10">
          <div className="text-content">
            <h2 className="text-4xl mb-4 p-8 text-center">
              Myvet: Your Premier Ecommerce Destination
            </h2>
            <p className="text-lg p-4">
              At Myvet, we redefine ecommerce by empowering sellers with
              innovative tools and delighting buyers with seamless shopping
              experiences. Join our vibrant community today and explore a vast
              array of products tailored to meet your needs.
            </p>
          </div>
        </div>
        <div className="text-container right-text shadow-down z-10">
          <div className="text-content">
            <h2 className="text-4xl mb-4 p-8 text-center">
              Shop Smart, Sell Fast, Experience Excellence
            </h2>
            <p className="text-lg p-4 text-left">
              Our platform is designed to provide unparalleled support to
              sellers and an exceptional shopping journey for buyers. With
              Myvet, you can shop smart, sell fast, and enjoy the pinnacle of
              ecommerce excellence. Discover the difference with us.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .text-container {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        .left-text {
          left: 0;
          transform: translateX(-100%) translateY(-50%);
        }
        .right-text {
          right: 0;
          text-align: right;
          transform: translateX(100%) translateY(-50%);
        }
        .hover-effect:hover .left-text {
          opacity: 1;
          transform: translateX(0) translateY(-50%);
        }
        .hover-effect:hover .right-text {
          opacity: 1;
          transform: translateX(0) translateY(-50%);
        }
        .hover-effect:hover .overlay {
          opacity: 0.5;
        }
        .text-content {
          color: white;
          font-size: 1.75rem;
          font-weight: bold;
        }
        .text-content h2 {
          font-size: 2.5rem;
        }
        .text-content p {
          font-size: 1.25rem;
          font-weight: normal;
        }
        .shadow-down {
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default Welcome;
