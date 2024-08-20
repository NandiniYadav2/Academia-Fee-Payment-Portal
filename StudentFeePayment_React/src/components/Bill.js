import React, {useState} from 'react'
import './Bill.css';




const Bill = ({ bill, studentId, payBill ,onPaymentSuccess, payInstallments }) => {
 
 
  const handlePayBill = () => {
    
    const isConfirmed = window.confirm(`Are you sure you want to pay the "${bill.description}" bill?`);
  
    
   if (isConfirmed) {
      const params={bill,studentId}
      
      payBill(params).then(() =>{
        onPaymentSuccess(bill.billId);
      });
   }
  };
  const handleInstallments = () =>{
    console.log("view payments ${bill.description}");
    const isConfirmed = window.confirm(`Are you sure you want to pay the "${bill.description}" bill in installments?`);
  
    
   if (isConfirmed) {
      const params={bill,studentId}
      
      payInstallments(params).then(() =>{
        onPaymentSuccess(bill.billId);
      });
   }
  };

 
  return (
    
    <tr>
      {/* Render the Bill's details */}
      <td>{bill.description}</td>
      <td>{new Date(bill.billDate).toLocaleDateString()}</td>
      <td>{Number(bill.amount).toLocaleString()}</td>
      <td>
        
      
       <button onClick={handlePayBill}>
          Pay    
      </button>
        
      </td>
      <td>
        
      
        <button onClick= {handleInstallments}>
           Installments 
       </button>
         
       </td>
    </tr>
    
  )
}

export default Bill



