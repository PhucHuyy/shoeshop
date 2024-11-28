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
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/adidas-co-nhan-tao",
      },
      {
        title: "PUMA",
        subHref: "/collections/puma-co-nhan-tao",
      },
      {
        title: "MIZUNO",
        subHref: "/collections/mizuno-co-nhan-tao",
      },
      {
        title: "JOMA",
        subHref: "/collections/joma-co-nhan-tao",
      },
      {
        title: "DESPORTE",
        subHref: "/collections/desporte-co-nhan-tao",
      },
      {
        title: "ASICS",
        subHref: "/collections/asics-co-nhan-tao",
      },
      {
        title: "KAMITO",
        subHref: "/collections/kamito-co-nhan-tao",
      },
      {
        title: "ZOCKER",
        subHref: "/collections/zocker-co-nhan-tao",
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
        subHref: "/collections/nike-fulsal",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/adidas-fulsal",
      },
      {
        title: "JOMA",
        subHref: "/collections/joma-fulsal",
      },
      {
        title: "MIZUNO",
        subHref: "/collections/mizuno-fulsal",
      },
      {
        title: "ASICS",
        subHref: "/collections/asics-fulsal",
      },
      {
        title: "KAMITO",
        subHref: "/collections/kamito-fulsal",
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
        subHref: "/collections/nike-thuong-hieu",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/adidas-thuong-hieu",
      },
      {
        title: "PUMA",
        subHref: "/collections/puma-thuong-hieu",
      },
      {
        title: "MIZUNO",
        subHref: "/collections/mizuno-thuong-hieu",
      },
      {
        title: "JOMA",
        subHref: "/collections/joma-thuong-hieu",
      },
      {
        title: "ATHLETA",
        subHref: "/collections/athleta-thuong-hieu",
      },
      {
        title: "KAMITO",
        subHref: "/collections/kamito-thuong-hieu",
      },
    ],
  },
  {
    trigger: "HOT SALES",
    hasSubMenu: true,
    href: "/collections/hot-sales",
    subMenu: [
      {
        title: "NIKE",
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "ADIDAS",
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "NIKE",
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "NIKE",
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "NIKE",
        subHref: "/collections/nike-co-nhan-tao",
      },
      {
        title: "NIKE",
        subHref: "/collections/nike-co-nhan-tao",
      },
    ],
  },
  {
    trigger: "PHỤ KIỆN",
    hasSubMenu: true,
    href: "/collections/phu-kien",
    subMenu: [
      {
        title: "BÓNG",
        subHref: "/collections/bong-phu-kien",
      },
      {
        title: "TẤT",
        subHref: "/collections/tat-phu-kien",
      },
      {
        title: "BALO",
        subHref: "/collections/balo-phu-kien",
      },
      {
        title: "PHỤ KIỆN MIZUNO",
        subHref: "/collections/mizuno-phu-kien",
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
