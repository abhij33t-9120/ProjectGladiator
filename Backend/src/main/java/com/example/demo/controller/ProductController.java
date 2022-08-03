package com.example.demo.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.view.RedirectView;

import com.example.demo.entity.Product;
import com.example.demo.service.FileUploadUtil;
import com.example.demo.service.ProductService;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService ProductService;

    @PostMapping({"/createNewProduct"})
    public String createNewProduct(@Valid @RequestBody Product product)throws IOException {
    	Product pp = ProductService.createNewProduct(product);
    	return pp.toString();
    }
    
    @GetMapping({"/GetProduct"})
    public List<Product> getProduct() {
    	return ProductService.getProduct();
    }
    
    @GetMapping({"/GetProduct/{id}"})
    public Optional<Product> getProductbyId(@PathVariable("id") int product_id) {
    	return ProductService.getProductbyId(product_id);
    }
    
    @DeleteMapping({"/DeleteProduct/{id}"})
    public void deleteProductbyId(@PathVariable("id") int product_id) {
    	ProductService.deleteProductbyId(product_id);
    }
    
    @PutMapping("/updatebooks/{id}")  
    private Product update(@RequestBody Product product ,@PathVariable("id") int product_id)   
    {  
    ProductService.update(product,product_id);  
    return product;  
    }  
    
}
