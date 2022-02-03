import React from "react"
import styled from "styled-components"

const leftContent = [
  "Seller channel",
  "Become a Shopee seller",
  "Download app",
  "Connect",
]
const rightContent = [
  "Notification",
  "Support",
  "English",
  "Sign up /",
  "Login",
]

const HeaderInfo = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentSection flexEnd={false}>
          {leftContent.map((content: string, index: number) => (
            <Content key={index}>{content} |</Content>
          ))}
        </ContentSection>
        <ContentSection flexEnd>
          {rightContent.map((content: string, index: number) => (
            <Content key={index}>{content}</Content>
          ))}
        </ContentSection>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
`

const ContentWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
`

const ContentSection = styled.div<{ flexEnd: boolean }>`
  width: 50%;
  height: 100%;
  display: flex;
  color: white;
  justify-content: ${({ flexEnd }) => (flexEnd ? `flex-end` : "none")};
`

const Content = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export default HeaderInfo
