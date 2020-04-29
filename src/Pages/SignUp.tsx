import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import Next from "../Images/next.png";
import Next2 from "../Images/next2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  let checkAll_temp = checkAll;
  let check1_temp = check1;
  let check2_temp = check2;
  const onCheckChanged = (e: any) => {
    switch (e.target.id) {
      case "checkAll":
        checkAll_temp = check1_temp = check2_temp = e.target.checked;
        setCheckAll(e.target.checked);
        setCheck1(e.target.checked);
        setCheck2(e.target.checked);
        break;
      case "check1":
        check1_temp = e.target.checked;
        setCheck1(e.target.checked);
        break;
      case "check2":
        check2_temp = e.target.checked;
        setCheck2(e.target.checked);
        break;
    }

    if (check1_temp && check2_temp) setCheckAll(true);
    else setCheckAll(false);
  };

  return (
    <Layout>
      <SignUpBlock>
        <TOP>
          <h3>회원가입</h3>
          <ol>
            <li>
              <h1>01</h1>&nbsp;약관동의&nbsp;&nbsp;
              <img src={Next} />
            </li>

            <li>
              <h1>02</h1>&nbsp;정보입력&nbsp;&nbsp;
              <img src={Next2} />
            </li>

            <li>
              <h1>03</h1>&nbsp;가입완료
            </li>
          </ol>
        </TOP>
        <TOS>
          <h3>약관동의</h3>
          <AgreeBox>
            <AbTop>
              <CheckBox>
                <input
                  type="checkbox"
                  id="checkAll"
                  onChange={onCheckChanged}
                  checked={checkAll}
                />
                <span className="checkmark" />
              </CheckBox>
              <span>
                내셔널지오그래픽 어패럴의 모든 약관을 확인하고 전체 동의합니다.
                <h1>(전체동의, 선택항목도 포함됩니다.)</h1>
              </span>
            </AbTop>
            <AgreementOne>
              <CheckBox2>
                <input
                  type="checkbox"
                  id="check1"
                  onChange={onCheckChanged}
                  checked={check1}
                />
                <span className="checkmark" />
                <span>
                  <h1>(필수)</h1>이용약관
                </span>
              </CheckBox2>

              <TextArea>
                <div>
                  제1조(목적) 표준약관 제10023호 이 약관은 (주)더네이쳐홀딩스
                  회사(전자거래 사업자)가 운영하는 내셔널지오그래픽 어패럴
                  사이버 몰(이하 "몰"이라 한다)에서 제공하는 인터넷 관련
                  서비스(이하 "서비스"라 한다)를 이용함에 있어 사이버몰과
                  이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다. ※
                  「PC통신등을 이용하는 전자거래에 대해서도 그 성질에 반하지
                  않는한 이 약관을 준용합니다」
                </div>
                <div>
                  {" "}
                  제2조(정의) ① "몰"이란 (주)더네이쳐홀딩스 회사가 재화 또는
                  용역을 이용자에게 제공하기 위하여 컴퓨터등 정보통신설비를
                  이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의
                  영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도
                  사용합니다. ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이
                  제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ ‘회원’이라
                  함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의
                  정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를
                  계속적으로 이용할 수 있는 자를 말합니다. ④ ‘비회원’이라 함은
                  회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를
                  말합니다.
                </div>
                <div>
                  {" "}
                  제3조(약관등의 명시와 설명 및 개정) ① "몰"은 이 약관의 내용과
                  상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할
                  수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소,
                  사업자등록번호, 통신판매업신고번호, 개인정보 보호책임자등을
                  이용자가 쉽게 알 수 있도록 "몰"의 초기 서비스화면(전면)에
                  게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼
                  수 있도록 할 수 있습니다. ② "몰"은 이용자가 약관에 동의하기에
                  앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건
                  등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의
                  연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야
                  합니다. ③ "몰"은 전자상거래등에서의소비자보호에관한법률,
                  약관의규제에관한법률, 전자거래기본법, 전자서명법,
                  정보통신망이용촉진등에관한법률, 방문판매등에관한법률,
                  소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을
                  개정할 수 있습니다. ④ "몰"이 약관을 개정할 경우에는 적용일자
                  및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그
                  적용일자 7일이전부터 적용일자 전일까지 공지합니다. 다만,
                  이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일
                  이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰“은 개정전
                  내용과 개정후 내용을 명확하게 비교하여 이용자가 알기 쉽도록
                  표시합니다. ⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그
                  적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미
                  체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다.
                  다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를
                  원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 "몰"에
                  송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이
                  적용됩니다. ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의
                  해석에 관하여는 전자상거래등에서의 소비자보호에 관한 법률,
                  약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래
                  등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
                </div>
                <div>
                  {" "}
                  제4조(서비스의 제공 및 변경) ① "몰"은 다음과 같은 업무를
                  수행합니다. 1. 재화 또는 용역에 대한 정보 제공 및 구매계약의
                  체결 2. 구매계약이 체결된 재화 또는 용역의 배송 3. 기타 "몰"이
                  정하는 업무 ② "몰"은 재화 또는 용역의 품절 또는 기술적 사양의
                  변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는
                  용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는
                  용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의
                  내용을 게시한 곳에 즉시 공지합니다. ③ "몰"이 제공하기로
                  이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는
                  기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를
                  이용자에게 통지 가능한 주소로 즉시 통지합니다. ④ 전항의 경우
                  "몰"은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만,
                  "몰"이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
                  아니합니다.
                </div>
                <div>
                  {" "}
                  제5조(서비스의 중단) ① "몰"은 컴퓨터 등 정보통신설비의
                  보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는
                  서비스의 제공을 일시적으로 중단할 수 있습니다. ② "몰"은
                  제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여
                  이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, "몰"이
                  고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                  ③ 사업종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로
                  서비스를 제공할 수 없게 되는 경우에는 "몰"은 제8조에 정한
                  방법으로 이용자에게 통지하고 당초 "몰"에서 제시한 조건에 따라
                  소비자에게 보상합니다. 다만, "몰"이 보상기준 등을 고지하지
                  아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 "몰"에서
                  통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게
                  지급합니다.
                </div>
                <div>
                  {" "}
                  제6조(회원가입) ① 이용자는 "몰"이 정한 가입 양식에 따라
                  회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서
                  회원가입을 신청합니다. ② "몰"은 제1항과 같이 회원으로 가입할
                  것을 신청한 이용자 중 다음 각호에 해당하지 않는 한 회원으로
                  등록합니다. 1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에
                  회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한
                  회원자격 상실후 3년이 경과한 자로서 "몰"의 회원재가입 승낙을
                  얻은 경우에는 예외로 한다. 2. 등록 내용에 허위, 기재누락,
                  오기가 있는 경우 3. 기타 회원으로 등록하는 것이 "몰"의 기술상
                  현저히 지장이 있다고 판단되는 경우 ③ 회원가입계약의 성립시기는
                  "몰"의 승낙이 회원에게 도달한 시점으로 합니다. ④ 회원은
                  제15조제1항에 의한 등록사항에 변경이 있는 경우, 즉시 전자우편
                  기타 방법으로 "몰"에 대하여 그 변경사항을 알려야 합니다.
                </div>
                <div>
                  {" "}
                  제7조(회원 탈퇴 및 자격 상실 등) ① 회원은 "몰"에 언제든지
                  탈퇴를 요청할 수 있으며 "몰"은 즉시 회원탈퇴를 처리합니다. ②
                  회원이 다음 각호의 사유에 해당하는 경우, "몰"은 회원자격을
                  제한 및 정지시킬 수 있습니다. 1. 가입 신청시에 허위 내용을
                  등록한 경우 2. "몰"을 이용하여 구입한 재화등의 대금, 기타
                  "몰"이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지
                  않는 경우 3. 다른 사람의 "몰" 이용을 방해하거나 그 정보를
                  도용하는 등 전자상거래 질서를 위협하는 경우 4. "몰"을 이용하여
                  법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는
                  경우 ③ "몰"이 회원 자격을 제한·정지 시킨후, 동일한 행위가
                  2회이상 반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우
                  "몰"은 회원자격을 상실시킬 수 있습니다. ④ "몰"이 회원자격을
                  상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게
                  이를 통지하고, 회원등록 말소전에 최소한 30일 이상의 기간을
                  정하여 소명할 기회를 부여합니다.
                </div>
                <div>
                  {" "}
                  제8조(회원에 대한 통지) ① "몰"이 회원에 대한 통지를 하는 경우,
                  회원이 "몰"과 미리 약정하여 지정한 전자우편 주소로 할 수
                  있습니다. ② "몰"은 불특정다수 회원에 대한 통지의 경우
                  1주일이상 "몰" 게시판에 게시함으로서 개별 통지에 갈음할 수
                  있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을
                  미치는 사항에 대하여는 개별통지를 합니다.
                </div>
                <div>
                  {" "}
                  제9조(구매신청)
                  <span>
                    {" "}
                    "몰"이용자는 "몰"상에서 다음 또는 이와 유사한 방법에 의하여
                    구매를 신청하며, "몰"은 이용자가 구매신청을 함에 있어서
                    다음의 각 내용을 알기 쉽게 제공하여야 합니다.
                  </span>
                  <span>
                    {" "}
                    단, 회원인 경우 제2호 내지 제4호의 적용을 제외할 수
                    있습니다.
                  </span>
                  <span> 1. 재화등의 검색 및 선택</span>
                  <span>
                    2. 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호)
                    등의 입력
                  </span>
                  <span>
                    3. 약관내용, 청약철회권이 제한되는 서비스, 배송료·설치비
                    등의 비용부담과 관련한 내용에 대한 확인{" "}
                  </span>
                  <span>
                    4. 이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는
                    표시(예, 마우스 클릭)
                  </span>
                  <span>
                    {" "}
                    5. 재화등의 구매신청 및 이에 관한 확인 또는 "몰"의 확인에
                    대한 동의
                  </span>
                  <span> 6. 결제방법의 선택</span>{" "}
                </div>
                <div>
                  제10조 (계약의 성립){" "}
                  <span>
                    ① "몰"은 제9조와 같은 구매신청에 대하여 다음 각호에 해당하면
                    승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는
                    경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는
                    법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야
                    합니다.
                  </span>
                  <span> 1. 신청 내용에 허위, 기재누락, 오기가 있는 경우</span>
                  <span>
                    {" "}
                    2. 미성년자가 담배, 주류등 청소년보호법에서 금지하는 재화 및
                    용역을 구매하는 경우
                  </span>
                  <span>
                    {" "}
                    3. 기타 구매신청에 승낙하는 것이 "몰" 기술상 현저히 지장이
                    있다고 판단하는 경우
                  </span>
                  <span>
                    {" "}
                    ② "몰"의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게
                    도달한 시점에 계약이 성립한 것으로 봅니다.
                  </span>
                  <span>
                    {" "}
                    ③ "몰"의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인
                    및 판매가능 여부, 구매신청의 정정 취소등에 관한 정보등을
                    포함하여야 합니다.
                  </span>
                </div>
                부칙 1. 이 약관은 2018년 01월 01일부터 적용됩니다.
              </TextArea>
            </AgreementOne>
            <AgreementOne>
              <CheckBox2>
                <input
                  type="checkbox"
                  id="check2"
                  onChange={onCheckChanged}
                  checked={check2}
                />
                <span className="checkmark" />
                <span>
                  <h1>(필수)</h1>개인정보 수집 및 이용
                </span>
              </CheckBox2>

              <TextArea>
                <div>
                  <span>1. - 목적 : 이용자 식별 및 본인여부 확인</span>
                  <span>- 항목 : 이름, 아이디, 비밀번호</span>
                  <span>- 보유 및 이용기간 : 회원탈퇴 후 5일까지</span>
                </div>
                <div>
                  <span>2. - 목적 : 민원 등 고객 고충처리</span>
                  <span>- 항목 : 이메일, 휴대전화번호</span>
                  <span>- 보유 및 이용기간 : 회원탈퇴 후 5일까지</span>
                </div>
                <div>
                  <span>3. - 목적 : 만 14세 미만 아동 확인</span>
                  <span>- 항목 : 법정 생년월일</span>
                  <span>- 보유 및 이용기간 : 회원탈퇴 후 5일까지</span>
                </div>
              </TextArea>
            </AgreementOne>
          </AgreeBox>
          <ButtonBox>
            <Link to="/signin">
              <button type="button" className="bt">
                이전단계
              </button>
            </Link>
            <Link to="/signup2">
              <NextBtn id="nextBtn" disabled={!checkAll}>
                다음단계
              </NextBtn>
            </Link>
          </ButtonBox>
        </TOS>
      </SignUpBlock>
    </Layout>
  );
};
const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  height: 810px;

  margin-top: 85px;
`;

const TOP = styled.div`
  display: flex;

  width: 100%;
  height: 63px;
  border-bottom: 1px solid #999;
  font-size: 14px;
  h3 {
    font-size: 27px;
    color: #222222;
    font-weight: bold;
  }
  ol {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  li {
    display: flex;
    margin-right: 10px;
    color: #d1d1d1;
    :first-child {
      color: #dd3d42;
    }
    h1 {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
const TOS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 743px;
  height: 747px;

  margin-top: 70px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    height: 44px;
    padding-bottom: 17px;
    border-bottom: 1px solid #999;
  }
`;
const AgreeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 743px;
  height: 448px;

  margin-top: 30px;
`;
const AbTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 25px;
  font-size: 12px;
  color: #111111;
  font-weight: bold;

  span {
    display: flex;
  }
  h1 {
    font-size: 11px;
    color: #717171;
    font-weight: bold;
    padding-right: 3px;
  }
`;

const AgreementOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 166px;

  margin-top: 30px;
  span {
    display: flex;
    font-size: 12px;
    h1 {
      color: #dd3d42;
      font-weight: bold;
      padding-right: 4px;
    }
  }
`;
const TextArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 131px;
  border: 1px solid #eeeeee;
  border-top: 1px solid #111;
  div {
    width: 90%;
    margin-bottom: 10px;
    span {
      padding-bottom: 10px;
      line-height: 1.2;
    }
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  .bt {
    width: 150px;
    height: 45px;
    margin-right: 10px;
    background-color: white;
    border: 1px solid #e6e6e6;
    color: #222;
    font-size: 12px;
  }
`;
const NextBtn = styled.button`
  width: 150px;
  height: 45px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #dd3d42;
  cursor: pointer;
`;
const CheckBox = styled.label`
  display: flex;
  position: relative;
  padding-left: 25px;
  margin-bottom: 20px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    border: 1px solid #111;
  }
  &:hover input ~ .checkmark {
    background-color: white;
  }
  input:checked ~ .checkmark {
    background-color: #111;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const CheckBox2 = styled.label`
  display: flex;
  position: relative;
  padding-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: white;
    border: 1px solid #111;
  }
  &:hover input ~ .checkmark {
    background-color: white;
  }
  input:checked ~ .checkmark {
    background-color: white;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark:after {
    left: 3px;
    top: 0px;
    width: 5px;
    height: 8px;
    border: solid black;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
export default SignUp;
