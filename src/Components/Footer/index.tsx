import * as React from "react";
import styled from "styled-components";
import Foot1 from "../../Images/footer1.png";
import Foot2 from "../../Images/footer2.png";
import Foot3 from "../../Images/footer3.png";
const Footer = () => {
  return (
    <FooterBlock>
      <TOP>
        <InfoTop>
          <TopFirst>
            <ImgBlock>
              <FootImg1 src={Foot1} alt="footer1"></FootImg1>
            </ImgBlock>
            <ContactInfo>
              <ContactInfoChild>
                <Num>
                  <Bold>고객센터</Bold>1588-2906
                </Num>
                <Num2>
                  <Bold2>평일 :</Bold2>10:00(AM) ~ 5:00(PM)
                </Num2>
                <Num2>토/일, 공휴일은 휴무입니다.</Num2>
              </ContactInfoChild>
              <ContactInfoChild>
                <Num>
                  <Bold>계좌번호</Bold>568-028379-04-026
                </Num>
                <Num2>
                  <Bold2>은행 :</Bold2>기업은행
                </Num2>
                <Num2>예금주 : (주)더네이쳐홀딩스</Num2>
              </ContactInfoChild>
            </ContactInfo>
          </TopFirst>
          <TopSecond>
            <ImgBlock>
              <FootImg1 src={Foot2} alt="footer2"></FootImg1>
            </ImgBlock>
            <NoticeInfo>
              <NoticeInfoChild>
                내셔널지오그래픽 어페럴 스마트앱 출시!
              </NoticeInfoChild>
              <NoticeInfoChild>
                [내셔널지오그래픽] 더 오리지널6 텐트설치 영상
              </NoticeInfoChild>
              <NoticeInfoChild>
                [내셔널지오그래픽] 더 오리지널 텐트4 설치 영상
              </NoticeInfoChild>
            </NoticeInfo>
          </TopSecond>
          <TopThird>
            <ImgBlock>
              <FootImg1 src={Foot3} alt="footer3"></FootImg1>
            </ImgBlock>
            <ThirdInfoBlock>
              <InfomationInfo>
                <InfomationLi>회사소개</InfomationLi>
                <InfomationLi>이용안내</InfomationLi>
                <InfomationLi>개인정보처리방침</InfomationLi>
              </InfomationInfo>
              <InfomationInfo>
                <InfomationLi>브랜드 사이트</InfomationLi>
                <InfomationLi>이용약관</InfomationLi>
                <InfomationLi>매장안내</InfomationLi>
              </InfomationInfo>
            </ThirdInfoBlock>
          </TopThird>
        </InfoTop>
      </TOP>
      <InfoBottom>
        <FooterBottomBlock>
          <span>
            (주)더네이쳐홀딩스 주소 ㄧ 서울특별시 금천구 가산디지털2로 30
            (알에스엠타워) 11층
          </span>
          <span>
            대표 | 박영준 사업자등록번호 ㄧ 106-86-26388 통신판매업신고번호 ㄧ
            제2015-서울금천-0414호 개인정보관리자 ㄧ 전제구
          </span>
          <span>
            대표번호 ㄧ 1588-2906 팩스번호 ㄧ 02-3274-0805 메일 ㄧ
            jackman@thenatureholdings.co.kr
          </span>
        </FooterBottomBlock>
        <Copyright>
          ©2018 National Geographic Partners LLC. All rights reserved.
        </Copyright>
      </InfoBottom>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 443px;
  background-color: #2d2d2d;
`;
const TOP = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const InfoTop = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 220px;
  color: #b1b1b1;
`;
const TopFirst = styled.div`
  width: 460px;
  height: 118px;
`;
const ImgBlock = styled.div`
  display: flex;
  width: 100%;
  height: 18px;
`;

const FootImg1 = styled.img`
  border-left: 3px solid #b1b1b1;
  padding-left: 10px;
`;
const ContactInfo = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;
const ContactInfoChild = styled.div`
  display: flex;
  width: 200px;
  height: 68px;
  flex-direction: column;
  &:nth-child(2) {
    width: 250px;
    margin-left: auto;
  }
  font-size: 13px;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
`;
const Bold = styled.span`
  font-weight: 800;
  font-size: 15px;
  padding-right: 8px;
`;
const Num = styled.span`
  font-size: 15px;
  padding-bottom: 8px;
`;
const Bold2 = styled.span`
  font-weight: 800;
  font-size: 13px;
  padding-right: 8px;
`;
const Num2 = styled.span`
  font-size: 13px;
  padding-bottom: 10px;
`;

const TopSecond = styled.div`
  width: 300px;
  height: 130px;

  margin-left: 65px;
  margin-top: 8px;
`;
const NoticeInfo = styled.ul`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
  width: 100%;
  font-size: 12px;
  margin-top: 28px;
`;
const NoticeInfoChild = styled.li`
  width: 100%;
  height: 26px;
  border-bottom: 1px solid #383838;
  padding-top: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    text-decoration: underline;
  }
  &:nth-child(3) {
    border: none;
  }
`;
const TopThird = styled.div`
  display: flex;
  flex-direction: column;
  width: 279px;
  height: 125px;

  margin-left: 94px;
  margin-top: 1px;
`;
const ThirdInfoBlock = styled.div`
  display: flex;
  width: 100%;
`;
const InfomationInfo = styled.ul`
  display: flex;
  flex-direction: column;
  width: 139.25px;
  margin-top: 30px;

  margin-right: auto;
`;
const InfomationLi = styled.li`
  width: 139.25px;
  height: 25px;
  font-size: 12px;
  font-weight: 800;

  cursor: pointer;
`;
const InfoBottom = styled.div`
  width: 100%;
  height: 144px;

  margin-top: 35px;
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap");
  font-family: "Noto Regular";
`;
const FooterBottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 63px;
  font-size: 12px;
  color: #555555;
  span {
    padding-bottom: 10px;
  }
`;
const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21px;
  color: #555555;
  margin-top: 25px;
  font-size: 13px;
  font-weight: 800;
`;
