package com.example.demonewspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demonewspring.entity.Employee;
import com.example.demonewspring.service.EmployeeService;


@RestController
@RequestMapping("/emp")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	
	private EmployeeService empservice;
	public EmployeeController(EmployeeService empservice) {
		this.empservice=empservice;
	}

	@PostMapping("/all")
	public Employee savealldata(@RequestBody Employee employee) {
		return empservice.savedata(employee);
	}
	
	@GetMapping("/display")
	public List<Employee> showalldata() {
		return empservice.showdata(null);
	}
	
	@DeleteMapping("/{id}")
	public void deletedatabyid(@PathVariable Long id) {
		empservice.deletedata(id);
	}
}
