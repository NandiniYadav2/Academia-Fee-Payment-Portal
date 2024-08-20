package esdproject.studentfeepayment.repositories;

import esdproject.studentfeepayment.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

   Student findByStudentId(Long studentId);
   Student findByEmail(String email);


}
