import React, {useState, useEffect} from 'react'
import services from "../services";
/* import "./Customer.css"; */
import{Link} from "react-router-dom";

export interface IProps
{   
    name: string,
    address: string
}

export interface IState{
     
    submitSuccess: boolean,
    
}

const defaultState:IProps = {
    
    name:"",
    address:""
}

 

const EditCustomer = (props: any) => {

 
debugger;
    const[customer, setCustomer] = useState(defaultState);
 
const handleChange = <P extends keyof IProps>(prop: P, value: IProps[P]) => {
    setCustomer({ ...customer, [prop]: value });
  };

    const handleSubmit = async(e:any) =>
    {
        debugger;
        e.persist();
        await services.updateData(props.match.params.key, customer);
        
    }

    useEffect(() => {
    
        getDataById();
    }, [])

   const getDataById = () =>{
          const data = {
             
          name: props.match.params.name,
          address: props.match.params.address
      }
       setCustomer({ ...data });
    }
 

    return (
        <div className="customer">
            <h1>Edit Cusomer</h1>
             <Link to="/customer-list">List</Link>
            <input type="text" placeholder="Enter name" name ="name"  
            value={customer.name}
            onChange={(e) => {
          handleChange('name', e.target.value);
        }}
           />
 
            <input type="text" placeholder="Enter address" name ="address"  value={customer.address}
              onChange={(e)=> handleChange('address', e.target.value)}
           />
    <div>
 <button onClick={handleSubmit}>Update</button>
    </div>
            
           
            
        </div>
    )
}

export default EditCustomer
