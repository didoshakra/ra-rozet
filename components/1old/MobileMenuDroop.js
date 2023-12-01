//MobileMenuDroop.js //https://coursehunter.net/course/reactjs-s-nulya-do-profi
//Випадаюче меню(Мобіле)
"use client"
import { useContext, useRef, useEffect } from "react"
import Link from "next/link"
// import { ComponentContext } from "../../context/ComponentContext"

const MobileMenuDroop = ({menu,mobileMenuOpen, mobileMenuToggle}) => {
  console.log("MobileMenuDroop/mobileMenuOpen= ",mobileMenuOpen);

  //*** Для клацання поза обєктом ***/
  //Добавити в контрольований об'єкт-(ref={wRef})- (<ul ref={wRef}... )
  const wRef_MobileMenuDroop = useRef(null); //Для клацання поза обєктом
  //https://qna.habr.com/q/855061
  useEffect(() => {
    const onClick = (e) =>
      wRef_MobileMenuDroop.current.contains(e.target) ||
      mobileMenuToggle(false);
    //, console.log("MobileMenuDroop: клік поза компонентом"))
    document.addEventListener("click", onClick, true);
    document.addEventListener("scroll", onClick, true);
    // document.addEventListener("mousedown", onClick) // віджали кнопку миші на елементі.
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("scroll", onClick, true);
    };
  }, []);

  //   useOutsideAlerter(wRef) //Для клацання поза обєктом
  //   function useOutsideAlerter(ref) {
  //     //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
  //     function handleClickOutside(event) {
  //       // Посилання  на вказаний елемент іконки  (ClassName="mobileMenuIcon" з модуля MobileMenuIcon.js) який треба виключити
  //       const iconBlock = document.getElementsByClassName(
  //         // "mobileMenu__droop__icon"
  //         "mobileMenuIcon"
  //       )[0]
  //       //!e.path.includes(iconBlock)-чи є в списку батьківських або дочінрних елементів      вищезгаданий елемент
  //       //Проверяем, есть ли в списке родительских или дочерних элементов, вышеуказанный компонент
  //       // console.log("MobileMenuDroop.js/mobileMenu__droop__icon=", iconBlock);
  //       if (ref.current && !ref.current.contains(event.target) && !event.path.includes(iconBlock)) {
  //         //Якщо поза елементом
  //         // alert("Ти клацнув поза мною!")
  //         if (props.mobileMenuOpen) {
  //           props.mobileMenuToggle(false) //Закриваєм меню
  //         }
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
  //   //end/*** Для клацання поза обєктом ***/

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        // <li className="mobileMenuDroop__dropdown__item" key={index}>
        <li
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hMenuText  hover:bg-hMenuBgHov  hover:text-hMenuTextHov dark:text-hMenuTextD dark:hover:bg-hMenuBgHovD dark:hover:text-hMenuTextHovD"
          key={index}
        >
          <Link href={`${item.link}`}>{item.a}</Link>
        </li>
      );
    });
  };

  return (
    //  Мобільна навігація
    //display: ${props.mobileMenuOpen ? "block" : "none"};
    <div
      //   className="MobileMenuDroop"
      className={`${
        mobileMenuOpen ? "absolute" : "hidden"
      } right-0 z-10 m-0 p-0`}
    >
      {/* <ul ref={wRef}>{props.renderMenu()}</ul> */}
      {/* <ul className="mobileMenuDroop__dropdown" ref={wRef_MobileMenuDroop}> */}
      <ul
        ref={wRef_MobileMenuDroop}
        className=" rounded-lg border border-hMenuBorder  bg-hMenuBg p-1 drop-shadow-md dark:border-hMenuBorderD dark:bg-hMenuBgD"
      >
        {renderMenu()}
      </ul>
    </div>
  );
};

export default MobileMenuDroop
