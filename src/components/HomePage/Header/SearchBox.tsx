import React from "react"
import styled from "styled-components"
import SearchIcon from "./SearchIcon"

const hotKeywordSearching = ['Men jackets', 'Women pants', 'Baby clothes', 'Blankets', 'Fans', 'Phones']

const SearchBox = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input placeholder="Enter a product name that you are looking for" />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </InputWrapper>
      <HotKeywordContent>
        {hotKeywordSearching.map((keyword: string, index: number) => 
          <KeywordWrapper key={index}>{keyword}</KeywordWrapper>
        )}
      </HotKeywordContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 800px;
  height: 40px;
  margin-top: -15px;
`

const InputWrapper = styled.div`
  width: 800px;
  padding: 5px;
  height: 34px;
  display: flex;
  background: white;
`

const Input = styled.input`
  width: 745px;
  height: 100%;
  border: none;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`

const SearchIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fb5533;
  padding: 0 15px;
`

const HotKeywordContent = styled.div`
  width: 100%;
  height: 14px;
  padding: 5px 0;
  display: flex;
  color: white;
`

const KeywordWrapper = styled.div`
  padding-right: 12px;
  cursor: pointer;

  &:hover {
    opacity: .5;
  }
`

export default SearchBox
