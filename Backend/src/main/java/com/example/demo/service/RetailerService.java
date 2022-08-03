package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.RetailerDao;
import com.example.demo.entity.Product;
import com.example.demo.entity.Retailer;
import com.example.demo.entity.User;

@Service
public class RetailerService {
	@Autowired
	private RetailerDao retailerDao;
	
	public Retailer createRetailer(Retailer r) {
		if(retailerDao.findByEmail(r.getEmail()).size()>0)
			return null;
		return retailerDao.save(r);
	}
	
    public List<Retailer> getRetailer() {
    	List<Retailer> retailers = new ArrayList<>();  
    	retailerDao.findAll().forEach(retailer -> retailers.add(retailer));  
    	return retailers;
    }
    
	public List<Retailer> loginRetailer(String email,String password) {
		List<Retailer> retailers = retailerDao.findByEmailAndPassword(email,password);
		return retailers;
	}
	public void deleteRetilerbyId(int r_id) {
		retailerDao.deleteById(r_id);
	}
	
	public Retailer getRetailerbyId(int id) {
		return retailerDao.findByR_id(id).get(0);
	}
	
	public void deleteRetailerById(int id) {
		 retailerDao.deleteRetailerById(id);
	}
}
