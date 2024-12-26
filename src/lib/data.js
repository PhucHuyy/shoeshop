export const headerMenu = [
  {
    trigger: "TRANG CHỦ",
    hasSubMenu: false,
    href: "/",
  },

  {
    trigger: "TẤT CẢ SẢN PHẨM",
    hasSubMenu: false,
    href: "/collections/shop",
  },
  {
    trigger: "GIÀY CỎ NHÂN TẠO",
    hasSubMenu: true,
    href: "/collections/giay-co-nhan-tao",
    subMenu: [
      {
        title: "NIKE",
        subHref: "/collections/giay-co-nhan-tao?brand=NIKE",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/giay-co-nhan-tao?brand=ADIDAS",
      },
      {
        title: "PUMA",
        subHref: "/collections/giay-co-nhan-tao?brand=PUMA",
      },
      {
        title: "MIZUNO",
        subHref: "/collections/giay-co-nhan-tao?brand=MIZUNO",
      },
      {
        title: "JOMA",
        subHref: "/collections/giay-co-nhan-tao?brand=JOMA",
      },
      {
        title: "KAMITO",
        subHref: "/collections/giay-co-nhan-tao?brand=KAMITO",
      },
      {
        title: "ZOCKER",
        subHref: "/collections/giay-co-nhan-tao?brand=ZOCKER",
      },
    ],
  },
  {
    trigger: "GIÀY FUTSAL",
    hasSubMenu: true,
    href: "/collections/giay-futsal",
    subMenu: [
      {
        title: "NIKE",
        subHref: "/collections/giay-futsal?brand=NIKE",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/giay-futsal?brand=ADIDAS",
      },
      {
        title: "JOMA",
        subHref: "/collections/giay-futsal?brand=JOMA",
      },
      {
        title: "MIZUNO",
        subHref: "/collections/giay-futsal?brand=MIZUNO",
      },
      {
        title: "ASICS",
        subHref: "/collections/giay-futsal?brand=ASICS",
      },
      {
        title: "KAMITO",
        subHref: "/collections/giay-futsal?brand=KAMITO",
      },
      {
        title: "DESPORTE",
        subHref: "/collections/giay-futsal?brand=DESPORTE",
      },
    ],
  },
  {
    trigger: "THƯƠNG HIỆU",
    hasSubMenu: true,
    href: "#",
    subMenu: [
      {
        title: "NIKE",
        subHref: "/search?name=NIKE&page=0&limit=12",
      },
      {
        title: "ADIDAS",
        subHref: "/search?name=ADIDAS&page=0&limit=12",
      },
      {
        title: "PUMA",
        subHref: "/search?name=PUMA&page=0&limit=30",
      },
      {
        title: "MIZUNO",
        subHref: "/search?name=MIZUNO&page=0&limit=30",
      },
      {
        title: "JOMA",
        subHref: "/search?name=JOMA&page=0&limit=30",
      },
      {
        title: "ZOCKER",
        subHref: "/search?name=ZOCKER&page=0&limit=30",
      },
      {
        title: "KAMITO",
        subHref: "/search?name=KAMITO&page=0&limit=30",
      },
      {
        title: "ASICS",
        subHref: "/search?name=ASICS&page=0&limit=30",
      },
    ],
  },
  {
    trigger: "HOT SALES",
    hasSubMenu: false,
    href: "/collections/hot-sales",
    // subMenu: [
    //   {
    //     title: "GIÀY NHÂN TẠO",
    //     subHref: "/collections/hot-sales",
    //   },
    //   {
    //     title: "GIÀY FUTSAL",
    //     subHref: "/collections/hot-sales",
    //   },
    // ],
  },
  {
    trigger: "PHỤ KIỆN",
    hasSubMenu: true,
    href: "/collections/phu-kien",
    subMenu: [
      {
        title: "BÓNG",
        subHref: "/collections/phu-kien?category=ball",
      },
      {
        title: "TẤT",
        subHref: "/collections/phu-kien?category=socks",
      },
      {
        title: "BALO",
        subHref: "/collections/phu-kien?category=bag",
      },
      {
        title: "LÓT GIÀY",
        subHref: "/collections/phu-kien?category=insole",
      },
    ],
  },
  // {
  //   trigger: "TIN TỨC GIÀY",
  //   hasSubMenu: false,
  //   href: "/",
  //   // subTrigger:
  // },
  // {
  //   trigger: "KHÁCH HÀNG",
  //   hasSubMenu: false,
  //   href: "/",
  //   // subTrigger:
  // },
  // {
  //   trigger: "CỬA HÀNG",
  //   hasSubMenu: false,
  //   href: "/",
  //   // subTrigger:
  // },
  // {
  //   trigger: "TUYỂN DỤNG",
  //   hasSubMenu: true,
  //   href: "/giay-co-nhan-tap",
  //   subMenu: [
  //     {
  //       title: "NIKE",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //     {
  //       title: "ADIDAS",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //     {
  //       title: "NIKE",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //     {
  //       title: "NIKE",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //     {
  //       title: "NIKE",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //     {
  //       title: "NIKE",
  //       subHref: "/collections/nike-co-nhan-tao",
  //     },
  //   ],
  // },
  // {
  //   trigger: "LIÊN HỆ",
  //   hasSubMenu: false,
  //   href: "/",
  //   // subTrigger:
  // },
];

export const products = [
  {
    name: "NIKE ZOOM MERCURIAL SUPERFLY 10 ACADEMY KM TF - FQ8333-800 - XANH CHUỐI",
    thumnail: "/shoe1.jpg",
    price: 1500000,
    href: "/product/1",
  },
  {
    name: "ADIDAS F50 LEAGUE TF - IF1335 - ĐỎ",
    thumnail: "/shoe2.jpg",
    price: 1500000,
    href: "/product/2",
  },
  {
    name: "ADIDAS PREDATOR 24 LEAGUE L TF - 107923-01 - XANH ĐEN",
    thumnail: "/shoe3.jpg",
    price: 1500000,
    href: "/product/3",
  },
  {
    name: "MIZUNO ALPHA PRO AS - P1GD236409 - XÁM/TRẮNG",
    thumnail: "/shoe4.jpg",
    price: 1500000,
    href: "/product/4",
  },
  {
    name: "MIZUNO ALPHA PRO AS - P1GD236409 - XÁM/TRẮNG",
    thumnail: "/shoe4.jpg",
    price: 1500000,
    href: "/product/5",
  },
  {
    name: "MIZUNO ALPHA PRO AS - P1GD236409 - XÁM/TRẮNG",
    thumnail: "/shoe4.jpg",
    price: 1500000,
    href: "/product/6",
  },
  {
    name: "MIZUNO ALPHA PRO AS - P1GD236409 - XÁM/TRẮNG",
    thumnail: "/shoe4.jpg",
    price: 1500000,
    href: "/product/7",
  },
  {
    name: "MIZUNO ALPHA PRO AS - P1GD236409 - XÁM/TRẮNG",
    thumnail: "/shoe4.jpg",
    price: 1500000,
    href: "/product/8",
  },
];

export const breadcrumbs = {
  all: {
    title: "Tất cả sản phẩm",
    path: "/collections/shop",
  },
  shoetf: {
    title: "Giày cỏ nhân tạo",
    path: "/collections/giay-co-nhan-tao",
  },
  shoeic: {
    title: "Giày Futsal",
    path: "/collections/giay-futsal",
  },
  accessory: {
    title: "Phụ kiện",
    path: "/collections/phu-kien",
  },
  hotsales: {
    title: "Hot Sales",
    path: "/collections/hotsales",
  },
};

export const productData = [
  {
    id: "1",
    name: "NIKE ZOOM MERCURIAL SUPERFLY 10 ACADEMY KM TF - FQ8333-800 - XANH CHUỐI",
    category: "Giày Cỏ Nhân Tạo (Turf)",
    price: 1500000,
    images: "/shoe1.jpg",
    sizes: ["39 1/3", "40", "40 2/3", "41 1/3", "42", "42 2/3", "44", "44 2/3"],
  },

  {
    id: "2",
    name: "NIKE ZOOM MERCURIAL SUPERFLY 10 ACADEMY KM TF - FQ8333-800 - XANH CHUỐI",
    category: "Giày Cỏ Nhân Tạo (Turf)",
    price: 1500000,
    images: "/shoe1.jpg",
    sizes: ["39 1/3", "40", "40 2/3", "41 1/3", "42", "42 2/3", "44", "44 2/3"],
  },

  {
    id: "3",
    name: "NIKE ZOOM MERCURIAL SUPERFLY 10 ACADEMY KM TF - FQ8333-800 - XANH CHUỐI",
    category: "Giày Cỏ Nhân Tạo (Turf)",
    price: 1500000,
    images: "/shoe1.jpg",
    sizes: ["39 1/3", "40", "40 2/3", "41 1/3", "42", "42 2/3", "44", "44 2/3"],
  },

  {
    id: "4",
    name: "NIKE ZOOM MERCURIAL SUPERFLY 10 ACADEMY KM TF - FQ8333-800 - XANH CHUỐI",
    category: "Giày Cỏ Nhân Tạo (Turf)",
    price: 1500000,
    images: "/shoe1.jpg",
    sizes: ["39 1/3", "40", "40 2/3", "41 1/3", "42", "42 2/3", "44", "44 2/3"],
  },
];
