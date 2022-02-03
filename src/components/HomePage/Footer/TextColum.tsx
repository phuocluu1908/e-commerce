import React from "react"
import styled from "styled-components"

interface ITextColumn {
  title: string
  contents: string[]
}

const TextColum = ({ title, contents }: ITextColumn) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {contents.map((text: string, index: number) => (
        <Content key={index}>{text}</Content>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20%;
  color: rgba(0,0,0,.54);
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
`

export default TextColum
