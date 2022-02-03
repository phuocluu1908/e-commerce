import React from "react"
import styled from "styled-components"
import products from "./products"

const ProductItem = () => {
  return (
    <Wrapper>
      {products.map((item, i) => (
        <ItemWrapper>
          <ProductImage src={item.img} />
          <ProductTitle>
            {item.name}
          </ProductTitle>
          <PriceAndSoldQuantifyWrapper>
            <PriceWrapper>${item.price}</PriceWrapper>
            <SoldQuantityWrapper>Sold ${item.sold}</SoldQuantityWrapper>
          </PriceAndSoldQuantifyWrapper>
        </ItemWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 277px;
  padding: 0 .3125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ItemWrapper = styled.div`
  background: white;
  width: 16%;
  margin-top: 0.3125rem;
  cursor: pointer;
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
