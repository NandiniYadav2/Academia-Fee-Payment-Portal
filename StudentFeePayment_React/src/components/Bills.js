import React, { useState } from 'react'
import Bill from './Bill'
import './Bills.css';


const Bills = ({ bills, studentId, payBill,payInstallments }) => {  
   const [paidBillIds, setPaidBillIds] = useState([]);
   

   const handlePaymentsSucess = (billId) =>{
    setPaidBillIds((prevIds) => [...prevIds, billId]);


   }
  
   
  if (bills.length === 0)
    return null

  return (
    <div className='m-5' id="bills">
      <h2 className='billhead'>Your Bills</h2>
      <table cellPadding={10}>
        <tr>
          <th>Bill Description</th>
          <th>Bill Date</th>
          <th>Bill Amount</th>
          <th>Pay</th>
          <th>Installments</th>


        </tr>
        { 
          
          bills.map(b =>
            <Bill
              bill={b}
              studentId={studentId}
              key={b.billId}
              payBill={payBill}
              payInstallments={payInstallments}
              onPaymentSuccess ={handlePaymentsSucess}
              
            /> 
          )
        }
      </table>
    </div>
  )
}

export default Bills