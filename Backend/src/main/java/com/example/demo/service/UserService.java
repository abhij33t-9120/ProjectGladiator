package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@Service
public class UserService {
	
	@Autowired
	private UserDao userRepo;
	
	public List<User> searchUser(String email) {
		List<User> users = userRepo.findByEmail(email);
		return users;
	}
	
	public User createUser(User u) {
		if(userRepo.findByEmail(u.getEmail()).size()>0)
			return null;
		return userRepo.save(u);
	}
	
	public int updateUser(int user_id, String name) {
		return userRepo.updateUserNameById(name, user_id);
	}
	
}

