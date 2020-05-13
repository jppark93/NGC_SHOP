import React, { useState } from "react";
import styled from "styled-components";
import Camera from "../../Images/camera.png";
import Comment from "../../Components/Comment";
const Review = (props: any) => {
  const [size, setSize] = useState<string>("");
  const [ment, setMent] = useState<string>("");
  const [arr, setArr] = useState<Array<{ size: string; ment: string }>>([]);

  const SIZE = (e: any) => {
    setSize(e.target.value);
    console.log(size);
  };
  const MENT = (e: any) => {
    setMent(e.target.value);
    console.log(ment);
    console.log(ment.length);
  };

  return (
    <ItemDiv>
      <h3>플러스리뷰({arr.length})</h3>
      <Grade>
        <ReviewNum>
          <GradeNum>
            <h4>평가</h4>
            <strong>0</strong>
          </GradeNum>
          <Ul>
            <li>
              리뷰등록 <h4>{arr.length}건</h4>
            </li>
            <li>
              포토리뷰 <h4>0건</h4>
            </li>
            <li>
              사용자조회 <h4>0건</h4>
            </li>
          </Ul>
        </ReviewNum>
      </Grade>
      <Ment
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          setMent("");
          setSize("");
          if (size.length === 0 && ment.length === 0) {
            alert("글을 작성해주세요");
          } else {
            setArr(arr.concat({ size: size, ment: ment }));
          }
        }}
      >
        <Size>
          <h4>SIZE</h4> <input type="text" value={size} onChange={SIZE} />
        </Size>
        <TextDiv>
          <input type="textarea" value={ment} onChange={MENT} />
        </TextDiv>
        <BtnDiv>
          <BtnBox>
            <button type="button">
              <img src={Camera} alt="file" />
            </button>
            <input type="file" className="file" />
          </BtnBox>
          <ReviewBtn>
            <button type="submit">리뷰등록</button>
          </ReviewBtn>
        </BtnDiv>
      </Ment>
      <CommentBox>
        {arr.map((el, index) => {
          if (el.size === "" && el.ment === "") {
            return <div />;
          } else {
            return <Comment key={index} size={el.size} ment={el.ment} />;
          }
        })}

        <Pagination>
          <ul>
            <li>
              <span>1</span>
            </li>
          </ul>
        </Pagination>
      </CommentBox>
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
`;
const Grade = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 192px;
  border: 1px solid #dbdbdb;
`;
const ReviewNum = styled.div`
  display: flex;
  width: 371.38px;
  height: 150px;
  border-right: 1px solid #dbdbdb;
`;
const GradeNum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 125px;
  height: 150px;
  margin-left: 50px;
  color: #111111;
  font-weight: bold;
  h4 {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 24px;
    font-size: 16px;
  }
  strong {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    font-size: 48px;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 145px;
  height: 142px;
  font-size: 12px;
  background-color: #f8f8f8;
  color: #111111;
  li {
    display: flex;
    width: 145px;
    height: 34px;
    padding: 10px 15px;
    h4 {
      margin-left: auto;
      font-weight: bold;
    }
  }
`;
const Ment = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 353px;
  border: 1px solid #f0f0f0;
  margin-top: 50px;
`;
const Size = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  background-color: #f8f8f8;
  h4 {
    display: flex;
    align-items: center;
    width: 140px;
    height: 14px;
    margin-left: 50px;
  }
  input {
    width: 280px;
    height: 31px;
    padding: 0px 10px;
  }
`;
const TextDiv = styled.div`
  display: flex;
  width: 100%;
  height: 172px;
  font-size: 12px;
  color: #111111;
  border: 1px solid #f0f0f0;
  input {
    width: 100%;
    height: 100%;
    padding: 5px;
    border: none;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  width: 100%;
  height: 61px;
  color: #111111;
  margin: -1px 0px 0px;
  border: 1px solid #f0f0f0;
`;
const BtnBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 68px;
  height: 59px;
  button {
    width: 100%;
    height: 100%;
    background-color: white;

    img {
      background-size: 100%;
    }
  }
  input {
    position: absolute;
    left: 1px;
    width: 68px;
    height: 100%;
    opacity: 0;
  }
`;

const ReviewBtn = styled.div`
  display: flex;
  margin-left: auto;
  width: 140px;
  height: 60px;
  button {
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    &:hover {
      background-color: #ffdb00;
      color: black;
    }
  }
`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 200px;
`;
const Pagination = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  color: #111111;
  font-weight: bold;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
    padding-top: 22px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      color: black;
      border: 1px solid black;
    }
  }
`;
export default Review;
