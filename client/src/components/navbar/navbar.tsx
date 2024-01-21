import DarkModeSwitch from "./buttons/btnDarkModeSwitch";
import ChangeLng from "./buttons/btnChangeLng";
import Imprint from "./buttons/btnImprint";

const Navbar = () => {
    return (
        <div className="fixed top-0 h-full w-16 m-0 flex flex-col opacity-100 text-white z-50">
            
            <DarkModeSwitch />
            <ChangeLng />
            <Imprint />
        </div>
    );
};

export default Navbar;