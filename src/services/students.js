const students = [
  //https://www.lenovo.com/au/en/p/laptops/thinkpad/thinkpadx1/x1-carbon-g9/20xw00j0au?cid=au_sem_cdwz8&cid=au_sem_cdwz8&CATARGETID=120088020000025785&CADevice=c&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ34Wg3YU33oF13eajyReNWtUHFaR-eoHxdJFG73cg-8jvju_lYgeFVgaAta2EALw_wcB
  {
    id: 1,
    name: "ThinkPad X1 Carbon Gen 9 - Intel® Core™",
    pricePerUnit: 2455.65,
    quantity: 22,
    imageUrl: [
      "https://p1-ofp.static.pub/fes/cms/2022/06/20/tqvm594ygxh5jbepn2bhim6o7jha49954337.png",
    ],
    favourited: true,
    variants: [], //black
  },
  //https://www.jbhifi.com.au/products/apple-macbook-air-13-inch-with-m2-chip-256gb-ssd-space-grey-2022
  {
    id: 2,
    name: "Apple MacBook Air 13-inch with M2 chip, 256GB SSD ",
    pricePerUnit: 20,
    quantity: 22,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594247-Product-0-I-637901928182549171_540x540.jpg?v=1655873758",
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594249-Product-0-I-637901928778398350_540x540.jpg?v=1655873759",
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594251-Product-0-I-637901929977450982_540x540.jpg?v=1655873759",
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594253-Product-0-I-637901930577485935_65c3b5ed-d623-4766-b245-db2fb44a0047_540x540.jpg?v=1655873762",
    ],
    favourited: true,
    variants: ["Midnight", "Silver", "Space Gray", "Starlight"],
  },
  //https://www.jbhifi.com.au/products/hp-6x0r7pa-15-6-fhd-laptop-512gb-ryzen-5
  {
    id: 3,
    name: "HP 6X0R7PA 15.6 inch FHD Laptop (512GB) [Ryzen 5]",
    pricePerUnit: 1199,
    quantity: 8,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/592827-Product-0-I-637921020777367450_800x800.jpg?v=1656484843",
    ],
    favourited: true,
    variants: [],
  },
  //https://www.jbhifi.com.au/products/hp-envy-x360-15-6-fhd-2-in-1-laptop-512gb-intel-i5
  {
    id: 4,
    name: "HP Envy X360 15.6 inch FHD 2-in-1 Laptop (512GB) [Intel i5]",
    pricePerUnit: 2099,
    quantity: 16,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/592863-Product-0-I-637921023777259772_800x800.jpg?v=1656472485",
    ],
    favourited: true,
    variants: [],
  },
  //https://www.lenovo.com/au/en/p/laptops/ideapad/ideapad-5/ideapad-5-14are05/82lm00ttau?cid=au_sem_cdwz8&gclid=Cj0KCQjwxb2XBhDBARIsAOjDZ36Do_hqev2V56-EeMWzHsJcNPvv8L9Bde-N4rujpwS0zUzBokKH1VoaAsYbEALw_wcB
  {
    id: 5,
    name: "IdeaPad Slim 5 (14, Gen 5) AMD (Platinum Grey)",
    pricePerUnit: 849,
    quantity: 28,
    imageUrl: [
      "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjcxOTg5fGltYWdlL2pwZWd8aDc4L2g2ZS8xNDI3ODAxNjY2MzU4Mi5qcGd8M2ZhODk1OTVhNDQzMTBlNjYyODRiZjIxNzk5NGE1ODNjYmEwMGEwNTc5YzI3NTc2Yjc0NjJkNjFlYjUxZTliOQ/lenovo-laptops-ideapad-5-14-amd-gallery-1.jpg",
      "https://p1-ofp.static.pub/fes/cms/2022/06/10/4280d1smpuu5wrt6gp8yya1syg5pfs990613.jpg",
    ],
    favourited: true,
    variants: ["Gray", "Graphite Grey"],
  },
  //https://www.jbhifi.com.au/products/apple-macbook-pro-13-inch-with-m2-chip-512gb-ssd-space-grey-2022
  {
    id: 6,
    name: "Apple MacBook Pro 13-inch with M2 chip, 512GB SSD (Space Grey) [2022]",
    pricePerUnit: 2299,
    quantity: 42,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594256-Product-0-I-637901950382447364_800x800.jpg?v=1655873752",
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594256-Product-0-I-637901950382447364_800x800.jpg?v=1655873752",
    ],
    favourited: true,
    variants: ["Space Grey", "Silver"],
  },
  //https://www.jbhifi.com.au/products/hp-spectre-x360-evo-16-wquxga-oled-2-in-1-laptop-intel-i7-rc-a370m
  {
    id: 7,
    name: "Lenovo Legion 5i 15.6 inch FHD Gaming Laptop (12th Gen Intel i7) [GeForce RTX 3050Ti]",
    pricePerUnit: 2699,
    quantity: 11,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/593126-Product-0-I-637927218777154221_800x800.jpg?v=1657089172",
    ],
    favourited: false,
    variants: [],
  },
  //https://www.jbhifi.com.au/products/hp-pavilion-x360-14-fhd-2-in-1-laptop-512gb-intel-i5
  {
    id: 8,
    name: "HP Pavilion X360 14 inch FHD 2-in-1 Laptop (512GB) [Intel i5]",
    pricePerUnit: 1499,
    quantity: 22,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/592839-Product-0-I-637921021982226625_800x800.jpg?v=1656475961",
    ],
    favourited: false,
    variants: [],
  },
  //https://www.jbhifi.com.au/products/hp-victus-15-6-fhd-gaming-laptop-intel-i5-gtx-1650
  {
    id: 9,
    name: "HP Victus 15.6 inch FHD Gaming Laptop (Intel i5) [GTX 1650]]",
    pricePerUnit: 1599,
    quantity: 14,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/592843-Product-0-I-637921022577170763_800x800.jpg?v=1656479744",
    ],
    favourited: false,
    variants: [],
  },
  //https://www.jbhifi.com.au/products/msi-vector-gp76-17-3-full-hd-gaming-laptop-12th-gen-intel-i9rtx-3080
  {
    id: 10,
    name: "MSI Vector GP76 17.3 inch Full HD Gaming Laptop (12th Gen Intel i9)[RTX 3080]",
    pricePerUnit: 4899,
    quantity: 3,
    imageUrl: [
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/567160-Product-0-I-637934861578271696_800x800.jpg?v=1657853441",
    ],
    favourited: false,
    variants: [],
  },
];

export default students;
