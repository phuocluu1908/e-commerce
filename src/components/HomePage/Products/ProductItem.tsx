import React from "react"
import styled from "styled-components"
import { ORANGE } from "../../common/colors"
import products from "./products"

const ProductItem = () => {
  return (
    <Wrapper>
      {products.map((item, i) => (
        <ItemWrapper key={i}>
          <ProductImage src={item.img} />
          <ProductTitle>{item.name}</ProductTitle>
          <PriceAndSoldQuantifyWrapper>
            <PriceWrapper>${item.price}</PriceWrapper>
            <SoldQuantityWrapper>Sold ${item.sold}</SoldQuantityWrapper>
          </PriceAndSoldQuantifyWrapper>
          <AddToCartPopup>Add To Cart</AddToCartPopup>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0 0.3125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const AddToCartPopup = styled.div`
  width: 100%;
  height: 30px;
  background: ${ORANGE};
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const ItemWrapper = styled.div`
  background: white;
  width: 16%;
  margin-top: 0.3125rem;
  cursor: pointer;
  position: relative;
  z-index: 10;
`

const ProductImage = styled.img`
  width: 100%;
  height: 188px;
`

const ProductTitle = styled.div`
  width: 158px;
  height: 38px;
  margin-top: 10px;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const PriceAndSoldQuantifyWrapper = styled.div`
  width: 158px;
  height: 30px;
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`

const PriceWrapper = styled.div`
  color: red;
  font-size: 20px;
  width: 50%;
`

const SoldQuantityWrapper = styled.div`
  width: 50%;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  color: rgba(0, 0, 0, 0.54);
`

export default ProductItem
