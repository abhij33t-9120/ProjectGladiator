package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.entity.Cart;
@Repository
public interface CartDao extends JpaRepository<Cart,Integer>{



}
