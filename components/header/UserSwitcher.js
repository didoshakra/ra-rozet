//userSwitcher.js //
//Іконка мови окремо (випадаючий список викликається)

"use client";
import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
// import { ComponentContext } from "../../context/ComponentContext"
import UserSwitcherDroop from "./UserSwitcherDroop";

const UserSwitcher = () => {
  //   const { state, dispatch, profile } = useContext(ComponentContext)
  //   const [profile, setprofile] = useState("user");
  const [profile, setprofile] = useState("admin");
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

  return (
    <div className="relative list-none">
      {/* іконка зміни користувача */}
      <button
        className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-500"
        title="профіль"
        onClick={userMenuOpenToggle}
      >
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
      </button>
      {/* Випадаюче меню */}
      {userMenuOpen && (
      <UserSwitcherDroop setUserMenuOpen={setUserMenuOpen} />
       )}
    </div>
  );
};

export default UserSwitcher;
