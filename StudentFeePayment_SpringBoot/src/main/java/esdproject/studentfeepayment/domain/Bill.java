package esdproject.studentfeepayment.domain;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bill_id")
    private long billId;

   @Column
   private String description;

   @Column(nullable = false)
    private int amount;

   @Column(name = "bill_date", nullable = false)
    private Date billDate;

    @OneToMany(mappedBy = "bill")
    private List<StudentPayment> studentPayments = new ArrayList<>();
    public Bill() {
    }



    public String getDescription() {
        return description;
    }

    public long getBillId() {
        return billId;
    }

    public void setBillId(long billId) {
        this.billId = billId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getBillDate() {
        return billDate;
    }

    public void setBillDate(Date billDate) {
        this.billDate = billDate;
    }

    public void addStudentPayment(StudentPayment studentPayment) {
        this.studentPayments.add(studentPayment);
    }

    public void  removeStudentPayment(StudentPayment studentPayment) {
        this.studentPayments.remove(studentPayment);
    }

    public List<StudentPayment> getStudentPayments() {
        return studentPayments;
    }
}

