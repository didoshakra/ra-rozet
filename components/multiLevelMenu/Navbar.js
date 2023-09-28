import MenuItems from "./MenuItems";

export default function Navbar({ multilevelMenu, title = "", setDrawerOpen }) {
  // console.log("Navbar/multilevelMenu=", multilevelMenu);
  return (
    <nav>
      <div
        onClick={(e) => setDrawerOpen(false)}
        className="pl-2 text-sm  font-bold italic  text-headMenuText dark:text-headMenuTextDark"
      >
        {title}
      </div>
      <ul className="gap-3 bg-drawerDropMenuBg pl-2 font-bold text-[#3e77aa] underline  dark:bg-headMenuBgDark">
        {/* <ul className=" gap-3 bg-green-400 pl-2 font-bold text-cyan-600  underline"> */}
        {/* {multilevelMenu.map((menu, key = menu.id) => { */}
        {multilevelMenu.map((menu, index) => {
          //   console.log("Navbar/index=", index);
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              idKey={index}
              depthLevel={depthLevel}
              setDrawerOpen={setDrawerOpen}
            />
          );
        })}
      </ul>
      {/* <main className="container mx-auto mb-40 bg-fuchsia-100">{children}</main> */}
    </nav>
  );
}
