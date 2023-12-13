import React, {useState, useEffect} from 'react';

import  api  from "../../services/api.js";

import { AiFillCloseCircle } from "react-icons/ai";

import '../style.css';

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [products, setProducts] = useState([])

  const [close, setClose] = useState(false);

  useEffect(() => {
    api
    .get("products").then((res) => {
      setProducts(res.data)
    })
    .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const detailPage = (products) => {
    setDetail([{...products}])
    setClose(true)
  }
  return (
    <>
    {
      close ?
      <div className="detail_container">
        <div className="detail_contant">
          <button className='close' onClick={() => setClose(false)}>
            <AiFillCloseCircle />
          </button>
          {
            detail.map((item) =>{
              return(
                <>
                  <div className="detail_info">
                    <div className="img-box">
                      <img src={item.linkImage} alt={item.nameGame} />
                    </div>
                    <div className="product_detail">
                      <h2>{item.nameGame}</h2>
                      <h3>{item.platarforms}</h3>
                      <h3>R$ {item.price}</h3>
                      <p>{item.description}</p>
                      <button>Add To Cart</button>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      :null
    }
      
      <div className="container">
        {
          products.map((curElm) => {
            return(
              <>
                <div className="box">
                  <div className="contant">
                    <div className="img-box">
                      <img src={curElm.linkImage} alt={curElm.nameGame}/>
                    </div>
                    <div className="deatil">
                      <div className="info">
                        <h3>{`${curElm.nameGame.substring(0,20)}`}</h3>
                        <p>R${curElm.price}</p>
                      </div>
                      <button onClick={() => detailPage (curElm)}>View</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Product