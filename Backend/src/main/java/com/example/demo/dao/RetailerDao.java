package com.example.demo.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Retailer;

@Repository
public interface RetailerDao extends JpaRepository<Retailer, Integer>{
	public List<Retailer> findByEmailAndPassword(String email,String password);
	public List<Retailer> findByEmail(String email);
	@Query("select r from Retailer r where r.r_id=?1")
	public List<Retailer> findByR_id(int id);
	
	@Modifying
	@Transactional
	@Query("delete from Retailer r where r.r_id=?1")
	public void deleteRetailerById(int id);
}
