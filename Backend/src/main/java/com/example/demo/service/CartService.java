package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao.CartDao;
import com.example.demo.entity.Cart;

@Service
public class CartService {
	@Autowired
	private CartDao cartDao;
	
	public Cart createCart(Cart cart) {
		return cartDao.save(cart);
	}
}
