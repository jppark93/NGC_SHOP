import React, { useState } from "react";
import styled from "styled-components";
import Camera from "../../Images/camera.png";
import Comment from "../../Components/Comment";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux";
//import { changeCheckBasket, delBasket } from "../Redux/shopBasket";

const Review = (props: any) => {

  const { loginState, userId } = useSelector((redux: RootState) => redux.login);
  const dispatch = useDispatch();

  const [size, setSize] = useState<string>("");
  const [ment, setMent] = useState<string>("");
  const [currentpage, setCurrentNum] = useState<number>(1);
  const [num, setNum] = useState<number>(0);
  const [arr, setArr] = useState<
    Array<{ username: string, size: string, ment: string, like: number, indexKey: number, date: string, likeMembers: Array<string> }>
  >(props.comments);
  const pageArr: Array<any> = [];
  const slidePage: number = 5;
  const Last: number = currentpage * slidePage;
  const First: number = Last - slidePage;

  const slide = arr.slice(First, Last);
  
  const changeLike = (data: any) => {
    if (!loginState){
      alert("로그인 해주세요.");
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("좋아요 증가완료", xhr.responseText);
      } else {
        console.log("좋아요 증가실패", xhr.responseText);
      }
    };
    xhr.open("POST", "http://220.73.54.64:8999/details/comments/like");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({...data, goodsname: props.goodsname, loginname: userId}));

    let new_arr = JSON.parse(JSON.stringify(arr));
    new_arr.map((info : any) => {
      if (info.username === data.username &&
        info.size === data.size &&
        info.date === data.date &&
        info.indexKey === data.indexKey){
          if (info.likeMembers === undefined) {
            info.likeMembers = [userId];
            info.like += 1;
          }
          else {
            if (info.likeMembers.includes(userId)) {
              info.likeMembers = info.likeMembers.filter((el: any) => el !== userId);
              info.like -= 1;
            }
            else {
              info.likeMembers.push(userId);
              info.like += 1;
            }
          }
        }
      });
    setArr(new_arr);
  };
  const SIZE = (e: any) => {
    setSize(e.target.value);
  };
  const MENT = (e: any) => {
    setMent(e.target.value);
  };
  const pageChange = (e: number) => {
    setCurrentNum(e);
  };
  const ReviewDel = (info: any) => {

    if (info.username !== userId){
      alert("해당 리뷰의 작성자만 지울 수 있습니다.");
      return;
    }

    setArr(
      arr.filter((el) => {
        if (
          !(el.username === info.username &&
            el.size === info.size &&
            el.date === info.date &&
            el.indexKey === info.indexKey
          )
        )
          return true;
        else {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            if (xhr.status === 201) {
              console.log("리뷰 삭제완료", xhr.responseText);
            } else {
              console.log("리뷰 삭제실패", xhr.responseText);
            }
          };
          xhr.open("POST", "http://220.73.54.64:8999/details/comments/delete");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify({ ...el, goodsname: props.goodsname }));
          return false;
        }
      })
    );
  };
  for (let i = 1; i <= Math.ceil(arr.length / slidePage); i++) {
    pageArr.push(i);
  }
  const pageNumber = () => {
    return pageArr.map((el: any, index: number) => {
      return (
        <li onClick={() => pageChange(index + 1)}>
          <span>{el}</span>{" "}
        </li>
      );
    });
  };
  const pushReview = (data: any) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 201) {
        console.log("리뷰 등록완료", xhr.responseText);
      } else {
        console.log("리뷰 등록실패", xhr.responseText);
      }
    };
    xhr.open("POST", "http://220.73.54.64:8999/details/comments/push");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }
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

          if (!loginState){
            alert("리뷰를 작성하시려면 로그인 해주세요.");
            return;
          }

          setMent("");
          setSize("");

          if (size.length === 0 && ment.length === 0) {
            alert("글을 작성해주세요");
          } else {
            const date = new Date();
            const data = { username: userId, size: size, ment: ment, indexKey: num, like: 0, likeMembers: [], date: `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}` };
            const new_arr = arr;
            new_arr.unshift(data);
            setArr(
              new_arr
              // details 테이블에 comment 업데이트
            );
            pushReview({ ...data, goodsname: props.goodsname });
            setNum(num + 1);

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
        {slide.map((el, index) => {
          return (
            <Comment
              info={el}
              delete={ReviewDel}
              changeLike={changeLike}
              likeState={el.likeMembers.includes(userId)}
            />
          );
        })}

        <Pagination>
          <ul>{pageNumber()}</ul>
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
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
      font-family: "Raleway", sans-serif;
      margin-left: 5px;
      border: 1px solid black;
      cursor: pointer;
      :hover {
        border: 1px solid gray;
      }
    }
  }
`;
export default Review;
