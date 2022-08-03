package com.example.demo.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Cart;
import com.example.demo.service.CartService;

@RestController
public class CartController {
	@Autowired
	private CartService cartService;
	
	@PostMapping("/cart")
	public String createCart(@Valid @RequestBody Cart cart) {
		return cartService.createCart(cart).toString();
	}
	
}
