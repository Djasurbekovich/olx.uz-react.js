import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../Api/instance";
import Header from "../../Components/Header/Header";
import Container from "../../Utils/Container/Container";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="s-p__wrapper">
          <div>
            {data.images && data.images.length > 0 ? (
              <img className="s-p__img" src={data.images[0]} alt="Product" />
            ) : (
              <img
                className="s-p__img"
                src="https://picsum.photos/200/300"
                alt="Picsum"
              />
            )}
          </div>
          <div className="s-p__info">
            <h3 className="s-p__title">{data.title}</h3>
            <p className="s-p__desc">{data.description}</p>
            <strong className="s-p__price">${data.price}</strong>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;