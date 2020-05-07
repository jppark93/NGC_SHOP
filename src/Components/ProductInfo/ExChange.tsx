import React from "react";
import styled from "styled-components";

const ExChange = () => {
  return (
    <ItemDiv>
      <h3>교환 및 반품안내</h3>
      <div>
        <span>
          - 상품 택(tag)제거 또는 개봉으로 상품 가치 훼손 시에는 상품수령후 7일
          이내라도 교환 및 반품이 불가능합니다.
        </span>
        <span>
          - 저단가 상품, 일부 특가 상품은 고객 변심에 의한 교환, 반품은 고객께서
          배송비를 부담하셔야 합니다(제품의 하자,배송오류는 제외)
        </span>
        <span>
          - 일부 상품은 신모델 출시, 부품가격 변동 등 제조사 사정으로 가격이
          변동될 수 있습니다.
        </span>
        <span>
          - 신발의 경우, 실외에서 착화하였거나 사용흔적이 있는 경우에는
          교환/반품 기간내라도 교환 및 반품이 불가능 합니다.
        </span>
        <span>
          - 수제화 중 개별 주문제작상품(굽높이,발볼,사이즈 변경)의 경우에는
          제작완료, 인수 후에는 교환/반품기간내라도 교환 및 반품이 불가능
          합니다.{" "}
        </span>
        <span>
          - 수입,명품 제품의 경우, 제품 및 본 상품의 박스 훼손, 분실 등으로 인한
          상품 가치 훼손 시 교환 및 반품이 불가능 하오니, 양해 바랍니다.
        </span>
        <span>
          - 일부 특가 상품의 경우, 인수 후에는 제품 하자나 오배송의 경우를
          제외한 고객님의 단순변심에 의한 교환, 반품이 불가능할 수 있사오니, 각
          상품의 상품상세정보를 꼭 참조하십시오.{" "}
        </span>
      </div>
      <h3>환불안내</h3>
      <div>
        <span>
          - 상품 청약철회 가능기간은 상품 수령일로 부터 7일 이내 입니다.
        </span>
      </div>
      <h3>AS안내</h3>
      <div>
        <span>
          - 소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수
          있습니다.
        </span>
        <span>- A/S는 판매자에게 문의하시기 바랍니다.</span>
      </div>
      <Empty />
    </ItemDiv>
  );
};
const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h3 {
    font-size: 18px;
    width: 100%;
    height: 82px;
    padding: 45px 0px 10px;
    color: #111111;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
    span {
      font-size: 13px;
      color: #111111;
      padding-bottom: 3px;
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
      font-family: "Raleway", sans-serif;
      line-height: 1.5;
    }
  }
`;
const Empty = styled.div`
  width: 100%;
  height: 300px;
`;
export default ExChange;
