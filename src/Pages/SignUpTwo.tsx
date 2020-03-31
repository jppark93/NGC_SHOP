import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import Next from "../Images/next.png";
import Next2 from "../Images/next2.png";

const SignUpTwo = () => {
  return (
    <Layout>
      <SignUpBlock>
        <TOP>
          <h3>회원가입</h3>
          <ol>
            <li>
              <h1>01</h1>&nbsp;약관동의&nbsp;&nbsp;
              <img src={Next2} />
            </li>

            <li>
              <h1>02</h1>&nbsp;정보입력&nbsp;&nbsp;
              <img src={Next} />
            </li>

            <li>
              <h1>03</h1>&nbsp;가입완료
            </li>
          </ol>
        </TOP>
        <TOS>
          <span className="Top">
            기본정보
            <h2>* 표시는 반드시 입력하셔야 하는 항목입니다</h2>
          </span>
          <SignUpForm>
            <FormBox>
              <div className="left">
                <h1>*</h1>아이디
              </div>
              <div className="right">
                <input type="text" />
                <div>사용가능한 아이디입니다.</div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>비밀번호
              </div>
              <div className="right">
                <input type="password" />
                <div>사용가능한 패스워드입니다.</div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>비밀번호 확인
              </div>
              <div className="right">
                <input type="text" />
                <div>비밀번호가 서로 다릅니다.</div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>이메일
              </div>
              <div className="right">
                <input type="text" />
                <div>사용가능한 이메일입니다.</div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">&nbsp;주소</div>
              <div className="right">
                <div>
                  <input type="text" />
                  <button type="button">우편번호검색</button>
                </div>
                <input type="text" />
              </div>
            </FormBox>
            <ButtonBox>
              <Link to="/signin">
                <button type="button" className="bt">
                  취소
                </button>
              </Link>
              <Link to="/">
                <NextBtn>회원가입</NextBtn>
              </Link>
            </ButtonBox>
          </SignUpForm>
        </TOS>
      </SignUpBlock>
    </Layout>
  );
};
const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 810px;

  margin-top: 85px;
`;
const TOP = styled.div`
  display: flex;

  width: 100%;
  height: 63px;
  padding-bottom: 30px;
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
    padding-top: 20px;
    margin-left: auto;
  }
  li {
    display: flex;
    margin-right: 10px;
    color: #d1d1d1;
    :nth-child(2) {
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
  .Top {
    display: flex;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    height: 44px;
    padding-bottom: 17px;
    border-bottom: 1px solid #999;
  }
  h2 {
    margin-left: auto;
    font-size: 12px;
    padding-top: 10px;
    color: #dd3d42;
  }
`;
const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 692px;
`;

const FormBox = styled.tr`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  .left {
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 186px;
    height: 100%;
    color: #111111;
    font-size: 12px;
    font-weight: bold;
    background-color: #fbfbfb;
    h1 {
      font-size: 10px;
      color: red;
    }
  }
  .right {
    width: 557px;
    padding: 15px 0px 15px 15px;
    input {
      border: 1px solid #e6e6e6;
      width: 380px;
      height: 31px;
      padding-left: 10px;
      &:nth-child(2) {
        width: 205px;
        margin-top: 10px;
      }
    }
    button {
      margin-left: 10px;
      width: 88px;
      height: 30px;
      background-color: white;
      border: 1px solid #111;
    }
    div {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #329cff;
    }
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-top: 70px;
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
`;
const Address = styled.input``;
export default SignUpTwo;
