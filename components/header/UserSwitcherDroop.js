//UserSwitcherDroop.js
//Саме випадаюче меню мови

// import { useContext, useRef, useEffect } from "react"
// import { ComponentContext } from "../../context/ComponentContext"
// import { useSession, signIn, signOut } from "next-auth"

const UserSwitcherDroop = (props) => {
  //   const { state } = useContext(ComponentContext)
  //   const { theme } = state
  //    const [session] = useSession()

  const loginToggle = (e) => {
    // setLangMenuOpen(!langMenuOpen)
    e.preventDefault();
    signIn();
  };
  const registrationToggle = (e) => {
    // setLangMenuOpen(!langMenuOpen)
    e.preventDefault();
    //  signOut()
  };

  const handleSignin = () => {
    console.log("UserSwitcherDroop.js/handleSignin");
  };

  return (
    // display: inline-block; //-(сам)Блок по ширині контенту
    <div className="absolute right-0 z-10 m-0 p-0">
      {/* <ul className="userSwitcherDroop__menu"> */}
      <ul className=" mx-2 inline-block rounded-lg border border-gray-300  bg-gray-200  p-1  drop-shadow-md dark:border-gray-300 dark:bg-gray-400 md:left-auto">
        <li className="hover:text-hMenuTextHov flex list-none items-center bg-hMenuBg p-1 text-sm font-normal text-hMenuText hover:bg-hMenuBgHov">
          {/* {session && (
            <a href="#" onClick={loginToggle} className="btn-signin">
              Sign out/Вийти
            </a>
          )}
          {!session && (
            <a href="#" onClick={handleSignin} className="btn-signin">
              Sign in/Вхід
            </a>
          )} */}
          <a
            href="#"
            onClick={handleSignin}
            className="userSwitcherDroop__dropdown__item-p"
          >
            Sing in / Вхід
          </a>
        </li>
        <li
          //   className="userSwitcherDroop__dropdown__item"
          className="hover:text-hMenuTextHover flex list-none items-center bg-hMenuBg p-1 text-sm font-normal text-hMenuText hover:bg-hMenuBgHov "
          onClick={registrationToggle}
        >
          {/* <a className="userSwitcherDroop__dropdown__item-p">Registration</a> */}
          <a className="hover:text-hMenuTextHover ml-2 flex items-center bg-hMenuBg p-0 text-hMenuText hover:bg-hMenuBgHov">
            Registration
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserSwitcherDroop;
