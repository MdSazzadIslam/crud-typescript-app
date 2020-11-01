import firebase from "./firebase";
const db = firebase.ref("/customer");

class services {
 
  getAll() {
    debugger;
    console.log(db);
    return db;
  }

 

  saveData(data: any) {
    debugger;
    try {
      return db
      .push(data)
      .then((res) => {
        console.log("Added");
        alert("Added");
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error)
    }
    
  }

   updateData(key: any, value :any) {
    debugger;
    return db
      .child(key)
      .update(value)
      .then(() => {
        console.log("Updated");
        alert("Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

deletData(key: any) {
    
    return db
      .child(key)
      .remove()
      .then((res) => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }

 
  deletAllData() {
    return db
      .remove()
      .then((res) => {
        console.log("Deleted");
      })
      .then((err) => {
        console.log(err);
      });
  }
} export default new services