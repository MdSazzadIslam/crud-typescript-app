import React, {useState} from 'react'
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

 

const CreateCustomer:React.FC = () => {

 

    const[customer, setCustomer] = useState(defaultState);
 
const handleChange = <P extends keyof IProps>(prop: P, value: IProps[P]) => {
    setCustomer({ ...customer, [prop]: value });
  };

    const handleSubmit = async(e:any) =>
    {
        debugger;
        e.persist();
        await services.saveData(customer);
        
    }




    return (
        <div className="customer">
            <h1>Add Cusomer</h1>
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
 <button onClick={handleSubmit}>Save</button>
    </div>
            
           
            
        </div>
    )
}

export default CreateCustomer
