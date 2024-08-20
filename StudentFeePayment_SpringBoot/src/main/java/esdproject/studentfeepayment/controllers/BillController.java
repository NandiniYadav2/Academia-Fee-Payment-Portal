package esdproject.studentfeepayment.controllers;

import esdproject.studentfeepayment.domain.StudentPayment;
import esdproject.studentfeepayment.services.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/bill")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping("/payments")
    public Iterable<StudentPayment> getStudentPayment(@RequestParam long billId){
        return billService.getStudentPayments(billId);
    }

    @PostMapping("/pay")
    public ResponseEntity<String> pay(@RequestParam long billId, @RequestParam int amount, @RequestParam String description){

    }
}
