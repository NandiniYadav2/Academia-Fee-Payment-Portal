import axios from 'axios'
import './servicebill.css';
import { API_BASE_URL } from './constants';


const getUserBills = async (student) => {
  
 try{

  const billsUrl = `${API_BASE_URL}/student/bills`;
   const response = await axios.get(`${billsUrl}?studentId=${student.studentId}`)
  
  
  return response.data
 }catch (error) {
    console.error('Failed to fetch user bills:', error.message);
    throw new Error('Failed to fetch user bills');
  }
};


const payBill = async (params) => {
  
  try{
    const bill=params.bill
    const studentId=params.studentId
    const billsUrl = `${API_BASE_URL}/bill/pay`;
    const response = await axios.post(`${billsUrl}?billId=${bill.billId}&studentId=${studentId}&amount=${bill.amount}&description=${bill.description}`)
    return response.data
}catch (error) {
     console.error(`Failed to pay bill ${params.bill.billId}:`, error.message);
     throw new Error(`Failed to pay bill ${params.bill.billId}`);
  }
};
const payInstallments = async (params) => {
  
  try{
    const bill=params.bill
    const studentId=params.studentId
    const billsUrl = `${API_BASE_URL}/bill/installments`;
    const response = await axios.post(`${billsUrl}?billId=${bill.billId}&studentId=${studentId}&amount=${bill.amount}&description=${bill.description}`)
    return response.data
}catch (error) {
     console.error(`Failed to pay bill ${params.bill.billId}:`, error.message);
     throw new Error(`Failed to pay bill ${params.bill.billId}`);
  }
};

const exportObject = { getUserBills, payBill, payInstallments }

export default exportObject