import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";
import FacebookLogin from "../Images/fblogin.png";

import { Link } from "react-router-dom";
import { stringify } from "querystring";

const SignIn = () => {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e: any) => {
    if (e.target.id === 'idBox')
      setId(e.target.value);
    else
      setPassword(e.target.value);
  };
  
  const tryLogin = () => {

    const xhr = new XMLHttpRequest();
    const data = {
      id: id,
      password: password,
    };

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 304) {
        var tests = JSON.parse(xhr.responseText);
        console.log('로그인 성공', xhr.responseText);
      } else {
        console.log('로그인 실패', xhr.responseText);
      }
    };
    xhr.open('POST', 'http://220.73.54.64:8999/accounts/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  }
  
  return (
    <Layout>
      <LoginBlock>
        <LoginBox>
          <Login>로그인</Login>
          <LoginDiv>
            <LoginForm>
              <FormTop>회원 로그인</FormTop>
              <IdPassForm>
                <LoginInput>
                  <input type="text" placeholder="아이디" onChange={onChangeId} id='idBox'/>
                  <input type="password" placeholder="비밀번호" onChange={onChangeId} id='pwBox'/>
                </LoginInput>
                <LoginBtn onClick={tryLogin}>로그인</LoginBtn>
              </IdPassForm>
              <FacebookLoginBtn>
                <img src={FacebookLogin} alt="zz" />
              </FacebookLoginBtn>
              <EmptyLine />
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <SignUpBtn>
                  <button>회원가입</button>
                </SignUpBtn>
              </Link>
            </LoginForm>
          </LoginDiv>
        </LoginBox>
      </LoginBlock>
    </Layout>
  );
};
const Wrap = styled.div`
  display: flex;
  width: 100%;
`;
const LoginBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 1440px;
  height: 800px;
  margin-top: 150px;
  margin-bottom: 80px;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 593px;
  height: 593px;
`;
const Login = styled.div`
  width: 100%;
  height: 42px;
  color: #111111;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
`;
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 831px;
  border: 1px solid #dcdcdc;
`;
const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 471px;
  height: 492px;

  margin-top: 60px;
`;
const FormTop = styled.div`
  color: #222222;
  height: 27px;
  font-size: 18px;
  font-weight: 600;
`;
const IdPassForm = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 112px;
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 292px;
  height: 112px;
  margin-right: 30px;
  input {
    width: 292px;
    height: 36px;
    background-color: #ffffff;
    padding-left: 8px;
    border: 1px solid #d6d6d6;
    margin-top: 12px;
    font-size: 12px;
    color: #d6d6d6;
    &:placeholder-shown {
      font-size: 12px;
    }
  }
`;
const LoginBtn = styled.button`
  width: 158px;
  height: 91px;
  background-color: #000000;
  color: white;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: #ffff00;
    color: black;
  }
`;
const FacebookLoginBtn = styled.div`
  display: flex;
  width: 471px;
  height: 64px;
  margin-top: 30px;
  cursor: pointer;
  img {
    background-size: 100%;
  }
`;
const EmptyLine = styled.div`
  width: 100%;
  border: 1px solid #dcdcdc;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SignUpBtn = styled.div`
  display: flex;
  width: 100%;
  height: 66px;
  text-decoration: none;
  button {
    width: 100%;
    background-color: #666666;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
`;
export default SignIn;
