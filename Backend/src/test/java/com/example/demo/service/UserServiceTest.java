package com.example.demo.service;
import static org.assertj.core.api.Assertions.assertThat;
//import static org.junit.Assert.assertThat;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.dao.UserDao;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceTest {
	
	@Autowired
	private UserService userservice;
	@MockBean
	private UserDao userdao;
	
	@Test
	public void CreateUser() {
		User u = new User();
		u.setUser_id(1);
		u.setName("Abhi");
		u.setEmail("abc@xyzz");
		u.setPassword("add1");
		u.setRole("user");
		
		Mockito.when(userdao.save(u)).thenReturn(u);
		assertThat(userservice.createUser(u)).isEqualTo(u);
	}
	
	@Test
	public void updateUser() {
		User u = new User(1,"Abhi","abc@xyzz","add1","user");
		Optional<User> uu=Optional.of(u);
		Mockito.when(userdao.findById((long)1)).thenReturn(uu);
		u.setName("Abhijeet");
		Mockito.when(userdao.save(u)).thenReturn(u);
		assertThat(userservice.updateUser(1, "Abhi")).isEqualTo(0);
	}
}