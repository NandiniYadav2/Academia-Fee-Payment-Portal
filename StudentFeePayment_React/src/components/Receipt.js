import React from 'react'
import './Receipt.css';

const Receipt = ({receiptDetails }) => {
 
 return (
    <div className='reheader'>
       <div className='re-heading'>Payment Receipt</div>
       <div className='waste'></div>
       <div className='name'>
          <p>Name : ${receiptDetails.name} ${receiptDetails.last_name}</p>
          <p>Student Id : ${receiptDetails.studentId}</p>
       </div>
       <div className='details'>
           <p>Invoice #PNO326</p>
            <p>Bill Id : ${receiptDetails.billId}</p>
            <p>Date : ${receiptDetails.date}</p>
       </div>
       <div className='amount-details'>
        <hr/>
        <div className='amouunt1'>
           <p>Amount</p>
            <p>Rs. ${receiptDetails.amount}</p>
       </div>
       <hr/>
        <div className='amount2'>
           <p>Amount Remaining</p>
            <p>Rs. 0</p>
       </div>
       <hr/>
        <div className='amount3'>
           <p>Total Paid</p>
            <p>Rs. ${receiptDetails.amount}</p>
       </div>
       
       <div className='amount3'>
           <button>Go Back</button>
           <button>Print</button>
       </div>

       </div>

    </div>
    
  )

}
export default Receipt