import React from "react";
import Card from "./components/Card";
import Shoes_1 from "./assets/Shoes_1.webp";
import Shoes_2 from "./assets/Shoes_2.webp";
import Shoes_3 from "./assets/Shoes_3.webp";
import Shoes_4 from "./assets/Shoes_4.webp";
import Shoes_5 from "./assets/Shoes_5.webp";
import Shoes_6 from "./assets/Shoes_6.webp";
import Shoes_7 from "./assets/Shoes_7.webp";

const App = () => {
  const cardList = [
    {
      image: Shoes_1,
      title: "adidas",
      decription: "Handball Spezial Trainers Brown Earth Strata Offwhite Gum",
    },
    {
      image: Shoes_2,
      title: "adidas",
      decription: "Handball Spezial Trainers Offwhite Black Gum",
    },
    {
      image: Shoes_3,
      title: "UGG",
      decription: "Tasman Slippers Chestnut",
    },
    {
      image: Shoes_4,
      title: "adidas",
      decription: "Samba OG Trainers Cream White Black Sand Strata",
    },
    {
      image: Shoes_5,
      title: "OFFICE",
      decription: "Clint 7 Eye Lace Up Trainers Black",
    },
    {
      image: Shoes_6,
      title: "ASICS",
      decription: "GT-2160 Trainers White Sweet Pink",
    },
    {
      image: Shoes_7,
      title: "Crocs",
      decription: "Classic Clogs Toddler Pink Tweed Glitter",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {cardList.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.decription}
        />
      ))}
    </div>
  );
};

export default App;
