import whiteLogo from "../Assets/whit_logo.png";
const WelcomeNav = () => {
  return (
    <>
      <nav className="bg-primary w-full h-20 relative top-0 p-4">
        <div>
          <div className="flex justify-between items-center h-full px-4">
            <div className="text-white text-2xl font-bold">{
                <img src={whiteLogo} alt="logo" className="h-20 absolute top-0" />
            }</div>
            <div className="flex items-center">
              <button className="text-white text-lg font-semibold mr-4">
                Sign In
              </button>
              <button className="bg-white text-slate-500 px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default WelcomeNav;
