import { Modal } from "antd";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import CompanyCard from "./CompanyCard";
import CompanyUpdate from "./companyUpdate";
import { Company } from "@/useStore/company";
import { SideBar } from "@/useStore/sideBar";
import { User } from "@/useStore/user";
import { Seller } from "@/useStore/seller";

const ComapnyDetails = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [
    updateCompany,
    updateBussinessType,
    updateCompanySize,
    updateSellingChannel,
    updateAnnualValue,
    updateSuppliers,
    updateMarketImport,
    updateMarketSell,
    updatePurchasingRole,
    updatePanCardNo,
    updateGstNo,
    openCompanyModel,
    updateCompanyUpdate,
    updateOpenCompanyModel,
  ] = Company((store) => [
    store.updateCompany,
    store.updateBussinessType,
    store.updateCompanySize,
    store.updateSellingChannel,
    store.updateAnnualValue,
    store.updateSuppliers,
    store.updateMarketImport,
    store.updateMarketSell,
    store.updatePurchasingRole,
    store.updatePanCardNo,
    store.updateGstNo,
    store.openCompanyModel,
    store.updateCompanyUpdate,
    store.updateOpenCompanyModel,
  ]);

  const [userDetails] = User((store) => [store.userDetails]);
  const [userChange] = SideBar((store) => [store.userChange]);
  const [updateSellerCategory] = Seller((store) => [store.updateSellerCategory]);
  useEffect(() => {
    // console.log('hiiiiiiiiii');

    if (userDetails) {
      updateCompany(userDetails?.company);
      updateBussinessType(userDetails?.bussinessType);
      updateCompanySize(userDetails?.companySize);
      updateSellingChannel(userDetails?.sellingChannel);
      updateAnnualValue(userDetails?.annualValue);
      updateSuppliers(userDetails?.suppliers);
      updateMarketImport(userDetails?.marketImport);
      updateMarketSell(userDetails?.marketSell);
      updatePurchasingRole(userDetails?.purchasingRole);
      updatePanCardNo(userDetails?.panCardNo);
      updateGstNo(userDetails?.gstNo);
      updateSellerCategory(userDetails?.sellerCategory);
    }
  }, [userChange]);

  return (
    <div className="bg-white rounded-lg pb-8  ">
      <div className="px-6 flex py-4 justify-between items-center">
        <p className="font-medium text-xl text-gray-800">Comapny Info</p>
        <div
          onClick={() => {
            updateCompanyUpdate("all");
            updateOpenCompanyModel(true);
          }}
          className="cursor-pointer"
        >
          <HiPencil size={25} className="hover:text-cyan-500" />
        </div>

        <Modal
          title="Edit Company Info"
          centered
          open={openCompanyModel}
          //   onOk={() => setModalOpen(false)}
          footer={null}
          onCancel={() => updateOpenCompanyModel(false)}
          width={600}
        >
          <CompanyUpdate />
        </Modal>
      </div>
      <div className="border-t px-6">
        <div className="flex space-x-3 items-center cursor-pointer group">
          <p className="py-3 font-semibold text-base">
            {userDetails?.company?.companyName} which is established in{" "}
            {userDetails?.company?.year}
          </p>
          <HiPencil
            size={22}
            className="invisible group-hover:visible hover:text-cyan-500 "
            onClick={() => {
              updateCompanyUpdate("companyName");
              updateOpenCompanyModel(true);
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CompanyCard
            name="bussinessTupe"
            title={"Bussiness Type"}
            value={userDetails?.bussinessType}
          />
          <CompanyCard
            name="companySize"
            title={"Company Size"}
            value={userDetails?.companySize}
          />
          <CompanyCard
            name="marketImport"
            title={"Markets you import from"}
            value={userDetails?.marketImport}
          />
          <CompanyCard
            name="marketSell"
            title={"Markets you sell to"}
            value={userDetails?.marketSell}
          />
          <CompanyCard
            name="sellingChannel"
            title={"Your selling channel"}
            value={userDetails?.sellingChannel}
          />
          <CompanyCard
            name="annualValue"
            title={"Annual Sourcing Value (Rupee)"}
            value={userDetails?.annualValue}
          />
          <CompanyCard
            name="suppliers"
            title={"Types of suppliers you are looking for"}
            value={userDetails?.sellerCategory}
          />
          <CompanyCard
            name="purchasingRole"
            title={"Your Purchasing Decision Role"}
            value={userDetails?.purchasingRole}
          />
          <CompanyCard
            name="panCardNo"
            title={"Pan Card Number"}
            value={userDetails?.panCardNo}
          />
          <CompanyCard
            name="gstNo"
            title={"GST Number"}
            value={userDetails?.gstNo}
          />
        </div>
      </div>
    </div>
  );
};

export default ComapnyDetails;
