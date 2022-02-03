import React from "react"
import styled from "styled-components"
import CartIcon from "./CartIcon"
import SearchBox from "./SearchBox"
import ShopeeIcon from "./ShopeeIcon"

const HeaderInteract = () => {
  return (
    <Wrapper>
      <Content>
        <ShopeeIcon />
        <SearchBox />
        <CartIcon />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 85px;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default HeaderInteract
