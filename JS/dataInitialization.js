"use strict";

let imgSliderArr = [
  new Showcase(
    "summer sale",
    "https://ifg-marketing.imgix.net/surfdome/github/com/home/slider/large/20220726-com-l.jpg",
    1
  ),
  new Showcase(
    "New Arrivals",
    "https://ifg-marketing.imgix.net/surfdome/github/com/home/slider/large/20220131-gen-l.jpg",
    2
  ),
];

let deliveryInfoArr = [
  new DeliveryInfo("FREE UK STANDARD DELIVERY ON ORDERS OVER 30£", "truck", 1),
  new DeliveryInfo("FREE PAPERLESS RETURNS", "box-seam", 2),
  new DeliveryInfo("TRY BEFORE YOU BUY, WITH KLARNA", "sunglasses", 3),
];

let ShopCategoriesArr = [
  new ShopCategories("summerSurf", "Surfboards", "Wetsuits", "Accessories"),
  new ShopCategories("backToSchool", "shoes", "Backpacks", "Accessories"),
  new ShopCategories("flipFlops", "Men", "Women", "All"),
];

let brandsArr = [
  new Brands(
    "North Face logo",
    "https://static5-surfdome.imgix.net/github/com/brands/the_north_face.jpg"
  ),
  new Brands(
    "Billabong logo",
    "https://ifg-marketing.imgix.net/surfdome/github/com/brands/billabong-01.jpg"
  ),
  new Brands(
    "Volcom logo",
    "https://ifg-marketing.imgix.net/surfdome/github/com/brands/volcom2.jpg"
  ),
  new Brands(
    "Patagonia logo",
    "https://static5-surfdome.imgix.net/github/com/brands/patagonia.jpg"
  ),
  new Brands(
    "Vans logo",
    "https://static5-surfdome.imgix.net/github/com/brands/vans.jpg"
  ),
  new Brands(
    "Hurley logo",
    "https://static5-surfdome.imgix.net/github/com/brands/hurley.jpg"
  ),
];

let shopArr = [
  new Shop("Slowtide", "1"),
  new Shop("Campaing", "2"),
  new Shop("Poler", "3"),
];

let shopArr2 = [
  new Shop("UvProtection", "4"),
  new Shop("Carhartt", "5"),
  new Shop("NewArrivals", "6"),
];

let shopArr3 = [
  new Shop("OuterKnown", "7", "6"),
  new Shop("SustainableGear", "8", "6"),
];

let descArr = [
  new Desc(
    "#ENJOY THE RIDE",
    "Whether its a Cornish beach, a mountain slope in the Alps or a street spot in London - we feel your passion. Weve got your weekday commutes and weekend escapes covered. Well get you kitted out with the best action sports gear whether you are doing a road trip searching for the perfect wave, freeriding in the backcountry, learning new tricks at the snowdome or shredding your local skatepark. We are doing our best to protect our favourite places and get involved in protecting the environment. We are the natural shopping destination for you to get out there and enjoy the ride."
  ),
];

let subscribeArr = [
  new Subscribe(
    "SUBSCRIBE TO SURFDOME",
    "By entering your email address above you explicitly consent for us to hold your data in accordance with our Privacy Policy",
    "Reviews 85,872 ⬆ Excellent",
    "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
  ),
];

let sliderArr = [
  new Slider(
    "Sofboards",
    "https://ifg-marketing.imgix.net/surfdome/plp-banners/surfboards/20220523-surfboards-static-1.jpg",
    1
  ),
  new Slider(
    "Shortboards",
    "https://ifg-marketing.imgix.net/surfdome/plp-banners/surfboards/20220523-surfboards-static-2.jpg",
    2
  ),
  new Slider(
    "Mid-lengths",
    "https://ifg-marketing.imgix.net/surfdome/plp-banners/surfboards/20220523-surfboards-static-3.jpg",
    3
  ),
];

let surfboardsArr = [
  new SurfboardItem(
    "Pyzel",
    "Pyzel Wildcat Futures Surfboard - Clear",
    "twin",
    612,
    "https://internetfusion.imgix.net/1641469.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    1
  ),
  new SurfboardItem(
    "CHANNEL ISLANDS",
    "Channel Islands Bobby Quad Surfboard - White",
    "quad",
    670,
    "https://internetfusion.imgix.net/1629745.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    2
  ),
  new SurfboardItem(
    "CHANNEL ISLANDS",
    "Channel Islands Free Scrubber Surfboard - White",
    "twin",
    670,
    "https://internetfusion.imgix.net/1629765.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    3
  ),
  new SurfboardItem(
    "Pyzel",
    "Pyzel Pyzalien 2 Futures 5 Fin Surfboard - Clear",
    "thruster",
    608,
    "https://internetfusion.imgix.net/1265684.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    4
  ),
  new SurfboardItem(
    "CHANNEL ISLANDS",
    "Channel Islands FishBeard Futures Twin Fin Surfboard - White",
    "twin",
    670,
    "https://internetfusion.imgix.net/1138345.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    5
  ),
  new SurfboardItem(
    "HAYDENSHAPES",
    "Haydenshapes Hypto Krypto FutureFlex FCS II 5 Fin Surfboard - White",
    "thruster",
    680,
    "https://internetfusion.imgix.net/1215112.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    6
  ),
  new SurfboardItem(
    "CHANNEL ISLANDS",
    "Channel Islands Two Happy Futures Thruster Surfboard - Clear",
    "thruster",
    650,
    "https://internetfusion.imgix.net/1373083.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    7
  ),
  new SurfboardItem(
    "Pyzel",
    "Pyzel Gremlin Futures 5 Fin Surfboard - Fluro Green",
    "twin",
    650,
    "https://internetfusion.imgix.net/768004.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    8
  ),
  new SurfboardItem(
    "CHANNEL ISLANDS",
    "Channel Islands Twin Pin Surfboard - White Teal",
    "twin",
    787,
    "https://internetfusion.imgix.net/1629805.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    9
  ),
  new SurfboardItem(
    "LOST",
    "Lost Hydra Futures 5 Fin Surfboard - Light Blue / Dark Blue",
    "thruster quad",
    668,
    "https://internetfusion.imgix.net/1407618.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    10
  ),
  new SurfboardItem(
    "LOST",
    "Lost Sub Driver 2.0 FCS II Thruster Surfboard - Clear",
    "thruster",
    630,
    "https://internetfusion.imgix.net/1407646.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    11
  ),
  new SurfboardItem(
    "LOST",
    "Lost x MR California Twin FCS II Thruster Surfboard - Rail Spray",
    "thruster twin",
    653,
    "https://internetfusion.imgix.net/1407617.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    12
  ),
  new SurfboardItem(
    "LOST",
    "Lost El Patron FCS II Thruster Surfboard - Clear",
    "thruster",
    620,
    "https://internetfusion.imgix.net/1407618.jpg?auto=format,compress&cs=srgb&fit=fill&fill=solid&w=280&h=280&dpr=1",
    13
  ),
];

// export default {imgSliderArr, deliveryInfoArr, brandsArr, shopArr, subscribeArr, surfboardsArr};