import React from "react";

function mainpage(props) {
  return (
    <>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h3>{`이 책은 총 ${props.pageNum} 페이지로 이루워져 있습니다.`}</h3>
    </>
  );
}

export default mainpage;
