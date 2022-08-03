package com.example.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.User;

public interface UserDao extends JpaRepository<User, Long>{
	public List<User> findByEmail(String email);
	
	@Transactional
	@Modifying
	@Query("update User s set s.name=?1 where s.user_id=?2")
	int updateUserNameById(String name, Integer user_id);
}
