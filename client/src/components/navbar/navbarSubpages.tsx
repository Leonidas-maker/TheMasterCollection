import DarkModeSwitch from "./buttons/btnDarkModeSwitch";
import ChangeLng from "./buttons/btnChangeLng";
import BackLanding from "./buttons/btnBack";

const NavbarSubpages = () => {
    return (
        <div className="fixed w-16 m-0 flex flex-col opacity-100 text-white z-50">
            <BackLanding />
            <Divider />
            <DarkModeSwitch />
            <ChangeLng />
        </div>
    );
};

const Divider = () => <hr className="border opacity-40 border-gray-600 dark:border-gray-300 rounded-full mx-2" />;

export default NavbarSubpages;