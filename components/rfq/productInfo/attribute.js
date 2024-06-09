import React from "react";
import { Cascader, Select } from "antd";
import { useStore } from "@/useStore/details";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect } from "react";
const { SHOW_CHILD } = Cascader;

const application = [
  {
    label: "Building",
    value: "Building",
  },
  {
    label: "Fencing",
    value: "Fencing",
  },
  {
    label: "Construction",
    value: "Construction",
  },
  {
    label: "Manfacturing",
    value: "Manfacturing",
  },
  {
    label: "Rope",
    value: "Rope",
  },
];
const service = [
  {
    label: "Bending",
    value: "Bending",
  },
  {
    label: "Binding",
    value: "Binding",
  },
  {
    label: "Cutting",
    value: "Cutting",
  },
  {
    label: "Decoiling",
    value: "Decoiling",
  },
  {
    label: "Punching",
    value: "Punching",
  },
  {
    label: "Welding",
    value: "Welding",
  },
];
const surface = [
  {
    label: "Intended",
    value: "Intended",
  },
  {
    label: "Smooth",
    value: "Smooth",
  },
  {
    label: "Spiral",
    value: "Spiral",
  },
];
const technic = [
  {
    label: "Copper Clad",
    value: "Copper Clad",
  },
  {
    label: "Copper coated",
    value: "Copper coated",
  },
  {
    label: "Drawn wire",
    value: "Drawn wire",
  },
];

const Attribute = ({ category }) => {
  const [attributes, updateAttributes, productCategory] = useStore((store) => [
    store.attributes,
    store.updateAttributes,
    store.productCategory,
  ]);
  const [values, setValues] = useState(attributes);
  const [attribute, setAttribute] = useState(null);
  const onChange = (value) => {
    console.log(value);
  };
  const getAttributes = async (id) => {
    try {
      const rfqAttribute = doc(db, "attributes", id); // 'people' is the collection name
      const rfqDoc = await getDoc(rfqAttribute);
      if (rfqDoc.exists()) {
        const rfqdata = rfqDoc.data();
        return rfqdata;
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document:", error);
      return null;
    }
  };

  const getValues = async () => {
    const data = await getAttributes(category);
    setAttribute(data);
    console.log("attributes", data);
  };
  useEffect(() => {
    getValues();
  }, [category]);

  return (
    <div >
      {attribute && (
        <div className="flex flex-col space-y-1">
          <label className="leading-7 text-base font-semibold text-gray-800">
            Further Specified Attribute (s)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
            {attribute &&
              Object.keys(attribute).map((item) => {
                return (
                  <div>
                    <Select
                      style={{
                        width: "100%",
                      }}
                      mode="multiple"
                      allowClear
                      className="font-semibold"
                      placeholder={item}
                      maxTagCount="responsive"
                      // defaultValue={application}
                      onChange={(value) => {
                        setValues((prev) => ({ ...prev, application: value }));
                      }}
                      onBlur={() => {
                        updateAttributes(values);
                      }}
                      options={attribute[item]}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Attribute;
