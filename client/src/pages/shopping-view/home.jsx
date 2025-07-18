import { Button } from "@/components/ui/button";
// import bannerOne from "../../assets/banner-1.webp";
// import bannerTwo from "../../assets/banner-2.webp";
// import bannerThree from "../../assets/banner-3.webp";


import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,

  LaptopIcon,
  CpuIcon,
  MousePointerIcon,
  RouterIcon,
  GamepadIcon
} from "lucide-react";

import {
  SiHp, SiDell, SiLenovo, SiApple,
  SiAsus, SiAcer,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";




import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithIcon = [
  { id: "laptop", label: "Laptop", icon: LaptopIcon },
  { id: "pc components", label: "PC Components", icon: CpuIcon },
  { id: "accessories", label: "Accessories", icon: MousePointerIcon },
  { id: "gaming gear", label: "Gaming Gear", icon: GamepadIcon },
  { id: "networking & connectivityr", label: "Networking & Connectivity", icon: RouterIcon },
];

const brandsWithIcon = [
  { id: "Microsoft", label: "Microsoft", icon: FaMicrosoft },
  { id: "apple", label: "Apple", icon: SiApple },
  { id: "hp", label: "HP", icon: SiHp  },
  { id: "dell", label: "Dell", icon: SiDell },
  { id: "lenovo", label: "Lenovo", icon: SiLenovo },
  { id: "asus", label: "Asus", icon: SiAsus},
  { id: "acer", label: "Acer", icon: SiAcer },
  
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">  
  <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center rounded-lg">
  {featureImageList && featureImageList.length > 0
    ? featureImageList.map((slide, index) => (
        <img
          src={slide?.image}
          key={index}
          alt={`Slide ${index}`}
          className={`transition-opacity duration-1000 object-contain max-w-[90%] max-h-[90%] ${
            index === currentSlide ? "opacity-100 absolute" : "opacity-0 absolute"
          }`}
        />
      ))
    : null}

  {/* Left Button */}
  <Button
    variant="outline"
    size="icon"
    onClick={() =>
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + featureImageList.length) % featureImageList.length
      )
    }
    className="absolute top-1/2 left-4 -translate-y-1/2 shadow-md"
  >
    <ChevronLeftIcon className="w-5 h-5 text-gray-800" />
  </Button>

  {/* Right Button */}
  <Button
    variant="outline"
    size="icon"
    onClick={() =>
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length)
    }
    className="absolute top-1/2 right-4 -translate-y-1/2 shadow-md"
  >
    <ChevronRightIcon className="w-5 h-5 text-gray-800" />
  </Button>
</div>



      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                <ShoppingProductTile
                  handleGetProductDetails={handleGetProductDetails}
                  product={productItem}
                  handleAddtoCart={handleAddtoCart}
                />
              ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
