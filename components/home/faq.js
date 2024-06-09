import React from "react";
import FaqCard from "./faqCard";
import Link from "next/link";
const array = [
  {
    main: "Is there any minimum order quantity for purchasing hardware items?",
    text: "No, not at all. However, there can be some low-priced products with an additional delivery charge requirement to maintain feasible shipping costs.",
  },
  {
    main: "Is there any particular Request for Quotation(RFQ) percentage requirement?",
    text: "Yes, You must fill atleast 50 percent of the form to submit a request.",
  },
  {
    main: "Will my request be valid forever or it expires after some days ?",
    text: "Your Request will be valid for 7 days from the day of request submission",
  },
  {
    main: "How do I return my product if I'm dissatisfied with it?",
    text: "You could make a return request on the website and our delivery partner would come and collect the product within 2-3 days.",
  },
  {
    main: "What are the key things to keep in mind while buying hardware items?",
    text: "You must always buy hardware items from reputed brands and vendors. Moreover, ensure that you always take GST-compliant invoices from the vendor and keep them in your safe custody. Invoices are necessary proof if you want to stake a warranty claim at any point in time.",
  },
];

const Faq = () => {
  return (
    <div className="md:px-40 px-4 py-10">
      <p className="text-3xl font-bold pb-8 text-gray-800">FAQs</p>
      <div className="flex flex-col space-y-4">
        {array.map((item) => {
          return <FaqCard main={item.main} text={item.text} />;
        })}
      </div>
      <div className="flex flex-col bg-gray-100 w-3/4 mx-auto py-12 mt-12 space-y-6 items-center">
            <p className="font-bold text-gray-800 text-2xl">Any queries?</p>
            <Link href={""}>
              <div className="bg-cyan-600 text-lg px-10 w-fit py-2 font-semibold text-gray-800 hover:opacity-90 cursor-pointer rounded-sm">
               Contact Us
              </div>
            </Link>
        </div>
    </div>
  );
};

export default Faq;
