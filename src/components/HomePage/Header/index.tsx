import React from 'react'
import styled from 'styled-components'
import HeaderInfo from './HeaderInfo'
import HeaderInteract from './HeaderInteract'

const Header = () => {
  return (<Wrapper>
    <HeaderInfo />
    <HeaderInteract />
  </Wrapper>)
}

const Wrapper = styled.div`
  height: 120px;
  background: rgb(249 77 47);
`

export default Header
