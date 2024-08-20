package esdproject.studentfeepayment.domain;

import jakarta.persistence.*;

@Entity
public class StudentBill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;



    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Bill getBill() {
        return bill;
    }

    public void setBill(Bill bill) {
        this.bill = bill;
    }

    @OneToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }
}
