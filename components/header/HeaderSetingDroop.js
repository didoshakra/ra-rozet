//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */
"use client";
import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
import resolveConfig from "tailwindcss/resolveConfig"; //отримання змінних з tailwind.config
import { useTheme } from "next-themes";
// import { ComponentContext } from "../../context/ComponentContext"
import UserSwitcherDroop from "./UserSwitcherDroop";

const HeaderSetingDroop = () => {
  const { resolvedTheme, setTheme } = useTheme();
  //   const { state, dispatch } = useContext(ComponentContext);
  //   const { theme, themeTypeLight, profile } = state;
  const [profile, setprofile] = useState("admin");

  const [setingMenuOpen, setSetingMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  //   console.log("profile=", profile);
  const userMenuOpenToggle = () => {
    setUserMenuOpen(!userMenuOpen);
    let newUser = "admin";
    if (profile === "admin") {
      newUser = "user";
    }
    setprofile(newUser);
    // console.log("userSwitcher.js/newUser=", newUser)
    console.log("profile=", profile);
    // dispatch({ type: "PROFILE", payload: newUser }); //Змінюємо state.user
  };

  //*************Для клацання поза обєктом
  const wRef_HeaderSetingDroop = useRef(null); //Для клацання поза обєктом
  useEffect(() => {
    const onClick = (e) =>
      wRef_HeaderSetingDroop.current.contains(e.target) ||
      (setSetingMenuOpen(false), setUserMenuOpen(false));
    //   ,console.log("HeaderSetingDroop: клік поза компонентом")
    // || console.log("клик вне компонента")
    document.addEventListener("click", onClick, true);
    document.addEventListener("scroll", onClick, true);
    // document.addEventListener("mousedown", onClick) // віджали кнопку миші на елементі.
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("scroll", onClick, true), true;
    };
  }, []);

  //   useOutsideAlerter(wRef) //Для клацання поза обєктом

  //   //Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
  //   // і відключення у всіх onClick(*togle) в самомк об'єкті.
  //   function useOutsideAlerter(ref) {
  //     //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         //Якщо клацнув поза елементом
  //         // alert("Ти клацнув поза мною!");
  //         setSetingMenuOpen(false) //Закриваєм меню Seting
  //         setUserMenuOpen(false) //Закриваєм меню
  //       }
  //     }
  //     useEffect(() => {
  //       // Прив’яжіть прослуховувач події
  //       // document.addEventListener("mousedown", handleClickOutside);//натиснули / віджали кнопку миші на елементі.
  //       document.addEventListener("scroll", handleClickOutside) //Для скролу
  //       document.addEventListener("click", handleClickOutside, false) //Кликнули на елемент лівою кнопкою миші (на пристроях з сенсорними екранами воно відбувається при торканні).
  //       return () => {
  //         // Від’єднайте слухача події під час очищення
  //         // document.removeEventListener("mousedown", handleClickOutside);
  //         document.removeEventListener("scroll", handleClickOutside)
  //         document.removeEventListener("click", handleClickOutside, false)
  //       }
  //     })
  //   }

  //випадаюче меню Налаштувань
  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    setUserMenuOpen(false); //Закриваєм меню
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };
  //Зміна в newTheme Context
  const themeMenuToggle = () => {
    setUserMenuOpen(false);
  };

  return (
    // <div ref={wRef_HeaderSetingDroop} className="headerSetingDroop">
    <div ref={wRef_HeaderSetingDroop} className="relative m-0 p-0">
      {/* іконка seting*/}
      {/* <div className="headerSetingDroop__icon" onClick={setingMenuToggle}> */}
      <div className="mr-1 flex items-center justify-center bg- " onClick={setingMenuToggle}>
        <svg
          class="h-8 w-8 text-red-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
      {/* список головного меню */}
      <ul className="headerSetingDroop__dropdown">
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={themeMenuToggle}
        >
          {/* <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} /> */}
          <p
            title="Тема"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? (
              <svg
                class="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
              </svg>
            ) : (
              <svg
                class="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="3" />{" "}
                <line x1="12" y1="5" x2="12" y2="3" />{" "}
                <line x1="17" y1="7" x2="18.4" y2="5.6" />{" "}
                <line x1="19" y1="12" x2="21" y2="12" />{" "}
                <line x1="17" y1="17" x2="18.4" y2="18.4" />{" "}
                <line x1="12" y1="19" x2="12" y2="21" />{" "}
                <line x1="7" y1="17" x2="5.6" y2="18.4" />{" "}
                <line x1="6" y1="12" x2="4" y2="12" />{" "}
                <line x1="7" y1="7" x2="5.6" y2="5.6" />
              </svg>
            )}
          </p>
          <p>Теми</p>
        </li>
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
          <p>
            {profile === "admin" ? (
              <Image
                className="h-8 w-8 rounded-full border bg-[url(/avatar/2.jpg)] bg-cover"
                width={40}
                height={40}
                alt="avatar"
              />
            ) : (
              <svg
                // class="h-8 w-8 text-red-500"
                class="h-8 w-8 text-headMenuText"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </p>
          <p>Профіль</p>
          {/* Випадаюче меню User */}
          {userMenuOpen ? (
            <UserSwitcherDroop
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
            />
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default HeaderSetingDroop;
