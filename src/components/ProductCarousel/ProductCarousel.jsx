import { getFavouriteProducts } from "../../services/server";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink, useSearchParams } from "react-router-dom";

function ProductCarousel() {
  const [FavouriteProducts, setFavouriteProducts] = useState();
  const [FavouriteProduct, setFavouriteProduct] = useState();
  const [imageNumber, setImageNumber] = useState(0);
  const { productId } = useParams();
  const id = parseInt(productId);
  // if (singleProduct) {
  //   setLoading(false);
  // }
  let size = 0;

  console.log("testID");
  console.log(id);
  console.log("getSingleProduct(id)");
  console.log(FavouriteProducts);
  console.log(FavouriteProduct);

  // FavouriteProducts;

  if (FavouriteProducts != undefined) {
    console.log("count mmmmmmmmmmmmm");
    size = FavouriteProducts.length;
    console.log(size);
  }

  const getData = async () => {
    const data = await getFavouriteProducts();
    setFavouriteProducts(data);
    setFavouriteProduct(data[imageNumber]);
  };

  const imageDecrease = async () => {
    if (imageNumber === 0) {
      setImageNumber(size - 1);
    } else {
      setImageNumber(imageNumber - 1);
    }
  };
  const imageIncrease = async () => {
    if (imageNumber === size - 1) {
      setImageNumber(0);
    } else {
      setImageNumber(imageNumber + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [imageNumber]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!FavouriteProducts && <p>Loading</p>}
      {FavouriteProducts && (
        <main>
          <h2>Favourites</h2>
          <img
            name="productImage"
            src={FavouriteProduct.imageUrl[0]}
            width="500"
            height="333"
          ></img>
          <div>
            <button onClick={() => imageDecrease()}>{"<"}</button>
            <NavLink to={FavouriteProduct.id.toString()}>Details/Buy</NavLink>
            <button onClick={() => imageIncrease()}>{">"}</button>
          </div>
        </main>
      )}
    </>
  );
}
export default ProductCarousel;
