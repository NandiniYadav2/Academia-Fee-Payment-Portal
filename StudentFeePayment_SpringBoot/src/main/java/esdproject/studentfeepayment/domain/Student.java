package esdproject.studentfeepayment.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private long studentId;

    @Column(nullable = false)
    private String password;

    @Column(name = "roll_number", nullable = false)
    private int rollNumber;
    @Column(nullable = false, unique = true)
    private String email;

    @Column(name = "first_name", nullable = false, unique = true)
    private int firstName;

    @Column(name = "last_name")
    private int lastName;


    @OneToMany(mappedBy = "student")
    private List<StudentBill> studentBills = new ArrayList<>();

    @OneToMany(mappedBy = "student")
    private List<StudentPayment> studentPayments = new ArrayList<>();
    public Student() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getStudentId() {
        return studentId;
    }

    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getFirstName() {
        return firstName;
    }

    public void setFirstName(int firstName) {
        this.firstName = firstName;
    }

    public int getLastName() {
        return lastName;
    }

    public void setLastName(int lastName) {
        this.lastName = lastName;
    }

    public void addStudentBill(StudentBill studentBill) {
        this.studentBills.add(studentBill);
    }

    public void removeStudentBill(StudentBill studentBill) {
        this.studentBills.remove(studentBill);
    }

    public void addStudentPayment(StudentPayment studentPayment) {
        this.studentPayments.add(studentPayment);
    }

    public void  removeStudentPayment(StudentPayment studentPayment) {
        this.studentPayments.remove(studentPayment);
    }

    public List<StudentBill> getStudentBills() {
        return studentBills;
    }
}
