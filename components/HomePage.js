//HomePage.js / Muiv4.5.1
//Добавлено animat
// import  { useContext } from "react"
// import Link from "next/link"
// import { ComponentContext } from "../../context/ComponentContext"

const HomePage = () => {
  const disabled = false; //Для buton
  //   const { state } = useContext(ComponentContext)
  //   const theme = state.theme

  return (
    // <section className="home-slider-section">
    <section className="relative h-[650px]">
      {/* елемент слайдеру */}
      <div
        className="absolute bottom-0 left-0 h-full w-full animate-[slideHome_5s_linear_infinite_alternate]
        items-center justify-center bg-[url('/images/home/sun3_1280-847.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex h-full flex-col items-center justify-center px-3 text-center align-middle">
          <h1 className="h-auto items-center  justify-center font-serif text-[40px] font-extrabold leading-normal text-hTextD md:text-[90px]">
            Підніміться над бурею, і ви знайдете сонце{" "}
          </h1>
          <h2 className="inline-block font-sans text-[25px] font-bold uppercase tracking-normal text-red-500">
            Маріо Фернандес
          </h2>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-full w-full animate-[slideHome_5s_5s_linear_infinite_alternate] items-center
        justify-center bg-[url('/images/home/karpaty-morning1_960-640.jpg')] bg-cover bg-center bg-no-repeat text-center"
      >
        <div className="flex h-full flex-col items-center justify-center px-3 align-middle ">
          <h1 className="h-auto items-center justify-center  font-sans text-[40px] font-extrabold leading-normal text-hTextD md:text-[90px]">
            Тримай своє обличчя до сонця, і ти ніколи не побачиш тіней
          </h1>
          <h2 className="inline-block font-sans text-[25px] font-bold uppercase tracking-normal text-red-500">
            Хелен Келлер
          </h2>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
