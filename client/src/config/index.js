export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "laptop", label: "Laptop" },
      { id: "pc components", label: "PC Components" },
      { id: "accessories", label: "Accessories" },
      { id: "gaming gear", label: "Gaming Gear" },
      { id: "networking & connectivity", label: "Networking & Connectivity" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "hp", label: "HP" },
      { id: "dell", label: "Dell" },
      { id: "apple", label: "Apple" },
      { id: "asus", label: "Asus" },
      { id: "acer", label: "Acer" },
      { id: "lenovo", label: "Lenovo" },
      { id: "microsoft", label: "Microsoft" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "laptop",
    label: "Laptop",
    path: "/shop/listing",
  },
  {
    id: "pc components",
    label: "PC components",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "gaming gear",
    label: "Gaming gear",
    path: "/shop/listing",
  },
  {
    id: "networking & connectivityr",
    label: "Networking & Connectivity",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  Laptop: "Laptop",
  pcComponents: "PC Components",
  accessories: "Accessories",
  gamingGear: "gaming gear",
  networkingConnectivity: "networking & connectivity"
};



export const brandOptionsMap = {
  hp: "HP",
  dell: "Dell",
  apple: "Apple",
  asus: "Asus",
  acer: "Acer",
  lenovo: "Lenovo",
  microsoft:"Microsoft"
};



export const filterOptions = {
  category: [
    { id: "laptop", label: "Laptop" },
    { id: "pc components", label: "PC Components" },
    { id: "accessories", label: "Accessories" },
    { id: "gaming gear", label: "Gaming Gear" },
    { id: "networking & connectivity", label: "Networking & Connectivity" },
  ],
  brand: [
    { id: "hp", label: "HP" },
    { id: "dell", label: "Dell" },
    { id: "apple", label: "Apple" },
    { id: "asus", label: "Asus" },
    { id: "acer", label: "Acer" },
    { id: "lenovo", label: "Lenovo" },
    {id: "microsoft", label: "Microsoft" }
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
