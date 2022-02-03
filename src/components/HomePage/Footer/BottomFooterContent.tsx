import React from "react"
import styled from "styled-components"

const priority = "© 2022 Shopee. Tất cả các quyền được bảo lưu"
const nations =
  "Quốc gia & Khu vực: Singapore | Indonesia | Đài Loan | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México | Colombia | Chile | Poland | Spain | France | India | Argentina"

function BottomFooterContent() {
  return (
    <>
      <Section width={"30%"} start>{priority}</Section>
      <Section width={"70%"}>{nations}</Section>
    </>
  )
}

const Section = styled.div<{ width: string; start?: boolean }>`
  width: ${({ width }) => width};
  display: flex;
  justify-content: ${({ start }) => start ? 'flex-start' : 'center' };
  flex-wrap: wrap;
`

export default BottomFooterContent
