//HomePage.js / Muiv4.5.1
//Добавлено animat
// import  { useContext } from "react"
// import Link from "next/link"
// import { ComponentContext } from "../../context/ComponentContext"

const MyHomePage = () => {
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
          <h1 className="h-auto items-center  justify-center font-serif text-[50px] font-extrabold leading-normal text-hTextD md:text-[90px]">
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
          <h1 className="text-[50px] md:text-[90px] h-auto  items-center justify-center font-sans font-extrabold leading-normal text-hTextD">
            Тримай своє обличчя до сонця, і ти ніколи не побачиш тіней
          </h1>
          <h2 className="inline-block font-sans text-[25px] font-bold uppercase tracking-normal text-red-500">
            Хелен Келлер
          </h2>
        </div>
      </div>
      {/* <style jsx>{`
        .home-slider-section {
          position: relative;
          height: 650px;
        }

        .image2 {
          //   background: 100% transparent url("/images/home/rol6-1.jpg") no-repeat;
          background: 100% transparent url("/images/home/sun3_1280-847.jpg")
            no-repeat;
          //   z-index: 10;
        }
        .image1 {
          //   background: 100% transparent url("/images/home/rol10-1.jpg") no-repeat;
          background: 100% transparent
            url("/images/home/karpaty-morning1_960-640.jpg") no-repeat;
          animation-delay: 5s; //Затримка анімації для 2-го слайду
          //   z-index: 10;
        }
        .slider-item {
          position: absolute; //Щоб не бачити цей <section> !!! Інакше 1-й слайд буде відкириватись за 1-м
          //position: relative; //1-й слайд буде відкириватись за 1-м
          //0,0,0,0-розтягує position: absolute; на весь батьківський блок не залежно від контенту
          //top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          align-items: center;
          justify-content: center;
          height: 650px;
          background-size: cover; //Маштабує зображення.
          background-repeat: no-repeat;
          background-position: center center;
          animation-name: coverSlide; //ім'я секції анімації
          animation-timing-function: linear; //рівномірна зміна
          animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
          animation-duration: 5s; //протяжність анімації
          animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
        }
        @keyframes coverSlide {
          0% {
            opacity: 1;
          }
          45% {
            opacity: 1;
          }
          55% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
          from {
            //transform: scale(1.05);
            z-index: 1; //Для видимості button
          }
          to {
            //transform: scale(1);
            z-index: 0; //Для видимості button
          }
        }
        .overlay {
          position: absolute;
          //0,0,0,0-розтягує на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          opacity: 0.2;
        }
        .slider-text {
          padding: 0 15px;
          display: flex;
          align-items: center; //Y-вертикально
          justify-content: center; //X-горизонтально
          flex-direction: column; //в стовбець
          text-align: center;
          height: 650px; //Треба
        }

        .slider-text h1 {
          //   font-size: 8vw;
          font-size: 60px;
          //   color: white;
          color: #82ae46;
          line-height: 1.3;
          font-weight: 800;
          font-family: ${theme.fontFamily.mimicHand};
        }

        @media (min-width: 960px) {
          .slider-text h1 {
            font-size: 10vw;
            // color: white;
            color: #82ae46;
          }
        }
        .subheading {
          //   color: black;
          font-weight: 600;
          font-size: 22px;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          //   color: white;
          color: red;
        }
        .slider-text p {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 400;
        }
        .button {
          display: fllex-line; //щоб не переносилась і ширина по контексту
          position: relative;
          //   margin: 20px
          padding: 6px 12px;
          //background: #70b4e6;
          background: #82ae46;
          //width: "";
          height: "40зч";
          color: #fff;
          border: 2px solid #82ae46;
          border-radius: 20px;
          font-family: ${theme.fontFamily.sansSerif};
          font-size: 16px;
          text-decoration: none;
          //z-index: 100;
        }
        .button:hover {
          background-color: rgba(132, 177, 71, 0.3);
          border: 1px solid #fff;
          //border: 1px solid rgba(42,66,10,1);
          // cursor: ${disabled ? "not-allowed" : "pointer"};
        }
      `}</style> */}
    </section>
  );
};
export default MyHomePage;
