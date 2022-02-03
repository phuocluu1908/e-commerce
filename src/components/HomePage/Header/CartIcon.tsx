import React from "react"
import styled from "styled-components"

const CartIcon = () => {
  return (
    <Wrapper>
      <svg width="35" height="28.6" viewBox="0 0 256 256" xmlSpace="preserve">
        <desc>Created with Fabric.js 1.7.22</desc>
        <defs></defs>
        <g transform="translate(128 128) scale(0.72 0.72)">
          <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
            <path
              d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 H 45 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 41.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
              fill="white"
            />
            <circle
              cx="28.88"
              cy="74.33"
              r="6.16"
              transform="  matrix(1 0 0 1 0 0) "
              fill="white"
            />
            <circle
              cx="74.59"
              cy="74.33"
              r="6.16"
              transform="  matrix(1 0 0 1 0 0) "
              fill="white"
            />
          </g>
        </g>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px 0 0 35px;
  cursor: pointer;

  &:hover {
      opacity: 0.5;
  }
`

export default CartIcon
