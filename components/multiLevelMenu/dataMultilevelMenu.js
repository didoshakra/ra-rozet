export const menuBig = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "examples",
    // url: "/examples/next_ui/table_all_case",
    submenu: [
      {
        id: 3,
        title: "table",
        // url: "/others",
        submenu: [
          {
            id: 4,
            title: "table_case",
            url: "/examples/next_ui/table_all_case",
          },
          {
            id: 5,
            title: "examples",
            url: "/examples",
          },
          {
            id: 6,
            title: "Backend",
            submenu: [
              {
                id: 7,
                title: "Table_All_Case",
                url: "/examples/next_ui/table_all_case",
              },
              {
                id: 8,
                title: "PHP/examples",
                url: "/examples",
              },
              {
                id: 9,
                title: "web/others ",
                // url: "/others",
                submenu: [
                  {
                    id: 10,
                    title: "Frontend/examples",
                    url: "frontend/examples",
                  },
                  {
                    id: 11,
                    title: "Backend",
                    submenu: [
                      {
                        id: 12,
                        title: "NodeJS/ebout",
                        url: "/ebout",
                      },
                      {
                        id: 13,
                        title: "PHP/ebout",
                        url: "/ebout",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 14,
        title: "examples",
        url: "/examples",
      },
      {
        id: 15,
        title: "Others/others",
        // url: "/others",
      },
      {
        id: 16,
        title: "web/others ",
        // url: "/others",
        submenu: [
          {
            id: 17,
            title: "Frontend/others",
            url: "/others",
          },
          {
            id: 18,
            title: "Backend",
            submenu: [
              {
                id: 19,
                title: "NodeJS/examples",
                url: "/examples",
              },
              {
                id: 20,
                title: "PHP/",
                url: "/examples",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 21,
    title: "About/about",
    url: "/about",
    submenu: [
      {
        id: 22,
        title: "Who we are/about",
        url: "/about",
      },
      {
        id: 23,
        title: "Our values/about",
        url: "/about",
      },
    ],
  },
];
export const menuAdmin = [
  {
    id: 1,
    title: "Меню адміністратора",
    submenu: [
      {
        id: 2,
        title: "Довідники",
        submenu: [
          {
            id: 3,
            title: "Товари",
            url: "/shop/references/d_product",
          },
          {
            id: 4,
            title: "Бренди",
            url: "/shop/references/d_brand",
          },
          {
            id: 5,
            title: "Категорії товарів",
            url: "/shop/references/d_category",
          },
          {
            id: 6,
            title: "Клієнти",
            url: "/shop/references/d_client",
          },
          {
            id: 7,
            title: "Підрозділи",
            url: "/shop/references/d_department",
          },
          {
            id: 8,
            title: "Одиниці вимірювання",
            url: "/shop/references/d_ov",
          },
          {
            id: 9,
            title: "Користувачі",
            url: "/shop/references/d_user",
          },
        ],
      },
    ],
  },
];
export const menuDocuments = [
  {
    id: 1,
    title: "Документи",
    submenu: [
      {
        id: 2,
        title: "Продажі",
        submenu: [
          {
            id: 3,
            title: "Товарні чеки (doc_check_head)",
            url: "/shop/docs/doc_check_head",
          },
          //   {
          //     id: 4,
          //     title: "Товарний чек/товари(doc_check_products))",
          //     url: "/shop/docs/doc_check_products",
          //   },
        ],
      },
    ],
  },
];
