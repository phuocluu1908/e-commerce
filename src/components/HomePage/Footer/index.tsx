import React from "react"
import styled from "styled-components"
import BottomFooterContent from "./BottomFooterContent"
import TextColum from "./TextColum"
import TextIconColum from "./TextIconColumn"

const customerCare = [
  "Support center",
  "Shopee blog",
  "Shopee mall",
  "Buying instructions",
  "Selling instructions",
  "Payment",
  "Shopee coin",
  "shipping",
  "Repayment",
  "Customer care",
  "Guarantee policies",
]

const aboutShopee = [
  `Introduction about Vietnam's Shopee`,
  "Hiring",
  "Shopee policies",
  "Security policies",
  "Genuine",
  "Seller channel",
  "Flash sale",
  "Marketing affiliate with Shopee",
  "Media contact",
]

const followUsOn = [
  {
    src: "https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png",
    text: "Facebook",
  },
  {
    src: "https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png",
    text: "Instagram",
  },
  {
    src: "https://img.icons8.com/ios-glyphs/30/000000/linkedin.png",
    text: "LinkedIn",
  },
]

const index = () => {
  return (
    <>
      <TopFooterWrapper>
        <TextColum title={"Customer Care"} contents={customerCare} />
        <TextColum title={"About Shopee"} contents={aboutShopee} />
        <TextIconColum title={"About Shopee"} contents={followUsOn} />
      </TopFooterWrapper>
      <BottomFooterWrapper>
        <BottomFooterContent />
      </BottomFooterWrapper>
    </>
  )
}

const TopFooterWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 40px;
`

const BottomFooterWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  color: rgba(0,0,0,.54);
  padding: 40px 0;
  border-top: 1px solid rgba(0,0,0,.1)
`

export default index
