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
export const getSingleProduct = async (id) => {
  const products = await getProducts();

  console.log("herehere here");

  console.log(products.documents);

  const singleProduct = products.find((product) => product.id === id);

  if (!singleProduct) {
    throw new Error("Couldn't find a product with that ID");
  }

  return singleProduct;
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
export const addCart = async (id, amount) => {
  const collectionRef = firestore.collection("Cart");

  const newProducts = await getSingleProduct(id);

  if (newProducts.quantity < amount) {
    alert("We don't have that many in stock");
  } else {
    console.log("test");
    console.log({ amount: amount });
    collectionRef.add({
      id: newProducts.id,
      amount: amount,
    });

    updateProductAmount(id, amount);
  }
};

export const updateProductAmount = async (id, amount) => {
  const collectionRef = firestore.collection("Laptops");
  // docRef.set(
  //   {
  //     ticket: true,
  //   },
  //   { merge: true }
  // );
  // const docRef = collectionRef.doc(id);
  console.log("testing55555");

  // console.log(docRef);
  console.log(id);
  console.log(amount);

  // await docRef.update(amount);
};

export const deleteCartProduct = async (id, amount) => {};
