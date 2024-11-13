import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardList = [
    {
      image:
        "https://cdn.media.amplience.net/i/office/3587245748_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "adidas",
      decription: "Handball Spezial Trainers Brown Earth Strata Offwhite Gum",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/3587225540_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "adidas",
      decription: "Handball Spezial Trainers Offwhite Black Gum",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/3836886071_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "UGG",
      decription: "Tasman Slippers Chestnut",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/4434668080_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "adidas",
      decription: "Samba OG Trainers Cream White Black Sand Strata",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/4360845026_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "OFFICE",
      decription: "Clint 7 Eye Lace Up Trainers Black",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/5123646244_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
      title: "ASICS",
      decription: "GT-2160 Trainers White Sweet Pink",
    },
    {
      image:
        "https://cdn.media.amplience.net/i/office/4224951875_lh.jpg?$newpicture$&w=456&h=489&fmt=auto&qlt=default",
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
