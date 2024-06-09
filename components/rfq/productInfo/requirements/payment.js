import { useStore } from "@/useStore/details";
import { Select } from "antd";
import React, { useState } from "react";

const Payment = () => {
  const [
    updateRequirements,
    updateIncreaseProgress,
    updateDecreaseProgress,
    requirements,
    score,
    updateScore,
    attributes,
  ] = useStore((store) => [
    store.updateRequirements,
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,

    store.requirements,
    store.score,
    store.updateScore,
  ]);
  const [i, setI] = useState(1);

  const [require, setRequire] = useState(requirements)
//   console.log('sss',requirements);
  
//   console.log('sssdssdsd',require)
  

  return (
    <div>
      <div className="flex flex-col space-y-6">
        
      </div>
    </div>
  );
};

export default Payment;
