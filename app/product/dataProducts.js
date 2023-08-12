export async function getAllProducts() {
  const promise = new Promise((res) => setTimeout(() => res(PRODUCTS), 1500))
  return await promise
}

export async function getProductById(id) {
  const a = parseFloat(id)
  const promise = new Promise((res) => {
    setTimeout(() => res(PRODUCTS.find((x) => x.id === parseFloat(id))), 1500)
  })
  return await promise
}

export const PRODUCTS = [
  {
    id: 1,
    title: "Балкон кутовий",
    image: "/images/products/DBBalkon1-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 2,
    title: " Балкон трапеція",
    image: "/images/products/DBBalkon2-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 128.0,
    // discontProc: 30,
  },
  {
    id: 3,
    title: "Балкон дуговий",
    image: "/images/products/DBBalkon3-420-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 120.0,
    // discontProc: 0,
  },
  {
    id: 4,
    title: "Сходи квадрат",
    image: "/images/products/DBShoduKv-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 30,
  },
  {
    id: 5,
    title: "Сходи",
    image: "/images/products/DBShodu-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    discontProc: 0,
  },
  {
    id: 6,
    title: "Сходи",
    image: "/images/products/DBShoduVn-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 7,
    title: "Сходи",
    image: "/images/products/DBShoduVn1-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 8,
    title: "Сходи",
    image: "/images/products/DBShoduZov-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 9,
    title: "Тераса",
    image: "/images/products/DBTerasa3-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 30,
  },
  {
    id: 10,
    title: "Тераса",
    image: "/images/products/DBTerasa2-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 30,
  },

  {
    id: 11,
    title: "Веранда внутрішня",
    image: "/images/products/DBVerandaVn-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 12,
    title: "Опора під виноград",
    image: "/images/products/BDVunograd-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 13,
    title: "Ворота",
    image: "/images/products/DBVorota-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 14,
    title: "Ворота",
    image: "/images/products/DBVorota1-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 15,
    title: "Решітка на вікно",
    image: "/images/products/DBVikno-320-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    discontProc: 0,
  },
  {
    id: 16,
    title: "Лавка",
    image: "/images/products/DBLavka-250-280.jpg",
    description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 17,
    title: "Паркан",
    image: "/images/products/DBParkan-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 18,
    title: "Паркан",
    image: "/images/products/DBParkan1-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    discontProc: 0,
  },
  {
    id: 19,
    title: "Паркан",
    image: "/images/products/DBParkan2-250-280.jpg",
    description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },

  {
    id: 20,
    title: "Рушникосушка-квадратна труба",
    image: "/images/products/DBSushilka-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 21,
    title: "Рушникосушка-квадратна труба",
    image: "/images/products/DBSushilka1-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 22,
    title: "Рушникосушка-квадратна труба",
    image: "/images/products/DBSushilka2-250-280.jpg",
    // description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
  {
    id: 25,
    title: "Балкон плюс навіс",
    image: "/images/products/DBBalkonNavis-250-280.jpg",
    description: "Виготовлений з труб @20. і 15. Опуклі в зовнішню сторону. ВІдшліфовані.",
    // price: 20.0,
    // discontProc: 0,
  },
]
