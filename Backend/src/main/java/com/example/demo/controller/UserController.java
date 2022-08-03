package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;


@RestController
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	
//	to log in 
	@PostMapping("/login")
	public User login(@Valid @RequestBody  User u) {
		List<User> users = userService.searchUser(u.getEmail());
		if(users.size()==0)
			return null;
		if(u.getPassword().equals(users.get(0).getPassword()))
		{
			System.out.println(users.get(0).toString());
			return  users.get(0);
		}
		else
			return null;
		
	}
	
//	to register new user
	@PostMapping("/register")
	public String register(@Valid @RequestBody User user) {
		User u = userService.createUser(user);
		if(u == null)
			return "email already present";
		else
			return "account created";
	}
	
//	to edit user name
	@GetMapping("/edit")
	public String edit(@Valid @RequestParam(value="id") String id, @RequestParam(value="new") String new_name) {
		int i_d = Integer.parseInt(id);
		int i = userService.updateUser(i_d, new_name);
		return "updated";
	}
	
	
}
