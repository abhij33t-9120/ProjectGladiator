package com.example.demo.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertFalse;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.demo.dao.ProductDao;
import com.example.demo.entity.Product;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductService1Test {
@MockBean
	 private ProductDao productDao;
	 @Autowired
	 private ProductService productService;

	 @Test
	 public void getProduct() {
			Product p=new Product(1,"cup",45,"cool","utensils","img");
			Product p1=new Product(2,"mug",50,"good","utensils","img1");
			List<Product> ls=new ArrayList<>();
			ls.add(p);
			ls.add(p1);

			 
			 Mockito.when(productDao.findAll()).thenReturn(ls);
			    
			    assertThat(productService.getProduct()).isEqualTo(ls);
	 }
	@Test
	public void getProductbyId()
	{
		Optional<Product> p=Optional.ofNullable(new Product(1,"cup",45,"cool","utensils","img"));
//		Product p1=new Product(2,"mug",50,"good","utensils","img1");
		  Mockito.when(productDao.findById(1)).thenReturn(p);
		    assertThat(productService.getProductbyId(1)).isEqualTo(p);
	}

	 
	 
	 }