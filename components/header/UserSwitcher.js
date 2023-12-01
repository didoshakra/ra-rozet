//userSwitcher.js //
//Іконка мови окремо (випадаючий список викликається)

"use client";
import { useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";
// import { ComponentContext } from "../../context/ComponentContext"
import UserSwitcherDroop from "./UserSwitcherDroop";
import avatar from "@/public/avatar/2.jpg";

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
        className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-hIconBgHov dark:hover:bg-hIconBgHovD"
        title="профіль"
        onClick={userMenuOpenToggle}
      >
        {profile === "admin" ? (
          <Image
            src={avatar}
            alt={"avatar"}
            width={32}
            height={32}
            className="rounded-full border"
          />
        ) : (
          <svg
            className="h-8 w-8 text-hIcon dark:text-hIconD"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </button>
      {/* Випадаюче меню */}
      {userMenuOpen && <UserSwitcherDroop setUserMenuOpen={setUserMenuOpen} />}
    </div>
  );
};

export default UserSwitcher;
