import { useLoaderData, Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {products &&
        products.data.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <li className="card shadow mb-3" key={product.id}>
                <img
                  className="rounded-xl h-60"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body flex flex-col">
                  <h2 className="font-bold text-xl">
                    {product.title.slice(0, 19)}
                  </h2>
                  <p className="font-semibold relative bottom-0">
                    {product.price}$
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
    </ul>
  );
}

export default ProductsList;
