import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Next from "../Images/next.png";
import Next2 from "../Images/next2.png";


const SignUpTwo = (props: any) => {
  const [id, setId] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [idError, setIdError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dupIdCheck, setDupIdCheck] = useState(false);
  const [dupEmailCheck, setDupEmailCheck] = useState(false);

  const onSignUpButtonClick = () => {

    // 체크1. 작성하지 않은 칸이 있는가?
    if (!((id.length > 0)
      && pw1.length > 0
      && pw2.length > 0
      && email.length > 0
      && address.length > 0)){
        alert("작성하지 않은 항목이 존재합니다.");
        return;
    }
      
    // 체크2. pw2와 pw1은 같은가?
    if (!(pw1 === pw2)){
      alert("두 비밀번호의 내용이 다릅니다.");
      return;
    }

    // 체크3. 입력 형식에서 벗어난 칸이 있는가?
    if (!((!idError && id.length > 2)
      && (!emailError && email.length > 4))){
        alert("입력 형식에서 벗어난 항목이 존재합니다.");
        return;
    }

    // 체크4. 중복체크는 모두 통과했는가?
    if (!(dupIdCheck && dupEmailCheck)){
      alert("중복체크가 되지 않은 항목이 존재합니다.");
      return;
    }

    const xhr = new XMLHttpRequest();
    const data = {
      id: id,
      password: pw1,
      email: email,
      address: address,
    };

    xhr.onload = function () {
      if (xhr.status === 201) {
        let tests = JSON.parse(xhr.responseText);
        console.log("회원가입 성공", xhr.responseText);
        alert("회원가입이 완료되었습니다.");
        props.history.push("./");
      } else {
        console.log("회원가입 실패", xhr.responseText);
      }
    };
    xhr.open("POST", "http://220.73.54.64:8999/accounts/signup");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  };

  const onInputChanged = (e: any) => {
    switch (e.target.id) {
      case "idBox":
        const input_id = /^[a-zA-Z]{2,15}|[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}$/;
        setId(e.target.value);
        setIdError(input_id.test(e.target.value) === false);
        setDupIdCheck(false);
        break;

      case "pwBox1":
        setPw1(e.target.value);
        break;

      case "pwBox2":
        setPw2(e.target.value);
        break;

      case "emailBox":
        const input_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        setEmail(e.target.value);
        setEmailError(input_email.test(e.target.value) === false);
        setDupEmailCheck(false);
        break;

      case "addressBox":
        setAddress(e.target.value);
        break;
    }
  };

  const onDupCheck = (e: any) => {

    switch(e.target.id){
      case "dupIdCheckButton":
        if (!(!idError && id.length > 2)) return;
        break;
      case "dupEmailCheckButton":
        if (!(!emailError && email.length > 4)) return;
        break;
    }

    const xhr = new XMLHttpRequest();
    const componentId = e.target.id;
    const data = {
      id: id,
      email: email,
    };

    xhr.onload = function () {
      if (xhr.status === 201) {
        const result : boolean = xhr.response === "true" ? true : false;
        switch(componentId){
          case "dupIdCheckButton":
            setDupIdCheck(result);
            break;
          case "dupEmailCheckButton":
            setDupEmailCheck(result);
            break;
        }
      }
    };

    switch(e.target.id){
      case "dupIdCheckButton":
        xhr.open("POST", "http://220.73.54.64:8999/accounts/dupIdCheck");
        break;
      case "dupEmailCheckButton":
        xhr.open("POST", "http://220.73.54.64:8999/accounts/dupEmailCheck");
        break;
      default:
        return;
    }

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  };

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
                <input
                  type="text"
                  id="idBox"
                  onChange={onInputChanged}
                  value={id}
                />
                <Btn type="button" onClick={onDupCheck} id="dupIdCheckButton">중복체크</Btn>
                { dupIdCheck ? (
                  <div className="blue">
                  사용할 수 있는 아이디입니다.
                </div>
                ) : ((!idError && id.length > 2) ? (
                      <Red>아이디 중복 체크를 하지 않았거나, 이미 가입된 아이디입니다.</Red>
                    ) : (
                      <Red>올바르지 않은 아이디 형식입니다.</Red>
                    )
                )}
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>비밀번호
              </div>
              <div className="right">
                <input
                  type="password"
                  id="pwBox1"
                  onChange={onInputChanged}
                  value={pw1}
                />
                <div className="blue">
                  사용가능한 패스워드입니다.
                </div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>비밀번호 확인
              </div>
              <div className="right">
                <input
                  type="password"
                  id="pwBox2"
                  onChange={onInputChanged}
                  value={pw2}
                />
                <div className="blue">
                  {pw1 === pw2
                    ? "두 비밀번호가 일치합니다."
                    : "두 비밀번호가 일치하지 않습니다."}
                </div>
              </div>
            </FormBox>
            <FormBox>
              <div className="left">
                <h1>*</h1>이메일
              </div>
              <div className="right">
                <input
                  type="text"
                  id="emailBox"
                  onChange={onInputChanged}
                  value={email}
                />
                <Btn type="button" onClick={onDupCheck} id="dupEmailCheckButton">중복체크</Btn>
                { dupEmailCheck ? (
                  <div className="blue">
                  사용할 수 있는 이메일입니다.
                  </div>
                ) : ((!emailError && email.length > 4) ? (
                      <Red>이메일 중복 체크를 하지 않았거나, 이미 가입된 이메일입니다.</Red>
                    ) : (
                      <Red>올바르지 않은 이메일 형식입니다.</Red>
                    )
                )}
              </div>
            </FormBox>
            <FormBox>
              <div className="left">&nbsp;주소</div>
              <div className="right">
                <div>
                  <input
                    type="text"
                    id="addressBox"
                    onChange={onInputChanged}
                    value={address}
                  />
                  <Btn>우편번호검색</Btn>
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
              <NextBtn onClick={onSignUpButtonClick}>회원가입</NextBtn>
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
    .blue {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #329cff;
    }
  }
`;
const Red = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: red;
`;
const Btn = styled.button`
  margin-left: 10px;
  width: 88px;
  height: 30px;
  background-color: white;
  border: 1px solid #111;
  font-size: 12px;
  font-weight: bold;
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
export default withRouter(SignUpTwo);
