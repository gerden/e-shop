import firestore from "../firebase";
import students from "./students";

export const getProducts = async () => {
  const collectionRef = firestore.collection("Laptops");

  // QuerySnapshot
  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot
  const querySnap = await collectionRef.get();

  // Getting array of all documents
  const documents = querySnap.docs;

  // use data() method to get an object containing the documents data

  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data;
};
export const getCartProducts = async () => {
  const collectionRef = firestore.collection("Cart");

  // QuerySnapshot
  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot
  const querySnap = await collectionRef.get();

  // Getting array of all documents
  const documents = querySnap.docs;

  // use data() method to get an object containing the documents data

  const data = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return data;
};

export const getSingleProduct = async (number) => {
  const products = await getProducts();

  const singleProduct = products.find((product) => product.number === number);

  if (!singleProduct) {
    throw new Error("Couldn't find a product with that ID");
  }

  return singleProduct;
};

export const CheckForCartProduct = async (number) => {
  console.log("CheckForCartProduct");
  console.log(number);
  const products = await getCartProducts();
  console.log(products);

  const singleProduct = products.find((product) => product.number === number);
  console.log(singleProduct);
  console.log("check2");

  if (!singleProduct) {
    console.log("check21");
    console.log("false");
    return false;
  } else {
    console.log("2222");
    console.log("true");

    return true;
  }
};

export const seedStudents = async () => {
  const collectionRef = firestore.collection("Laptops");

  // data is QuerySnapshot
  const data = await collectionRef.get();

  // Stopping execution of function if DB is not empty
  // if (!data.empty) return;

  // map through every student inside of our data array, and add them to the "students" collection
  const promises = students.map(async (student) => {
    return await collectionRef.add(student);
  });

  await Promise.all(promises);
};
export const getFavouriteProducts = async (id) => {
  const products = await getProducts();

  const favouriteProducts = products.filter(
    (product) => product.favourited === true
  );

  if (!favouriteProducts) {
    throw new Error("Couldn't find favourited product");
  }

  return favouriteProducts;
};
export const addCart = async (product, amount) => {
  const collectionRef = firestore.collection("Cart");

  const newProducts = await getSingleProduct(product.number);
  console.log("result");
  console.log(product.number);
  const result = CheckForCartProduct(product.number) === true;
  console.log(result);

  if (newProducts.quantity < amount) {
    alert("We don't have that many in stock");
  } else if (amount <= 0) {
    alert("Must ask for more than 0");
  } else if (CheckForCartProduct(product.number) === true) {
    alert(
      "You already have this product go to the wish list if you want to change the amount of remove it"
    );
  } else {
    collectionRef.add({
      number: newProducts.number,
      amount: amount,
    });

    updateProductAmount(product, product.quantity - amount);
  }
};

export const updateProductAmount = async (product, amount) => {
  const collectionRef = firestore.collection("Laptops");

  const docRef = collectionRef.doc(product.id);
  await docRef.update({ quantity: amount });
};

export const updateCartProductAmount = async (product, amount) => {
  const collectionRef = firestore.collection("Cart");
  const docRef = collectionRef.doc(product.id);
  await docRef.update({ amount: amount });
};

export const deleteCartProduct = async (product) => {
  const collectionRef = firestore.collection("Cart");

  const docRef = collectionRef.doc(product.id);

  await docRef.delete();
};
