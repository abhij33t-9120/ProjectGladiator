package com.example.demo.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SignIn")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;
	private String name;
	private String email;
	private String password;
	private String Role="User";
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}

	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}
	public User(int user_id, String name, String email, String password, String role) {
		super();
		this.user_id = user_id;
		this.name = name;
		this.email = email;
		this.password = password;
		Role = role;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
