const dataRequest = (kind1: string, kind2: string = "") => {
  let goods: any;
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 304) {
      goods = JSON.parse(xhr.responseText);
      console.log(goods.length);
    } else {
      console.log("굿즈 데이터 얻어오기 실패", xhr.responseText);
    }
  };
  xhr.open("GET", "http://220.73.54.64:8999/resources/goods/" + kind1 + (kind2 !== "" ? "/" + kind2 : ""), false);
  xhr.send();
  return goods;
};

export const IMGS = [
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_windjacket.jpg",
    title: "봄철 쇼핑 리스트에 항상 오르는 아이템, 바람막이",
    contents:
      "일교차가 매우 큰 요즘, 바람막이만큼 실용적인 아이템은 없죠. 가볍고 보온성이 좋아 봄철 쇼핑 리스트에 항상 오르는 아이템, 바람막이! 내셔널지오그래픽이 추천하는 바람막이, 지금 만나보세요.",
    border: "1px solid blue",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_kidsouter.jpg",
    title: "봄의 컬러를 입은 키즈 아우터",
    contents:
      "무채색의 계절인 겨울을 지나 다양한 컬러로 물드는 봄이 가까이 와 있습니다. 내셔널지오그래픽이 봄의 컬러와 잘 어울리는 키즈 아우터를 준비했어요. 스타일은 물론 아이들의 활동에 편안함을 선사해주는 아이템으로 선별했으니 지금 바로 만나보세요!",
  },
  {
    img: "http://thenature.speedgabia.com/event/20ss_lookbook.gif",
    title: "20S/S LOOK BOOK",
    contents:
      "내셔널지오그래픽 어패럴의 새로운 얼굴이 된 모델 정혁과 함께한 20S/S 컬렉션, 지금 바로 만나보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/2020_cabinhouse.jpg",
    title: "뉴트로 감성 장착한 더 오리지널 캐빈 하우스",
    contents:
      "많은 캠퍼에게 사랑받았던 내셔널지오그래픽 '더 오리지널 텐트' 시리즈의 신제품이 곧 출시됩니다. 60-70년대 빈티지 스타일에 현대적인 디자인을 더한 '더 오리지널 캐빈 하우스'가 그 주인공으로, 이전 시리즈보다 공간은 더 넓게, 설치는 더 간편하게 만들었어요. 5월 정식 출시 예정이며, 그전에 와디즈 펀딩을 통해 먼저 소개 드립니다.",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/main_thum/20ss_tshirt_collection.jpg",
    title: "옷장 속에 봄을 채워야 할 때",
    contents:
      "계절의 변화 앞에 서 있는 지금. 우리의 옷장을 업데이트해야 할 때입니다. 다가오는 봄, 무엇을 입어야 할지 고민된다면 내셔널지오그래픽이 준비한 맨투맨&후드 티셔츠 아이템을 살펴보세요. 어디에도 매치하기 좋은 베이식한 아이템으로 선별했습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/2020_greentee.jpg",
    title: "지구가 건강해지는 쉬운 방법, 그린티 캠페인",
    contents:
      "더 이상 우리의 삶과 떼놓고 생각할 수 없는 환경 문제. 우리는 지구의 건강을 결정할 수는 없어도 결정적인 영향력을 줄 수 있습니다. 평범하게 여긴 나의 일상 소비가 지구의 미래와 직결되어 있기 때문이죠. 내셔널지오그래픽은 지구와 공존을 위해 지구가 건강해지는 쇼핑을 제안합니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/ctm_img/19_ss_m_title.jpg",
    title: "봄을 부르는 티셔츠",
    contents:
      "겨우내 몸을 감싸주었던 두툼한 패딩, 니트와 이별을 고할 시간! 봄과 가장 잘 어울리는 맨투맨/후디를 입고 봄을 먼저 맞이해보세요! 내셔널지오그래픽이 당신을 위해 따끈따끈한 19 S/S 아이템을 준비했습니다. 지금 바로 만나보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19ss_slingbag.jpg",
    title: "봄과 어울리는 작고 가벼운 가방",
    contents:
      "실내에만 머무르기에는 아쉬운 계절, 기분마저 산뜻하게 만들어주는 봄입니다. 이런 날씨에는 무얼 크게 하지 않아도 좋아요. 길을 걷고 광합성을 쐬는 것만으로도 충분하죠. 밖으로 나갈 준비는 다 되었는데, 메고 나갈 가방이 없나요? 여기 내셔널지오그래픽이 준비한 가방들을 살펴보세요. 작고 가벼우면서도 스타일까지 겸비한 아이템으로 준비했습니다.",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/main_thum/20SS_KIDS_BACKPACK_SUM.jpg",
    title: "일상의 모험을 함께 할 키즈 백팩",
    contents:
      "가방을 메고 집을 나서는 순간부터 아이들의 모험은 시작됩니다. 길을 오가며 마주친 세상은 아이들의 호기심을 불러일으키고 계절에 따라 변해가는 자연의 움직임은 아이들의 상상력을 키워줍니다. 다가오는 새 학기에는 내셔널지오그래픽 키즈 백팩과 함께 새로운 일상을 모험할 수 있도록 해주세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_outer.jpg",
    title: "봄을 알리는 가벼운 아우터",
    contents:
      "어깨를 무겁게 짓누르던 두꺼운 겨울 아우터와 작별을 고할 시간! 내셔널지오그래픽이 봄과 잘 어울리는 아우터들을 준비했습니다. 얇고 가벼운 아우터로 갈아입고 경쾌하게 봄을 맞이해보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_jacquard.jpg",
    title: "내셔널지오그래픽을 아로새기다",
    contents:
      "유니크한 가방을 찾고 있다면 내셔널지오그래픽의 새로운 제품인 자카드 시리즈를 주목해보세요. 프린트 형태가 아닌 여러 가지 실을 이용하여 한 땀 한 땀 로고를 새겨 넣은 원단을 활용해 유니크하면서도 고급스러운 멋을 더했습니다. 백팩부터 힙색, 짐백까지 다양한 형태의 가방을 준비했으니 취향에 맞게 선택해보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_kidslookbook.jpg",
    title: "20SS KIDS COLLECTION",
    contents:
      "수많은 동물들의 낙원으로 불리는 사바나, 끝없이 펼쳐진 거대한 초원 속에서 살아가는 야생 동물은 아이들에게 호기심을 불러일으키는 존재이자 동심 속에서 교감을 나누는 친구이기도 합니다. 내셔널지오그래픽이 20SS 시즌을 맞이하여 '사바나'를 주제로 다채로운 키즈 아이템을 준비했어요. 20SS 키즈 컬렉션을 통해 살펴보세요.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_organizer.jpg",
    title: "세상에서 가장 쉬운 가방 정리 (Feat. 오거나이저)",
    contents:
      "백팩의 가장 큰 매력은 넉넉한 수납공간과 두 손의 활동이 자유롭다는 것이죠. 하지만 많은 물건을 수납할 수 있는 만큼 소지품 정리가 잘 안 돼 어려움을 겪었던 적 많을 거예요. 백팩 속 물건을 손쉽게 정리하고 싶다면 내셔널지오그래픽이 준비한 2020 백팩을 눈여겨보세요! 오거나이즈 포켓을 더해 물건을 쉽게 정리 정돈하고 바로 찾을 수 있도록 했습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/2020_newtent.jpg",
    title: "블랙 감성을 입은 NEW 내셔널지오그래픽 텐트",
    contents:
      "한동안 뜸했던 내셔널지오그래픽 텐트 소식, 언제 출시되나 기다리고 계셨던 분들 많을 겁니다. 내셔널지오그래픽이 긴 공백을 깨고 '신제품 텐트' 소식을 가지고 돌아왔습니다. 내셔널지오그래픽의 초기 모델인 '네이쳐 하이커 시리즈'를 현대적 트렌드에 맞게 새롭게 디자인한 제품으로 내셔널지오그래픽의 시그너처 컬러인 블랙을 적용하여 세련된 무드를 더했습니다. 4월 정식 출시 예정이며, 그전에 와디즈 펀딩을 통해 먼저 소개합니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_item.jpg",
    title: "미리 보는 봄",
    contents:
      "어느새 끝자락에 다다른 겨울. 멀게만 느껴졌던 봄이 가까이 다가와 있습니다. 내셔널지오그래픽이 준비한 20S/S 제품을 통해 미리 봄을 느껴보세요! 간절기에 유용하게 활용할 아우터부터 봄 필수템인 맨투맨까지 준비했습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_newshoes.jpg",
    title: "봄을 위한 스니커즈",
    contents:
      "머지않아 시작될 봄의 계절! 두툼한 신발은 넣어두고 가벼운 신발로 갈아 신어야 할 때입니다. 내셔널지오그래픽이 봄과 잘 어울리는 스니커즈를 준비했어요. 다가올 봄처럼 가벼운 발걸음을 선사해 줄 아이템으로 선별했으니 지금 바로 만나보세요.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_capvsbeanie.jpg",
    title: "CAP vs BEANIE",
    contents:
      "오늘의 룩에 포인트가 필요할 때, 스타일의 부족한 부분을 채우고 싶을 때 모자만한 아이템이 없죠. 이번 겨울, 어떤 모자를 골라야 할지 고민된다면 내셔널지오그래픽이 준비한 아이템을 살펴보세요. 내추럴하면서도 캐주얼한 매력을 지닌 볼캡과 니트 소재로 보온성과 스타일까지 모두 챙긴 비니를 준비했습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_biglogo_bag.jpg",
    title: "새로운 시작을 함께할 가방, 2020 빅 로고 백 시리즈",
    contents:
      "매년 출시와 동시에 폭발적인 반응을 이끌었던 내셔널지오그래픽 베스트 아이템 '빅 로고 백 시리즈'가 2020 버전으로 새롭게 업그레이드하여 돌아왔습니다. 빅 로고 콘셉트는 그대로 유치한 채 기능성과 디테일은 더해 편의성을 높였어요. 백팩부터 슬링백까지 다양하게 준비했으니 지금 바로 살펴보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_skincare.jpg",
    title: "피부와 자연을 동시에 생각한 '프롬네이쳐' 라인",
    contents:
      "내셔널지오그래픽이 새롭게 선보이는 남성 스킨케어 '프롬네이쳐' 라인. '프롬네이쳐'는 자연스러운 생기와 활력을 피부 속에 불어 넣기 위해 자연에서 온 재료를 사용합니다. 또한, 지구 건강의 밸런스를 생각하여 자연으로 스며들 수 있는 용기를 사용합니다. 내셔널지오그래픽 '프롬네이쳐' 라인과 함께 자연 주의적 라이프 스타일을 실현해보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/20ss_bag4.jpg",
    title: "내셔널지오그래픽 신제품 가방 4종 전격 해부",
    contents:
      "우리는 매일 이동을 합니다. 집에서 회사, 학교 또는 어딘가로, 그리고 또다시 집으로 돌아오는 여정을 거치죠. 매일 공간을 이동하는 우리에게 가방은 어느새 필수품이 되었습니다. 오늘도 공간에서 공간으로 끊임없는 이동을 하는 도시인들을 위해 '내셔널지오그래픽'이 새로운 데일리 백을 제시합니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_winterforwoman.jpg",
    title: "겨울을 빛나게 해줄 우먼 아우터",
    contents:
      "영하와 영상의 기온을 넘나드는 겨울, 따뜻하게 몸을 감싸주는 패딩은 빼놓을 수 없는 필수 아이템이죠. 올겨울, 패딩을 활용해 어떻게 코디해야 할지 고민된다면 내셔널지오그래픽이 준비한 우먼 아우터 스타일링을 참고해보세요! 때로는 우아하게, 때로는 캐주얼하게 겨울 스타일을 완성할 수 있을 것입니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_winter_item.jpg",
    title: "하나만 갖춰도 겨울이 든든해집니다",
    contents:
      "겨울일수록 작은 액세서리에 눈길이 더 가게 됩니다. 겨울 액세서리는 다른 계절과 달리 스타일의 포인트가 되는 동시에 몸의 온도를 높여주는 역할을 하기 때문이죠. 내셔널지오그래픽 어패럴이 차가움이 스며들 틈 없도록 겨울을 위한 아이템들을 준비했습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_kids_outer.jpg",
    title: "추위도 잊게 할 키즈 아우터",
    contents:
      "추운 겨울이 찾아와도 아이들의 호기심은 막을 수 없습니다. 호기심을 따라서 다양한 활동을 즐기는 아이들을 위해 내셔널지오그래픽이 따뜻하면서도 편안한 겨울 아우터를 준비했습니다. 지금 바로 만나보세요.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_blackonblack.jpg",
    title: "BLACK on BLACK",
    contents:
      "블랙 컬러는 어느 계절에 입어도 손색이 없지만, 가장 빛나는 계절은 겨울이 아닐까 싶습니다. 차가운 공기가 더해질 때, 블랙 컬러가 지닌 시크하고 모던한 분위기가 더욱더 고조되기 때문이죠. 이번 겨울, 올 블랙으로 룩을 완성해보는 건 어때요? 지금부터 내셔널지오그래픽이 겨울에 가장 잘 어울리는 블랙 아이템을 소개해드리겠습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_winter_mtm.jpg",
    title: "겨울에 진가를 발휘하는 티셔츠",
    contents:
      "바람의 온도가 차가워지고 있는 것 보니 겨울도 머지않았나 봅니다. 두툼한 옷을 준비해야 할 때! 편안한 매력을 지닌 맨투맨과 후디는 겨울에도 포기할 수 없는 아이템이죠. 차가운 계절을 위해 내셔널지오그래픽이 기모를 넣어 포근함을 더한 맨투맨과 후디를 준비했습니다.",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/main_thum/19fw_urban_performance.jpg",
    title: "URBAN PERFORMANCE SERIES",
    contents:
      "무심한듯 시크하게 존재감을 드러내는 겨울 아우터의 등장! '어반 퍼포먼스 시리즈'는 입었을 때 더욱더 빛을 발합니다. 도시적 감수성을 입혀 간결하고 미니멀한 실루엣을 드러내지만 볼드한 디테일들이 녹아 들아 있어 반전 매력을 선사하기 때문이죠. 올겨울, 어반 퍼포먼스 시리즈로 품격있는 스타일을 완성해보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_fleece_item.jpg",
    title: "# 페트병을 입다",
    contents:
      "마트에서 아무 생각 없이 집어 든 생수병, 잠깐의 휴식을 위해 테이크아웃한 오늘의 커피, 무심코 했던 지난날의 작은 행동이 오늘날 지구의 생존을 위협하고 있습니다. 내셔널지오그래픽은 지구와의 공존을 위해 플라스틱을 재활용하여 친환경 플리스 맨투맨을 만들었습니다. 맨투맨으로 다시 태어난 플라스틱 페트병을 지금 바로 만나보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_fleece_item.jpg",
    title: "내가 찾던 그 플리스",
    contents:
      "이번 가을, 플리스를 뺴놓고 스타일을 논할 수 없을 것입니다. 바야흐로 진정한 전성기를 맞이한 플리스의 시대. 다채로운 스타일을 즐길 수 있도록 내셔널지오그래픽이 맨투맨부터 아우터까지 다양하게 준비했습니다. 지금 바로 만나보세요!",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/surf_interview.jpg",
    title: "파도를 통해 배우는 삶 서퍼 신수현",
    contents:
      "예측할 수 없는 파도 속에 몸을 맡기는 서핑은 불확실한 미래를 향해 한 발자국씩 내딛는 우리의 삶과도 닮았습니다. 그 불확실성을 두려워하지 않고 정면으로 맞서 파도 위에서 삶을 즐기는 서퍼 신수현을 만났습니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/19fw_kids.jpg",
    title: "19 F/W KIDS LOOK BOOK",
    contents:
      "호기심으로 가득찬 아이들에게 세상은 재미있는 놀이터가 됩니다. 오늘도 즐거운 상상력을 따라 새로운 것을 발견하고 자신의 세계를 확장해 나가는 리틀 탐험가들을 위해 내셔널지오그래픽이 활동성은 물론 스타일까지 갖춘 키즈 라인을 소개합니다.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/urban_collection.jpg",
    title: "FALL IN BLACK",
    contents:
      "도심 속 팔레트에서 찾은 모던하고 세련된 블랙 컬러를 담은 내셔널지오그래픽 어반 컬렉션. 도심 속에서 더욱 빛을 발하는 어반 시티 백&어반 무드 스니커즈와 함께 도회적이고 우아한 스타일을 완성해보세요.",
  },
  {
    img: "http://www.naturestore.co.kr/data/main_thum/dive_slipper.gif",
    title: "하루의 절반 가까이 함께하는 실내화",
    contents:
      "교실, 오피스 안에서 머무르는 시간이 긴 우리의 하루. 외출화만큼 실내화도 고심해서 선택해야 합니다. 다가오는 봄에는 산뜻한 컬러의 다이브 플러스 슬리퍼로 갈아 신어보세요. 쿠셔닝을 더해 걸을 때는 물론 앉아 있을 때에도 편안함을 더해줄 것입니다.",
  },
];
export const ShopMenus = [
  { title: "MAN", one: "OUTER", two: "TOP", three: "BOTTOM" },
  { title: "WOMAN", one: "OUTER", two: "TOP", three: "BOTTOM" },
  { title: "KIDS", one: "OUTER", two: "TOP", three: "BOTTOM" },
  {
    title: "BAG",
    one: "백팩",
    two: "도트백",
    three: "서브백",
    four: "워터백",
    five: "멀티백",
    six: "ACC",
  },
  { title: "HEAD WEAR", one: "CAP" },
  { title: "FOOT WEAR", one: "스니커즈", two: "슬리퍼", three: "SOCKS" },
  { title: "SKIN CARE", one: "SKIN CARE" },
  {
    title: "SUITCASE",
    one: "케리어",
    two: "케리어 세트",
    three: "기내용",
    four: "화물용",
    five: "액세서리",
  },
  {
    title: "CAMPING",
    one: "오토캠핑",
    two: "미니멀백패킹",
    three: "피크닉",
    four: "텐트",
    five: "타프",
    six: "테이블&의자",
    seven: "침낭",
    eight: "침낭",
    nine: "스틱",
    ten: "코펠",
    eleven: "액세서리",
  },
];

/* export const ShopData = dataRequest(); */

export const OuterIMG = [
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/t50_1000002246_detail_044.jpg",
  },
];
export const FrontData = [
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002246/1000002246_main_041.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 CARBON BLACK",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002245/1000002245_main_050.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 BURGUNDY",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002247/1000002247_main_099.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 HARBOR BLUE",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002248/1000002248_main_063.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 HAVANA KHAKI",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002249/1000002249_main_03.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 INCENSE BEIGE",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002251/1000002251_main_0100.jpg",
    name: "내셔널지오그래픽 N202UJP910 월리스 바람막이 점퍼 WHITE",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002219/1000002219_main_026.jpg",
    name: "내셔널지오그래픽 N202MJP920 카니스 홑겹 스탠카라 점퍼 CARBON BLACK",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002218/1000002218_main_010.jpg",
    name: "내셔널지오그래픽 N202MJP920 카니스 홑겹 스탠카라 점퍼 BURGUNDY",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002220/1000002220_main_035.jpg",
    name:
      "내셔널지오그래픽 N202MJP920 카니스 홑겹 스탠카라 점퍼 PLAZA TAUPE BEIGE",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002221/1000002221_main_086.jpg",
    name: "내셔널지오그래픽 N202MJP920 카니스 홑겹 스탠카라 점퍼 STEEL GREY",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/03/1000002175/1000002175_main_039.jpg",
    name:
      "내셔널지오그래픽 N202UJP830 트리톤 후드일체형 바람막이 점퍼 CARBON BLACK",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/03/1000002199/1000002199_main_010.jpg",
    name:
      "내셔널지오그래픽 N202UJP830 트리톤 후드일체형 바람막이 점퍼 EARTH KHAKI",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/03/1000002200/1000002200_main_081.jpg",
    name:
      "내셔널지오그래픽 N202UJP830 트리톤 후드일체형 바람막이 점퍼 GLACIER GRAY",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/02/1000002103/1000002103_main_025.jpg",
    name: "내셔널지오그래픽 N201MJP910 타슬란 배색 바람막이 점퍼 CARBON BLACK",
    sale: "199000",
    price: "199000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/02/1000002102/1000002102_main_048.jpg",
    name: "내셔널지오그래픽 N201MJP910 타슬란 배색 바람막이 점퍼 HAVANA KHAKI",
    sale: "199000",
    price: "199000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/09/1000002398/1000002398_main_010.jpg",
    name: "내셔널지오그래픽 N201MJP820 에리스 코치 자켓 BLACK",
    sale: "139000",
    price: "119000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/03/1000002165/1000002165_main_02.jpg",
    name: "내셔널지오그래픽 N201MJP820 에리스 코치 자켓 CARBON BLACK",
    sale: "139000",
    price: "119000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/03/1000002166/1000002166_main_072.jpg",
    name: "내셔널지오그래픽 N201MJP830 디오네 어반 스타디움 점퍼 CARBON BLACK",
    sale: "139000",
    price: "139000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/09/1000002406/1000002406_main_09.jpg",
    name: "내셔널지오그래픽 N201MJP830 디오네 어반 스타디움 점퍼 GLACIER GRAY",
    sale: "139000",
    price: "139000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002224/1000002224_main_055.jpg",
    name: "내셔널지오그래픽 N201MJP940 오리타 아노락 점퍼 GREEN SHEEN",
    sale: "219000",
    price: "189000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002225/1000002225_main_096.jpg",
    name: "내셔널지오그래픽 N201MJP940 오리타 아노락 점퍼 HAVANA KHAKI",
    sale: "219000",
    price: "189000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002226/1000002226_main_025.jpg",
    name: "내셔널지오그래픽 N201MJP940 오리타 아노락 점퍼 INCENSE BEIGE",
    sale: "219000",
    price: "189000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002236/1000002236_main_084.jpg",
    name:
      "내셔널지오그래픽 N201MJP920 로우머스 플라이트 블루종 점퍼 CARBON BLACK",
    sale: "219000",
    price: "219000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002237/1000002237_main_036.jpg",
    name:
      "내셔널지오그래픽 N201MJP920 로우머스 플라이트 블루종 점퍼 HAVANA KHAKI",
    sale: "219000",
    price: "219000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002238/1000002238_main_054.jpg",
    name:
      "내셔널지오그래픽 N201MJP920 로우머스 플라이트 블루종 점퍼 INCENSE BEIGE",
    sale: "219000",
    price: "219000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002239/1000002239_main_081.jpg",
    name: "내셔널지오그래픽 N201MJP990 포켓 홑겹 셔츠형 자켓 CARBON BLACK",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002240/1000002240_main_020.jpg",
    name: "내셔널지오그래픽 N201MJP990 포켓 홑겹 셔츠형 자켓 GREEN SHEEN",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002241/1000002241_main_082.jpg",
    name: "내셔널지오그래픽 N201MJP990 포켓 홑겹 셔츠형 자켓 PLAZA TAUPE BEIGE",
    sale: "109000",
    price: "89000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/09/1000002424/1000002424_main_013.jpg",
    name: "내셔널지오그래픽 N202MJP930 홑겹 블루종 점퍼 BURGUNDY",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002271/1000002271_main_083.jpg",
    name: "내셔널지오그래픽 N202MJP930 홑겹 블루종 점퍼 HAVANA KHAKI",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/06/1000002272/1000002272_main_077.jpg",
    name: "내셔널지오그래픽 N202MJP930 홑겹 블루종 점퍼 PLAZA TAUPE BEIGE",
    sale: "159000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002222/1000002222_main_035.jpg",
    name:
      "내셔널지오그래픽 N202MJP940 홑겹 시보리 하이넥 포인트 점퍼 HARBOR BLUE",
    sale: "179000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/01/05/1000002223/1000002223_main_058.jpg",
    name: "내셔널지오그래픽 N202MJP940 홑겹 시보리 하이넥 포인트 점퍼 L TQ",
    sale: "179000",
    price: "159000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/08/1000002336/1000002336_main_047.jpg",
    name: "내셔널지오그래픽 N202MVT920 메쉬 베스트 STEEL GREY",
    sale: "99000",
    price: "99000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/08/1000002335/1000002335_main_057.jpg",
    name: "내셔널지오그래픽 N202MVT920 메쉬 베스트 CARBON BLACK",
    sale: "99000",
    price: "99000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/09/1000002371/1000002370_main_02.jpg",
    name: "내셔널지오그래픽 N201MJP050 유틸리티 롱 점퍼 STEEL GREY",
    sale: "219000",
    price: "189000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/02/09/1000002370/1000002370_main_073.jpg",
    name: "내셔널지오그래픽 N201MJP050 유틸리티 롱 점퍼 PLAZA TAUPE BEIGE",
    sale: "219000",
    price: "189000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/03/10/1000002569/1000002569_main_064.jpg",
    name: "내셔널지오그래픽 N202MVT210 세드나 메쉬 베스트 CARBON BLACK",
    sale: "129000",
    price: "129000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/03/10/1000002568/1000002568_main_074.jpg",
    name: "내셔널지오그래픽 N202MVT010 하이넥 베스트 HAVANA KHAKI",
    sale: "109000",
    price: "109000",
  },
  {
    img:
      "http://www.naturestore.co.kr/data/goods/20/03/10/1000002567/1000002567_main_089.jpg",
    name: "내셔널지오그래픽 N202MVT010 하이넥 베스트 CARBON BLACK",
    sale: "109000",
    price: "109000",
  },
];
