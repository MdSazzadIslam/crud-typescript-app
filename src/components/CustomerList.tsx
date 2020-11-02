import React, {useState, useEffect} from 'react'
import{Link} from "react-router-dom";
import services from "../services";
import "./Customer.css";
 

export interface IProps
{   id:number,
    name: string,
    address: string
}
 


const CustomerList: React.FC = () => {
 
  const [customers, setCustomers] = React.useState<
    IProps[]
  >([]);
 
  const getData= () =>{

 
  debugger;
    const data = services.getAll();
    data.on("value", (snapshot) => {

      const studentRef = snapshot.val();
      const customers = [];
      for (let id in studentRef) {
        customers.push({ id, ...studentRef[id] });
      }
      setCustomers(customers);
    });
  }

useEffect(() =>{
  getData();
}, []);


  const deleteAllData = async () => {
    debugger;
    if (window.confirm("Are you sure to delete this record?")) {
      await services.deletAllData();
    }
  };
  const deleteData = async (id: any) => {
    debugger;
    if (window.confirm("Are you sure to delete this record?")) {
      await services.deletData(id);
      getData();
    }
  };

   

    return (
      <div className="container">
             <div className="row"> 
                <h1>List</h1>
      <Link to="/">Add</Link>
      <button
        onClick={() => {
          deleteAllData();
        }}
      >
        Delete All
      </button>
       
        <thead>
          <tr>
            <th>SL</th>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
           {customers.map((customer, index) => (
            <tr>
              <td>{index}</td>
              <td>{customer.id}</td>
               <td>{customer.name}</td>
              <td>{customer.address}</td>
                           <td>
                <Link to={`/edit-customer/${customer.name}/${customer.address}/${customer.id} `}>
                  Edit
                </Link>
              </td>

              <button
                onClick={() => {
                  deleteData(customer.id);
                }}
              >
                Delete
              </button>
            </tr>
          ))}
            </tbody>
           </div>
        </div>
    )
} ;export default CustomerList

 
