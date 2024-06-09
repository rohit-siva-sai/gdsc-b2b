import Link from "next/link";
import React from "react";
const array = [
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864416074433568366/1662453905583/mild-steel-ms-0.png",
    title: "Mild Steel",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864574686732752671/1662372128988/stainless-steel-ss-0.png",
    title: "Stainless Steel",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864007987755227990/1662382192334/non-ferrous-non-ferrous-0.png",
    title: "Non Ferrous",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864218128626751051/1661914897754/polymers-polymers-0.png",
    title: "Polymers",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864216983510456782/1663229097795/chemicals-chemicals-0.png",
    title: "Chemicals",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/865832350670393641/1663237406214/pipes-pipes-0.png",
    title: "Pipes",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/864452691307272957/1661920750742/petroleum-image-0.png",
    title: "Petroleum",
  },
  {
    bgImage:
      "https://d86af0gufpxog.cloudfront.net/unsafe/202x140/https://ofbtech.s3.amazonaws.com/images/943234501910207890/1680698031837/agrochemicals-agrochemicals-0.png",
    title: "Agrochemicals",
  },
];

const Main1 = () => {
  return (
    <div className="">
      
      <div className="relative overflow-hidden  ">
        <picture>
          <img
            src="https://static-assets.business.amazon.com/assets/in/herobanners/allhero/v2/196_MRO.jpg.transform/2048x682/image.jpg"
            alt=""
          />
        </picture>
        <div className="absolute top-0 left-0 py-20   w-1/2 flex flex-col md:px-32 justify-center  ">
        <div className="flex justify-between flex-col">
          <p className="font-semibold  text-white stroke">Sell Better</p>
          <p className="font-semibold  text-white stroke">Buy Better</p>
        </div>
        <p className="font-semibold text-lg text-end text-white">The one stop shopping destination !!!</p>
      
         
        </div>
      </div>
      <div className="flex justify-center py-4 space-x-14">
        {array.map((item) => {
          return (
            <div>
              <picture>
                <img src={item.bgImage} alt="" className="w-24 py-2" />
              </picture>
              <p className="text-xs font-semibold text-center">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main1;
