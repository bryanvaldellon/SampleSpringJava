package com.samplefullstack.samplefullstack.repository;

import com.samplefullstack.samplefullstack.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
