import React from "react"
import styled from "styled-components"

interface ITextIconColumn {
  title: string
  contents: any
}

const TextIconColum = ({ title, contents }: ITextIconColumn) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {contents.map((content: { text: string; src: string }, index: number) => (
        <Content key={index}>
          <Image src={content.src} alt="#" /> {content.text}
        </Content>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20%;
  color: rgba(0, 0, 0, 0.54);
`

const Title = styled.div`
  margin: 40px 0 20px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
`

const Content = styled.div`
  margin-bottom: 12px;
  opacity: 0.7;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`

export default TextIconColum
