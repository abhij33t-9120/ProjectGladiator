package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CategoryDao;
import com.example.demo.entity.Category;

@Service
public class CategoryService {
	 @Autowired
	    private CategoryDao roleDao;

	    public Category createNewCategory(Category role) {
	        return roleDao.save(role);
	    }
	    
	    public List<Category> getCategory() {
	    	List<Category> Categories = new ArrayList<Category>();  
	    	roleDao.findAll().forEach(Category -> Categories.add(Category));  
	    	return Categories;
	    }
	    
	    public Optional<Category> getCategorybyId(int id) {
	    	return roleDao.findById(id);
	    }
	    
	    public void  deleteCategorybyId(int id) {
	    	 roleDao.deleteById(id);
	    }
	    
	    public void update(Category books, int bookid)   
	    {  
	    roleDao.save(books);  
	    }  
}
