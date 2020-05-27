import React from "react";
import styled from "styled-components";
type Bool = {
  isOpen: boolean;
};
const MenuModal = ({ isOpen }: Bool, props: any) => {
  return (
    <React.Fragment>
      {isOpen ? (
        <React.Fragment>
          <ModalDiv>
            <ParentsUl>
              <ParentsLi>
                <MenuContDiv>
                  <span>20SS프로모션</span>
                  <UlOne>
                    <LiOne>5월 가정의달 아우터 프로모션</LiOne>
                    <LiOne>GREEN TEE 캠페인</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>NEW ARRIVAL</span>
                  <UlOne>
                    <LiOne>HOT SUMMER</LiOne>
                    <LiOne>20SS APPAREL</LiOne>
                    <LiOne>20SS BAG&SHOES</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>MAN</span>
                  <ULSECOND>
                    <MiddleLi>
                      <LowestSpan>OUTER</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>자켓</LowestLi>
                        <LowestLi>다운</LowestLi>
                        <LowestLi>베스트</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>TOP</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>맨투맨</LowestLi>
                        <LowestLi>후디</LowestLi>
                        <LowestLi>티셔츠</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>BOTTOM</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>팬츠</LowestLi>
                        <LowestLi>트레이닝 팬츠</LowestLi>
                        <LowestLi>반바지</LowestLi>
                        <LowestLi>레깅스</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                  </ULSECOND>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>WOMAN</span>
                  <ULSECOND>
                    <MiddleLi>
                      <LowestSpan>OUTER</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>자켓</LowestLi>
                        <LowestLi>다운</LowestLi>
                        <LowestLi>베스트</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>TOP</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>맨투맨</LowestLi>
                        <LowestLi>후디</LowestLi>
                        <LowestLi>티셔츠</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>BOTTOM</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>팬츠</LowestLi>
                        <LowestLi>트레이닝 팬츠</LowestLi>
                        <LowestLi>반바지</LowestLi>
                        <LowestLi>레깅스</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                  </ULSECOND>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>KIDS</span>
                  <ULSECOND>
                    <MiddleLi>
                      <LowestSpan>OUTER</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>다운</LowestLi>
                        <LowestLi>베스트</LowestLi>
                        <LowestLi>자켓</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>TOP</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>맨투맨</LowestLi>
                        <LowestLi>후디</LowestLi>
                        <LowestLi>티셔츠</LowestLi>
                      </ULTHIRD>
                    </MiddleLi>
                    <MiddleLi>
                      <LowestSpan>BOTTOM</LowestSpan>
                      <ULTHIRD>
                        <LowestLi>팬츠</LowestLi>
                        <LowestLi>반바지</LowestLi>
                        <UlOne style={{ borderTop: "none" }}>
                          <LiOne>BAG</LiOne>
                          <LiOne>CAP</LiOne>
                          <LiOne>ACC</LiOne>
                        </UlOne>
                      </ULTHIRD>
                    </MiddleLi>
                  </ULSECOND>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>BAG</span>
                  <UlOne>
                    <LiOne>백팩</LiOne>
                    <LiOne>도트백</LiOne>
                    <LiOne>서브백</LiOne>
                    <LiOne>워터백</LiOne>
                    <LiOne>멀티백</LiOne>
                    <LiOne>ACC</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>HEAD WEAR</span>
                  <UlOne>
                    <LiOne>CAP</LiOne>
                    <LiOne>HAT</LiOne>
                    <LiOne>BEANIE</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>FOOT WEAR</span>
                  <UlOne>
                    <LiOne>스니커즈</LiOne>
                    <LiOne>슬리퍼</LiOne>
                    <LiOne>시즌아이템</LiOne>
                    <LiOne>SOCKS</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>SKIN CARE</span>
                  <UlOne>
                    <LiOne>SKIN CARE</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>SUITCASE</span>
                  <UlOne>
                    <LiOne>케리어</LiOne>
                    <LiOne>케리어 세트</LiOne>
                    <LiOne>기내용</LiOne>
                    <LiOne>화물용</LiOne>
                    <LiOne>액세서리</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
              <ParentsLi>
                <MenuContDiv>
                  <span>CAMPING</span>
                  <UlOne>
                    <LiOne>텐트</LiOne>
                    <LiOne>타프</LiOne>
                    <LiOne>테이블&의자</LiOne>
                    <LiOne>코팰/주방</LiOne>
                    <LiOne>액세서리</LiOne>
                  </UlOne>
                </MenuContDiv>
              </ParentsLi>
            </ParentsUl>
          </ModalDiv>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};
const ModalDiv = styled.div`
  position: absolute;
  display: flex;
  top: 50px;
  width: 100%;
  border-bottom: 1px solid gray;
  background-color: white;
  z-index: 99;
`;

const ParentsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 600px;
  overflow-y: auto;
  padding: 20px 20px 0px 20px;
  margin-top: 30px;
`;
const ParentsLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 10%;
`;
const MenuContDiv = styled.div`
  display: block;
  width: 160px;
  margin-right: 40px;
  padding: 0 20px 0 20px;
  span {
    font-size: 12px;
    width: 100%;
    padding: 8px 0 7px 0;
    font-weight: bold;
    cursor: pointer;
  }
`;

const UlOne = styled.ul`
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 10px;
  border-top: 1px solid #ececec;
`;
const LiOne = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const ULSECOND = styled.ul`
  display: block;
  border-top: 1px solid #ececec;
  width: 100%;
  margin-top: 5px;

  border-top: 1px solid #ececec;
`;
const ULTHIRD = styled.ul`
  display: block;
  width: 100%;
  margin-top: 10px;
`;
const MiddleLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin-top: 7px;
`;
const LowestLi = styled.li`
  font-size: 12px;
  color: gray;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,200&display=swap");
  font-family: "Raleway", sans-serif;
  :hover {
    text-decoration: underline;
  }
`;
const LowestSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  width: 100%;
  padding: 8px 0 7px 0;

  height: 5px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default MenuModal;
