package com.example.demo.dao;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserDaoTest {
	
	@Autowired
	UserDao dao;
	 private User getUser() {
		 User u = new User(2,"Abhi","abc@ssss","aa111","user");
		 return u;
	 }
	 
	 @Test
	 public void createTest() {
		 User u = getUser();
		 User u1 = dao.save(u);
		 assertEquals(u1.getUser_id(),u.getUser_id());
	 }
	 
	 @Test
	 public void checkEmail() {
		 User u = getUser();
		 User u1 = dao.findByEmail(u.getEmail()).get(0);
		//if email exists returns already presented email
		 assertNotEquals(u,u1);
		//if email not exists returns new User()
	 }
}