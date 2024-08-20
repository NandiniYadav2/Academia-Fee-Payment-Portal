package esdproject.studentfeepayment.controllers;

import esdproject.studentfeepayment.domain.Bill;
import esdproject.studentfeepayment.repositories.StudentRepository;
import esdproject.studentfeepayment.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Iterator;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private StudentService studentService;



    @GetMapping("/bills")
    public Iterable<Bill> getStudentBills(@RequestParam long id){
        List<Bill> bills = studentService.getStudentBills(id);
        return bills;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String email,@RequestParam String password) {


        boolean isAuthenticated = studentService.authenticate(email, password);

        if (isAuthenticated) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credential");
        }
    }
}
