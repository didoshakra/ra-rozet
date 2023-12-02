//UserMenuDroop.js
//Саме випадаюче меню мови

// import { useContext, useRef, useEffect } from "react"
// import { ComponentContext } from "../../context/ComponentContext"
// import { useSession, signIn, signOut } from "next-auth"


const UserMenuDroop = ({ setUserMenuOpen }) => {
  //   const { state } = useContext(ComponentContext)
  //    const [session] = useSession()

  const loginToggle = (e) => {
    // setLangMenuOpen(!langMenuOpen)
    e.preventDefault();
    // signIn();
     setUserMenuOpen(false);
  };
  const registrationToggle = (e) => {
    e.preventDefault();
    //  signOut()
     setUserMenuOpen(false);
  };

  const handleSignin = () => {
    console.log("UserMenuDroop.js/handleSignin");
  };

  return (
    <div className="absolute right-0 z-10 m-0 p-0">
      <ul className="rounded-lg border border-hMenuBorder bg-hMenuBg  p-1 drop-shadow-md dark:border-hMenuBorderD dark:bg-hMenuBgD">
        <li
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={loginToggle}
        >
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
          <a href="#" onClick={handleSignin} className="flex-nowrap">
            Sing in/ Вхід
          </a>
        </li>
        <li
          //   className="userMenuDroop__dropdown__item"
          className="flex list-none items-center  p-1 text-sm font-normal text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov  dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >
          <a>Registration</a>
        </li>
        <li
          //   className="userMenuDroop__dropdown__item"
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >
          {/* <a className="userMenuDroop__dropdown__item-p">Registration</a> */}
          {/* <a className="hover:text-hMenuTextHover ml-2 flex items-center bg-hMenuBg p-0 text-hMenuText hover:bg-hMenuBgHov"> */}
          <a>Registration1</a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenuDroop;
