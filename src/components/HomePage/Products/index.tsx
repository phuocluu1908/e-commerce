import React from "react"
import ProductItem from "./ProductItem"
import styled from 'styled-components'

const index = () => {
  return (
    <Wrapper>
      <ProductItem />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
`

export default index
