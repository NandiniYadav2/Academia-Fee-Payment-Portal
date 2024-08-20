package esdproject.studentfeepayment.services;

import esdproject.studentfeepayment.domain.Bill;
import esdproject.studentfeepayment.domain.StudentPayment;
import esdproject.studentfeepayment.exceptions.BillNotFoundException;
import esdproject.studentfeepayment.repositories.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    @Autowired
    private BillRepository billRepository;

    public List<StudentPayment> getStudentPayments(Long billId){

        Bill bill = billRepository.findByBillId(billId);
         if(bill == null){
             throw new BillNotFoundException("Bill Not Found with id " + billId );
         }

         return bill.getStudentPayments();

    }
    public void pay(Long billId, int amount){
        Bill bill = billRepository.findByBillId(billId);
        if(bill == null){
            throw new BillNotFoundException("Bill Not Found with id " + billId );
        }
        StudentPayment studentPayment = new StudentPayment();
        studentPayment.setAmount(amount);


    }
}
