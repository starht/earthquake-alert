// src/components/DongDropdown.js
import React from "react";
import Select from "react-select";

//import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";

const DongDropdown = ({ gu, dong, setDong, handlePageChange }) => {
  const dongList = {
    "-": ["-"],

    중구: [
      "-",
      "소공동",
      "회현동",
      "명동",
      "필동",
      "장충동",
      "광희동",
      "을지로동",
      "신당동",
      "다산동",
      "약수동",
      "청구동",
      "동화동",
      "황학동",
      "중림동",
    ],
    종로구: [
      "-",
      "청운동",
      "신교동",
      "궁정동",
      "효자동",
      "창성동",
      "통의동",
      "적선동",
      "통인동",
      "누상동",
      "누하동",
      "옥인동",
      "체부동",
      "필운동",
      "내자동",
      "사직동",
      "도렴동",
      "당주동",
      "내수동",
      "세종로",
      "신문로1가",
      "신문로2가",
      "청진동",
      "서린동",
      "수송동",
      "중학동",
      "종로1가",
      "공평동",
      "관훈동",
      "견지동",
      "와룡동",
      "권농동",
      "운니동",
      "익선동",
      "경운동",
      "관철동",
      "인사동",
      "낙원동",
      "종로2가",
      "팔판동",
      "삼청동",
      "안국동",
      "소격동",
      "화동",
      "사간동",
      "송현동",
      "가회동",
      "재동",
      "계동",
      "원서동",
      "훈정동",
      "묘동",
      "봉익동",
      "돈의동",
      "장사동",
      "관수동",
      "종로3가",
      "인의동",
      "예지동",
      "원남동",
      "연지동",
      "종로4가",
      "효제동",
      "종로5가",
      "종로6가",
      "이화동",
      "연건동",
      "충신동",
      "동숭동",
      "혜화동",
      "명륜1가",
      "명륜2가",
      "명륜3가",
      "명륜4가",
      "명륜5가",
      "창신동",
      "숭인동",
    ],
    용산구: [
      "-",
      "후암동",
      "용산2가동",
      "남영동",
      "청파동",
      "원효로1가",
      "원효로2가",
      "효창동",
      "용문동",
      "한강로1가",
      "한강로2가",
      "한강로3가",
      "이촌동",
      "이태원동",
      "한남동",
      "서빙고동",
      "보광동",
      "청암동",
      "한강로동",
    ],
    성동구: [
      "-",
      "왕십리동",
      "마장동",
      "사근동",
      "행당동",
      "응봉동",
      "금호동1가",
      "금호동2가",
      "금호동3가",
      "금호동4가",
      "옥수동",
      "성수동1가",
      "성수동2가",
      "성수동2가",
      "송정동",
      "용답동",
    ],
    광진구: [
      "-",
      "중곡동",
      "능동",
      "구의동",
      "광장동",
      "자양동",
      "화양동",
      "군자동",
    ],
    동대문구: [
      "-",
      "용신동",
      "제기동",
      "전농동",
      "답십리동",
      "장안동",
      "청량리동",
      "회기동",
      "휘경동",
      "이문동",
    ],
    중랑구: ["-", "면목동", "면목본동", "중화동", "묵동", "망우동", "신내동"],
    성북구: [
      "-",
      "성북동",
      "삼선동",
      "동선동",
      "돈암동",
      "안암동",
      "보문동",
      "정릉동",
      "길음동",
      "종암동",
      "월곡동",
      "장위동",
      "석관동",
    ],
    강북구: ["-", "번동", "수유동", "우이동", "인수동"],
    도봉구: ["-", "쌍문동", "방학동", "창동", "도봉동"],
    노원구: ["-", "월계동", "공릉동", "하계동", "중계본동", "중계동", "상계동"],
    은평구: [
      "-",
      "녹번동",
      "불광동",
      "갈현동",
      "구산동",
      "대조동",
      "응암동",
      "역촌동",
      "신사동",
      "증산동",
      "수색동",
    ],
    서대문구: [
      "-",
      "천연동",
      "북아현동",
      "충현동",
      "신촌동",
      "연희동",
      "홍은동",
      "남가좌동",
      "북가좌동",
      "충정로2가",
      "충정로3가",
      "냉천동",
      "신영동",
    ],
    마포구: [
      "-",
      "공덕동",
      "아현동",
      "도화동",
      "신공덕동",
      "마포동",
      "노고산동",
      "신수동",
      "현석동",
      "구수동",
      "창전동",
      "상암동",
      "성산동",
    ],
    양천구: ["-", "목동", "신월동", "신정동"],
    강서구: [
      "-",
      "염창동",
      "등촌동",
      "화곡본동",
      "화곡동",
      "우장산동",
      "까치산동",
      "가양동",
      "발산동",
      "공항동",
      "방화동",
    ],
    구로구: [
      "-",
      "신도림동",
      "구로동",
      "고척동",
      "개봉동",
      "오류동",
      "수궁동",
      "가리봉동",
      "천왕동",
      "항동",
      "가산동",
      "독산동",
    ],
    금천구: ["-", "가산동", "독산동", "시흥동"],
    영등포구: [
      "-",
      "영등포본동",
      "영등포동",
      "여의도동",
      "당산동",
      "양평동",
      "신길동",
      "대림동",
    ],
    동작구: [
      "-",
      "노량진동",
      "상도동",
      "흑석동",
      "사당동",
      "대방동",
      "신대방동",
    ],
    관악구: [
      "-",
      "보라매동",
      "청림동",
      "성현동",
      "행운동",
      "낙성대동",
      "중앙동",
      "인헌동",
      "남현동",
      "서원동",
      "신원동",
      "서림동",
      "신림동",
      "난향동",
      "조원동",
      "대학동",
      "은천동",
      "성북동",
      "청룡동",
      "난곡동",
      "삼성동",
      "미성동",
    ],
    서초구: [
      "-",
      "서초동",
      "잠원동",
      "반포본동",
      "반포동",
      "방배본동",
      "방배동",
      "양재동",
      "내곡동",
    ],
    강남구: [
      "-",
      "개포동",
      "논현동",
      "대치동",
      "도곡동",
      "삼성동",
      "세곡동",
      "수서동",
      "신사동",
      "압구정동",
      "역삼동",
      "일원동",
      "일원본동",
      "자곡동",
      "청담동",
    ],
    송파구: [
      "-",
      "풍납동",
      "거여동",
      "마천동",
      "방이동",
      "오금동",
      "송파동",
      "석촌동",
      "삼전동",
      "가락본동",
      "가락동",
      "문정동",
      "잠실본동",
      "잠실동",
    ],

    강동구: [
      "-",
      "강일동",
      "상일동",
      "명일동",
      "고덕동",
      "암사동",
      "천호동",
      "성내동",
      "길동",
    ],
  };
  const dongs = dongList[gu];

  const options = dongs.map((dongItem) => ({
    value: dongItem,
    label: dongItem,
  }));

  const handleChange = (selectedOption) => {
    setDong(selectedOption.value);
    handlePageChange(1);
  };

  const selectedValue = options.find((option) => option.value === dong);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#084298",
      marginTop: "10px",
    }),
    singleValue: (provided) => ({
      ...provided,
      backgroundColor: "#084298",
      color: "#fff",
    }),
    option: (provided) => ({
      ...provided,
    }),
  };

  return (
    <Select
      style={customStyles}
      value={selectedValue}
      onChange={handleChange}
      options={options}
    />
  );
};

export default DongDropdown;
/*
const DongDropdown = ({ gu, dong, setDong }) => {
  const dongList = {
    "-": ["-"],

    중구: [
      "-",
      "소공동",
      "회현동",
      "명동",
      "필동",
      "장충동",
      "광희동",
      "을지로동",
      "신당동",
      "다산동",
      "약수동",
      "청구동",
      "신당5동",
      "동화동",
      "황학동",
      "중림동",
    ],
    종로구: [
      "-",
      "청운동",
      "신교동",
      "궁정동",
      "효자동",
      "창성동",
      "통의동",
      "적선동",
      "통인동",
      "누상동",
      "누하동",
      "옥인동",
      "체부동",
      "필운동",
      "내자동",
      "사직동",
      "도렴동",
      "당주동",
      "내수동",
      "세종로",
      "신문로1가",
      "신문로2가",
      "청진동",
      "서린동",
      "수송동",
      "중학동",
      "종로1가",
      "공평동",
      "관훈동",
      "견지동",
      "와룡동",
      "권농동",
      "운니동",
      "익선동",
      "경운동",
      "관철동",
      "인사동",
      "낙원동",
      "종로2가",
      "팔판동",
      "삼청동",
      "안국동",
      "소격동",
      "화동",
      "사간동",
      "송현동",
      "가회동",
      "재동",
      "계동",
      "원서동",
      "훈정동",
      "묘동",
      "봉익동",
      "돈의동",
      "장사동",
      "관수동",
      "종로3가",
      "인의동",
      "예지동",
      "원남동",
      "연지동",
      "종로4가",
      "효제동",
      "종로5가",
      "종로6가",
      "이화동",
      "연건동",
      "충신동",
      "동숭동",
      "혜화동",
      "명륜1가",
      "명륜2가",
      "명륜3가",
      "명륜4가",
      "명륜5가",
      "창신동",
      "숭인1동",
      "숭인2동",
    ],
    용산구: [
      "-",
      "후암동",
      "용산2가동",
      "남영동",
      "청파동",
      "원효로1가",
      "원효로2가",
      "효창동",
      "용문동",
      "한강로1가",
      "한강로2가",
      "한강로3가",
      "이촌1동",
      "이촌2동",
      "이태원1동",
      "이태원2동",
      "한남동",
      "서빙고동",
      "보광동",
      "청암동",
      "한강로동",
    ],
    성동구: [
      "-",
      "왕십리2동",
      "마장동",
      "사근동",
      "행당1동",
      "행당2동",
      "응봉동",
      "금호1가동",
      "금호2.3가동",
      "금호4가동",
      "옥수동",
      "성수1가1동",
      "성수1가2동",
      "성수2가1동",
      "성수2가3동",
      "송정동",
      "용답동",
    ],
    광진구: [
      "-",
      "중곡1동",
      "중곡2동",
      "중곡3동",
      "중곡4동",
      "능동",
      "구의1동",
      "구의2동",
      "구의3동",
      "광장동",
      "자양1동",
      "자양2동",
      "자양3동",
      "자양4동",
      "화양동",
      "군자동",
    ],
    동대문구: [
      "-",
      "용신동",
      "제기동",
      "전농1동",
      "전농2동",
      "답십리1동",
      "답십리2동",
      "장안1동",
      "장안2동",
      "청량리동",
      "회기동",
      "휘경1동",
      "휘경2동",
      "이문1동",
      "이문2동",
    ],
    중랑구: [
      "-",
      "면목2동",
      "면목4동",
      "면목5동",
      "면목7동",
      "면목본동",
      "중화1동",
      "중화2동",
      "묵1동",
      "묵2동",
      "망우3동",
      "신내1동",
      "신내2동",
    ],
    성북구: [
      "-",
      "성북동",
      "삼선동",
      "동선동",
      "돈암동",
      "안암동",
      "보문동",
      "정릉1동",
      "정릉2동",
      "정릉3동",
      "정릉4동",
      "길음1동",
      "길음2동",
      "종암동",
      "월곡1동",
      "월곡2동",
      "장위1동",
      "장위2동",
      "장위3동",
      "석관동",
    ],
    강북구: [
      "-",
      "번1동",
      "번2동",
      "번3동",
      "수유1동",
      "수유2동",
      "수유3동",
      "우이동",
      "인수동",
    ],
    도봉구: [
      "-",
      "쌍문1동",
      "쌍문2동",
      "쌍문3동",
      "쌍문4동",
      "방학1동",
      "방학2동",
      "방학3동",
      "창1동",
      "창2동",
      "창3동",
      "창4동",
      "창5동",
      "도봉1동",
      "도봉2동",
    ],
    노원구: [
      "-",
      "월계1동",
      "월계2동",
      "월계3동",
      "공릉1동",
      "공릉2동",
      "하계1동",
      "하계2동",
      "중계본동",
      "중계1동",
      "중계4동",
      "중계2.3동",
      "상계1동",
      "상계2동",
      "상계3.4동",
      "상계5동",
      "상계6.7동",
      "상계8동",
    ],
    은평구: [
      "-",
      "녹번동",
      "불광1동",
      "불광2동",
      "갈현1동",
      "갈현2동",
      "구산동",
      "대조동",
      "응암1동",
      "응암2동",
      "응암3동",
      "역촌동",
      "신사1동",
      "신사2동",
      "증산동",
      "수색동",
    ],
    서대문구: [
      "-",
      "천연동",
      "북아현동",
      "충현동",
      "신촌동",
      "연희동",
      "홍은1동",
      "홍은2동",
      "남가좌1동",
      "남가좌2동",
      "북가좌1동",
      "북가좌2동",
      "충정로2가",
      "충정로3가",
      "냉천동",
      "신영동",
    ],
    마포구: [
      "-",
      "공덕동",
      "아현동",
      "도화동",
      "신공덕1동",
      "신공덕2동",
      "마포동",
      "노고산동",
      "신수동",
      "현석동",
      "구수동",
      "창전동",
      "상암동",
      "성산1동",
      "성산2동",
      "성산3동",
    ],
    양천구: [
      "-",
      "목1동",
      "목2동",
      "목3동",
      "목4동",
      "신월1동",
      "신월2동",
      "신월3동",
      "신월4동",
      "신월5동",
      "신월6동",
      "신월7동",
      "신정1동",
      "신정2동",
      "신정3동",
      "신정4동",
      "신정6동",
    ],
    강서구: [
      "-",
      "염창동",
      "등촌1동",
      "등촌2동",
      "등촌3동",
      "화곡본동",
      "화곡1동",
      "화곡2동",
      "화곡3동",
      "화곡4동",
      "화곡6동",
      "화곡8동",
      "우장산동",
      "까치산동",
      "가양1동",
      "가양2동",
      "가양3동",
      "발산1동",
      "공항동",
      "방화1동",
      "방화2동",
    ],
    구로구: [
      "-",
      "신도림동",
      "구로1동",
      "구로3동",
      "구로4동",
      "구로5동",
      "고척1동",
      "고척2동",
      "개봉1동",
      "개봉2동",
      "개봉3동",
      "오류1동",
      "오류2동",
      "수궁동",
      "가리봉동",
      "천왕1동",
      "천왕2동",
      "천왕3동",
      "항동",
      "가산동",
      "독산1동",
      "독산2동",
      "독산3동",
    ],
    금천구: [
      "-",
      "가산동",
      "독산1동",
      "독산2동",
      "독산3동",
      "독산4동",
      "시흥1동",
      "시흥2동",
      "시흥3동",
      "시흥4동",
    ],
    영등포구: [
      "-",
      "영등포본동",
      "영등포동",
      "여의도동",
      "당산1동",
      "당산2동",
      "양평1동",
      "양평2동",
      "신길1동",
      "신길3동",
      "신길4동",
      "신길5동",
      "신길6동",
      "신길7동",
      "대림1동",
      "대림2동",
      "대림3동",
    ],
    동작구: [
      "-",
      "노량진1동",
      "노량진2동",
      "상도1동",
      "상도2동",
      "상도3동",
      "상도4동",
      "흑석동",
      "사당1동",
      "사당2동",
      "사당3동",
      "사당4동",
      "사당5동",
      "대방동",
      "신대방1동",
      "신대방2동",
    ],
    관악구: [
      "-",
      "보라매동",
      "청림동",
      "성현동",
      "행운동",
      "낙성대동",
      "중앙동",
      "인헌동",
      "남현동",
      "서원동",
      "신원동",
      "서림동",
      "신림동",
      "난향동",
      "조원동",
      "대학동",
      "은천동",
      "성북동",
      "청룡동",
      "난곡동",
      "삼성동",
      "미성동",
    ],
    서초구: [
      "-",
      "서초1동",
      "서초2동",
      "서초3동",
      "서초4동",
      "잠원동",
      "반포본동",
      "반포1동",
      "반포2동",
      "반포3동",
      "반포4동",
      "방배본동",
      "방배1동",
      "방배2동",
      "방배3동",
      "방배4동",
      "양재1동",
      "양재2동",
      "내곡동",
    ],
    강남구: [
      "-",
      "개포1동",
      "개포2동",
      "개포4동",
      "논현1동",
      "논현2동",
      "논현동",
      "대치1동",
      "대치2동",
      "대치4동",
      "도곡1동",
      "도곡2동",
      "삼성1동",
      "삼성2동",
      "세곡동",
      "수서동",
      "신사동",
      "압구정동",
      "역삼1동",
      "역삼2동",
      "일원1동",
      "일원2동",
      "일원본동",
      "자곡동",
      "청담동",
    ],
    송파구: [
      "-",
      "풍납1동",
      "풍납2동",
      "거여1동",
      "거여2동",
      "마천1동",
      "마천2동",
      "방이1동",
      "방이2동",
      "오금동",
      "송파1동",
      "송파2동",
      "석촌동",
      "삼전동",
      "가락본동",
      "가락1동",
      "가락2동",
      "문정1동",
      "문정2동",
      "잠실본동",
      "잠실2동",
      "잠실3동",
      "잠실4동",
      "잠실6동",
      "잠실7동",
      "잠실2동",
    ],

    강동구: [
      "-",
      "강일동",
      "상일동",
      "명일1동",
      "명일2동",
      "고덕1동",
      "고덕2동",
      "암사1동",
      "암사2동",
      "암사3동",
      "천호1동",
      "천호2동",
      "천호3동",
      "성내1동",
      "성내2동",
      "성내3동",
      "길동",
    ],
  };

  const dongs = dongList[gu];

  return (
    <Dropdown style={{ marginTop: "10px", width: "110px" }}>
      <DropdownButton
        id="dong-dropdown"
        title={dong}
        onSelect={(e) => setDong(e)}
        className="dropdown_menu"
      >
        {dongs.map((dongItem) => (
          <Dropdown.Item
            className="dropdown_item"
            key={dongItem}
            eventKey={dongItem}
          >
            {dongItem}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Dropdown>
  );
};

export default DongDropdown;

//서울의 각 구에 해당하는 동
*/
