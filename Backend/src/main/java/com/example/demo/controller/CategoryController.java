package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Category;
import com.example.demo.service.CategoryService;

@RestController
//@CrossOrigin()
public class CategoryController {
	@Autowired
    private CategoryService CategoryService;

    @PostMapping({"/createNewCategory"})
    public Category createNewCategory(@Valid @RequestBody Category category) {
    	
        return CategoryService.createNewCategory(category);
    }
    
    @GetMapping({"/GetCategory"})
    public List<Category> getCategory() {
    	return CategoryService.getCategory();
    }
    
    @GetMapping({"/GetCategory/{id}"})
    public Optional<Category> getCategorybyId(@PathVariable("id") int Category_id) {
    	return CategoryService.getCategorybyId(Category_id);
    }
    
    @DeleteMapping({"/DeleteCategory/{id}"})
    public void deleteCategorybyId(@PathVariable("id") int category_id) {
    	CategoryService.deleteCategorybyId(category_id);
    }
    
    @PutMapping("/updateCategory/{id}")  
    private Category update(@RequestBody Category category ,@PathVariable("id") int category_id)   
    {  
    	CategoryService.update(category,category_id);  
    return category;  
    }  
}
