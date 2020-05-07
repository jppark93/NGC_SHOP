import React from "react";
import styled from "styled-components";

const Delivery = () => {
  return (
    <ItemDiv>
      <h3>배송안내</h3>
      <div>
        <BlackSpan>
          더네이쳐홀딩스의 모든 상품은 롯데택배로 발송되며, 배송추적을 원하시는
          경우
        </BlackSpan>
        <BlackSpan>
          롯데택배 사이트에서 송장번호 검색을 통하여 상품의 위치를 확인하실 수
          있습니다.
        </BlackSpan>
      </div>
      <h3>01. 택배비 부담 관련 안내</h3>
      <div>
        <BlackSpan>
          상품 하자, 오배송으로 인한 교환 및 반품 시 : 판매자 부담
        </BlackSpan>
        <BlackSpan>단순 변심으로 인한 교환 및 반품 시 : 구매자 부담</BlackSpan>
      </div>
      <h3>02. 교환/반품 방법 및 택배비 안내</h3>
      <div>
        <Bold>내셔널지오그래픽어패럴 공식 홈페이지에서 구매하셨을 시</Bold>
        <BlackSpan>
          ① 비용(교환/반품 동일): 왕복 \6,000 홈페이지 하단 계좌번호로 입금 후
          롯데택배{" "}
        </BlackSpan>
        <BlackSpan>
          &nbsp;&nbsp;&nbsp;이용하여 <Red>착불</Red> 발송 혹은 게시판/고객센터
          문의를 통하여 택배 회수 접수 요청
        </BlackSpan>
        <BlackSpan>
          ② 롯데택배 외 타 택배사 이용 시: 편도 \3,000 홈페이지 하단 계좌번호로
          입금 후 택배사
        </BlackSpan>
        <BlackSpan>&nbsp;&nbsp;&nbsp;이용하여 선불 발송</BlackSpan>
        <BlackSpan>③ 부분 교환/반품 진행 시에도 비용 동일</BlackSpan>
        <BlackSpan>
          ④ 상품 하자, 오배송으로 인한 교환 및 반품 시: 롯데택배 이용하여{" "}
          <Red>착불</Red>
          발송
        </BlackSpan>
        <Red>
          &nbsp;&nbsp;&nbsp;(타 택배사 이용 시 선불 발송 및 택배비 구매자
          부담으로 진행)
        </Red>
        <Bold style={{ marginTop: "15px" }}>
          내셔널지오그래픽 어패럴 공식 홈페이지에서 구매 후 반품 시 무통장 입금
          외 배송비 결제 방법
        </Bold>
        <BlackSpan>① 반품 배송 비용 차감 후 환불 가능</BlackSpan>
        <BlackSpan>
          ※ 교환 시에는 필히 무통장 입금으로 진행해주셔야 합니다.
        </BlackSpan>

        <Red>
          &nbsp;&nbsp;&nbsp;교환/반품 택배비 동봉하여 발송 후, 배송 중 분실되는
          경우 책임지지 않습니다.
        </Red>

        <BlackSpan>
          &nbsp;&nbsp;&nbsp;필히 “입금” 혹은 “차감 후 환불” 바랍니다.
        </BlackSpan>
        <BlackSpan>
          ※ 입금 계좌번호 : 기업은행 568-028379-04-026 (주)더네이쳐홀딩스
        </BlackSpan>
      </div>
      <h3>
        03. 내셔널지오그래픽어패럴 공식 홈페이지 외 온라인 몰에서 구매하셨을 시
      </h3>
      <div>
        <Bold>
          내셔널지오그래픽어패럴 공식 홈페이지 외 온라인 몰에서 구매하셨을 시
        </Bold>
        <BlackSpan>
          ① 비용 및 접수 방법 해당 몰 홈페이지/고객센터에서 확인/문의 후 진행
        </BlackSpan>
        <Red>
          ※ 배송비 동봉하여 발송 후, 배송 중 분실되는 경우 책임지지 않습니다.
        </Red>
      </div>
      <h3>04. 교환/반품이 불가한 경우</h3>
      <div>
        <BlackSpan>
          ① 교환/반품(환불) 기간 (상품 수령일로부터 7일)이 경과된 경우
        </BlackSpan>
        <BlackSpan>
          ② 고객님의 부주의로 인해 상품 가치가 훼손된 경우 (착용/사용 흔적,
          구성품의 파손 등)
        </BlackSpan>
        <BlackSpan>③ 상품의 사용 및 TAG 제거의 경우</BlackSpan>
        <BlackSpan>
          ④ 기타 상품 구매 전 상세페이지를 통한 상품 별 교환/반품 안내의 경우
        </BlackSpan>
        <BlackSpan>
          ⑤ 온라인 구매 시 (PC, 모바일) 내셔널지오그래픽 어패럴 오프라인 매장을
          통한 교환/반품 불가
        </BlackSpan>
      </div>
      <h3>05. 고객센터/반품주소</h3>
      <div>
        <BlackSpan>내셔널지오그래픽 어패럴 고객센터: 1588-2906</BlackSpan>
        <BlackSpan>
          KAKAO 플러스 친구: 내셔널지오그래픽 어패럴 고객센터
        </BlackSpan>
        <BlackSpan>
          상담 시간: 평일 10:00 (AM) ~ 5:00 (PM) / 토요일, 일요일, 공휴일 OFF
        </BlackSpan>
        <BlackSpan style={{ marginTop: "15px" }}>
          반품 주소: 경기도 이천시 모가면 대월로 221-15 더네이쳐홀딩스 이천
          물류센터 반품 담당자 앞
        </BlackSpan>
        <BlackSpan>전화번호: 02-1588-2906 (대표 전화번호)</BlackSpan>
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
  }
`;
const Bold = styled.span`
  font-size: 13px;
  padding-bottom: 3px;
  line-height: 1.5;
`;
const BlackSpan = styled.span`
  font-size: 13px;
  color: #111111;
  padding-bottom: 3px;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
`;
const Red = styled.span`
  color: red;
  font-size: 13px;
  padding-bottom: 3px;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
`;
const Empty = styled.div`
  width: 100%;
  height: 300px;
`;
export default Delivery;
