package com.example.demo.service;

import com.example.demo.dao.ProductDao;
import com.example.demo.entity.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ProductService {

    @Autowired
    private ProductDao roleDao;

    public Product createNewProduct(Product p) {
        return roleDao.save(p);
        
    }
    
    public List<Product> getProduct() {
    	List<Product> products = new ArrayList<Product>();  
    	roleDao.findAll().forEach(product -> products.add(product));  
    	return products;
    }
    
    public Optional<Product> getProductbyId(int id) {
    	return roleDao.findById(id);
    }
    
    public void  deleteProductbyId(int id) {
    	 roleDao.deleteById(id);
    }
    
    public void update(Product books, int bookid)   
    {  
    roleDao.save(books);  
    }  

}
