import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/index";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Product() {
  const {product} = useLoaderData();
  const [productAmount, setProductAmount] = useState(1)

  const setAmount = (type) => {
    if (type == "decrease" && productAmount > 1){
      setProductAmount((prev) => prev-1)
    }else if (type == "increase" ){
      setProductAmount((prev) => prev+1)
    }
  }

  const addToBag = () => {
    const newProduct = {
      ...product,
      amount: productAmount
    }
  }

    return(
    <>
      <div className="max-w-6xl mx-auto flex flex-col text-center items-start gap-10">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
          {product.images.map((image)=> {
            return (
              <div className="carousel-item">
                <img src={image} className="rounded-box h-96" />
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setAmount("increase")} className="btn btn-secondary">+</button>
          <h3>{productAmount}</h3>
          <button onClick={() => setAmount("decrease") } className="btn btn-secondary " disabled={productAmount == 1? true: false}>-</button>
          <hr />
          <button  className="btn btn-primery">Add To Bag</button>
        </div>
      </div>
    </>
)}

export default Product;
