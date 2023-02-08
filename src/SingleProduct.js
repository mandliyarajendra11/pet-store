import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import MyIMG from "./components/MyIMG";
import { Container } from "./styles/Container";
import FormatPrice from './Helpers/FormatPrice'
import {TbTruckDelivery ,TbReplace} from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
const url ="https://api.pujakaitem.com/api/products"
function SingleProduct() {
  //url id which is declear in app page router routes singleproduct 
  const {getSingleProduct,SingleProducts,SingleLoading}=useProductContext();
  const {id}=useParams();
  const {id:no,name,company,price,description,category,stock,stars,reviews,image}=SingleProducts
  useEffect(()=>{
    getSingleProduct(`${url}?id=${id}`);
  },[])
  if(SingleLoading)
 return <h3>data is loading</h3>
 return <Wrapper>
    <PageNavigation title={name}/>
    <Container className="container">
      <div className="grid grid-two-column">
<div className="product_images">
<MyIMG img={image}/>
</div>
<div className="product-data">
<h2>{name}</h2>
<p>{stars}</p>
<p>{reviews} reviews</p>
<p className="product-data-price">
  MRP:
  <del>
    <FormatPrice price={price*price/2}/>
  </del>
</p>
<p className="product-data-price product-data-real-price">
  Deal of the day <FormatPrice price={price} / >
</p>
<p>{description}</p>

<div className="product-data-warranty">  
  <div className="product-warranty-data">
  <TbTruckDelivery className="warranty-icon"/>
  <p>Free Delivery</p>
</div>

<div className="product-warranty-data">
  <TbReplace className="warranty-icon"/>
  <p>Free Delivery</p>
</div>

<div className="product-warranty-data">
  <MdSecurity className="warranty-icon"/>
  <p>Free Delivery</p>
</div>

</div>
<div className="product-data-info">
  <p>Available : <span> {stock? "In stock":"out of stock"}</span></p>
<p>ID : <span>{no}</span></p>
<p>Brand : <span>{company}</span></p>
</div>
</div>
      </div>
    </Container>
  </Wrapper>;
}


const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
