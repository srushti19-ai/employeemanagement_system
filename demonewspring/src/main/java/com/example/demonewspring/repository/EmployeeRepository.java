package com.example.demonewspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demonewspring.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
