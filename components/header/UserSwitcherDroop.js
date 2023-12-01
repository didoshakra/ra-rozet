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
      <ul className="inline-block rounded-lg border border-hMenuBorder bg-hMenuBg  p-1 drop-shadow-md dark:border-hMenuBorderD dark:bg-hMenuBgD">
        <li className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD">
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
            Sing in/Вхід
          </a>
        </li>
        <li
          //   className="userSwitcherDroop__dropdown__item"
          className="flex list-none items-center  p-1 text-sm font-normal text-hMenuText hover:bg-hMenuBgHov  hover:text-hMenuTextHov  dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >
          {/* <a className="userSwitcherDroop__dropdown__item-p">Registration</a> */}
          {/* <a className="hover:text-hMenuTextHover ml-2 flex items-center bg-hMenuBg p-0 text-hMenuText hover:bg-hMenuBgHov"> */}
          <a>Registration</a>
        </li>
        <li
          //   className="userSwitcherDroop__dropdown__item"
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          onClick={registrationToggle}
        >
          {/* <a className="userSwitcherDroop__dropdown__item-p">Registration</a> */}
          {/* <a className="hover:text-hMenuTextHover ml-2 flex items-center bg-hMenuBg p-0 text-hMenuText hover:bg-hMenuBgHov"> */}
          <a>Registration1</a>
        </li>
      </ul>
    </div>
  );
};

export default UserSwitcherDroop;
