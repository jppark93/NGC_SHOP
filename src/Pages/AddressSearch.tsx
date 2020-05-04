import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';
import Layout from "../Components/Layout";


const AddressSearch = (props: any) => {

  // 주소 api
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    window.opener.bigAddressBox.value = fullAddress;
    window.close();
  }

  return (
    <DaumPostcode
      onComplete={handleComplete}
      autoClose="true"
      { ...props }
    />
  );
};
export default withRouter(AddressSearch);
