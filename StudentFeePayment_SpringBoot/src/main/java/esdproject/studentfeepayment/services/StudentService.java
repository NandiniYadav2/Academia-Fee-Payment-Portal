package esdproject.studentfeepayment.services;

import esdproject.studentfeepayment.domain.Bill;
import esdproject.studentfeepayment.domain.Student;
import esdproject.studentfeepayment.domain.StudentBill;
import esdproject.studentfeepayment.exceptions.StudentNotFoundException;
import esdproject.studentfeepayment.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

     @Autowired
     private BCryptPasswordEncoder encoder;
    public List<Bill> getStudentBills(Long studentId){
        Student student = studentRepository.findByStudentId(studentId);

        if(student == null){
            throw new StudentNotFoundException("Student Not Found with id " + studentId);
        }

        List<StudentBill> studentBills = student.getStudentBills();

        List<Bill> bills = new ArrayList<>();

        for(StudentBill studentBill:studentBills){
            bills.add(studentBill.getBill());
        }

        return bills;
    }

    public boolean authenticate(String email, String password){
        Student student = studentRepository.findByEmail(email);
        if(student == null){
            throw new StudentNotFoundException("Student Not Found with email " + email);
        }
        String hashedPassword = student.getPassword();
        boolean isMatch = encoder.matches(password, hashedPassword);
        return isMatch;
    }
}
