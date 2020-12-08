// To interact with Firebase Cloud Firestore: firebase.firestore().collection("users").<C/R/U/D>
// Collections are automatically added.
// Xử lý bất đồng bộ = Ép về đồng bộ

// Create: .add()
const addData = () => {
  firebase.firestore().collection("movies").add({
    name: "DEQWE",
    duration: 120,
    director: "Dz",
  });
};
// addData();

// Read: .get()
// - Read one:
async function readOne(id) {
  let result = await firebase.firestore().collection("users").doc(id).get();
  console.log(result.data());
}
// readOne("D4VmrOquy4aXdmPMY9hB");

// - Read many:
//  + Read all:
async function readAll() {
  let result = await firebase.firestore().collection("users").get();
  // console.log(result.docs);
  result.docs.forEach(function (doc) {
    console.log(doc.id, doc.data());
  });
}
// readAll();

//  + Read by condition: .where()
async function readByCondition() {
  let result = await firebase
    .firestore()
    .collection("users")
    .where("age", ">=", 25)
    .get();

  result.docs.forEach(function (doc) {
    console.log(doc.id, doc.data());
  });
}
// readByCondition();

// Update: .update()
function updateData(id) {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({ age: 30, address: "HN", favorites: ["sports", "games"] });
}
// updateData("MvP09OJcsKtzQQm3DdCw");

// Delete
function deleteData(id) {
  firebase.firestore().collection("users").doc(id).delete();
}
deleteData("Q6puKhn34HlWEEH6qXOM");