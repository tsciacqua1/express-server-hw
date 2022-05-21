const Contenedor = require("../utils");
const newCont = new Contenedor("products");

(async () => {
  const data = [
    {
      title: "Apple Macbook Pro",
      price: 1500,
      thumbnail:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
    },
    {
      title: "Apple Iphone 13 Pro Max",
      price: 1200,
      thumbnail:
        "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/i/p/iphone-13-pro-max-graphite-selectyyyyy_3.jpg",
    },
    {
      title: "Apple Watch 5",
      price: 400,
      thumbnail:
        "https://images-na.ssl-images-amazon.com/images/I/71luYyAPVTL._AC_SL1500_.jpg",
    },
  ];
  await newCont.save(data[0]);
  await newCont.save(data[1]);
  await newCont.save(data[2]);
})();
