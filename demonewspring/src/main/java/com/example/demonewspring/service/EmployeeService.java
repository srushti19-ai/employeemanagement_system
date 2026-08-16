package com.example.demonewspring.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demonewspring.entity.Employee;
import com.example.demonewspring.repository.EmployeeRepository;

@Service
public class EmployeeService {
    private EmployeeRepository emprepo;
    
    public EmployeeService(EmployeeRepository emprepo) {
        this.emprepo = emprepo;
    }
    public Employee savedata(Employee employee) {
    	    return emprepo.save(employee);
    }
    public List<Employee> showdata(Employee employee) {
    	    return emprepo.findAll();
    }
    public void deletedata(Long id) {
    	    emprepo.deleteById(id);
    }
    public Employee updatedata(Long id, Employee employee) {

        Employee existingEmployee = emprepo.findById(id)
                .orElseThrow();

        existingEmployee.setName(employee.getName());
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setDepartment(employee.getDepartment());

        return emprepo.save(existingEmployee);
    }
}
