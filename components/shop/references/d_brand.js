//d_brand.js //Основа- Довідник/НеДовідник
import Layout from "../../../components/Main/Layout"
import GBrand from "../../../components/Shop/References/Brand/GBrand"
import { dbHost } from "../../../config/dbHost"// Налаштування dbHost = "http://localhost:3001")


export default function DBrand({
  serverData, //Вхідні дані з Сервера(getServerSideProps)
  isDovidnuk = false, //Чи відкривати як довідник(з ...Form)
  setDovActive, //Назва довідника(з ...Form)
  setValue, //Для зміни Input в формі вводу даних(з ...Form)
}) {
  console.log("d_brand.js/DBrand/serverData", serverData)
    const Dovidnuk = () => {
      return (
        // <div style={{ position: "relative", top:"100px" ,width: "600px", height: "400px", maxWidth: "calc(100vw - 20px)" }}>
        <div style={{ position: "relative", top: "0", width: "600px", height: "500px", maxWidth: "calc(100vw - 20px)" }}>
          <GBrand serverData={serverData} isDovidnuk={isDovidnuk} setDovActive={setDovActive} setValue={setValue} />
        </div>
      )
    }
    const NeDovidnuk = () => {
      return (
        <Layout>
          <div style={{ position: "relative", width: "calc(100vw)", height: "calc(100vh - 150px)" }}>
            <GBrand serverData={serverData} isDovidnuk={isDovidnuk} />
          </div>
        </Layout>
      )
    }
    return <>{isDovidnuk ? <Dovidnuk /> : <NeDovidnuk />}</>
}

//= Загрузка даних на сервері getServerSideProps()/getStaticProps() \\Тільки на сторінках(не викликається як компонент)
export async function getServerSideProps(context) {
  const response = await fetch(`${dbHost}/api/shop/references/d_brand/select-all`)
//   const response = await fetch(`/api/shop/references/d_brand/select-all`)
  const datas = await response.json()
  console.log("d_brand.js/getServerSideProps/datas=", datas)
  return {
    props: { serverData: datas }, // will be passed to the page component as props
  }
}

