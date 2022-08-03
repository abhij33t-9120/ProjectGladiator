package com.example.demo.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Retailer;
import com.example.demo.entity.User;
import com.example.demo.service.RetailerService;

@RestController
@CrossOrigin
public class RetailerController {
	@Autowired
	private RetailerService retailerService;
//	to add new retailer
	@PostMapping("/addRetailer")
	public String register(@Valid @RequestBody Retailer r) {
		Retailer r_r =  retailerService.createRetailer(r);
		if(r_r == null)
			return "retailer already present";
		else
			return "retailer added";
	}
	
//	for retailer login
	@PostMapping("/loginRetailer")
	public Retailer login(@Valid @RequestBody  Retailer s) {
		List<Retailer> retailers = retailerService.loginRetailer(s.getEmail(), s.getPassword());
		if(retailers.size()==0)
			return null;
		else
			return retailers.get(0);
	}
	
//	to get the list of retailers
	  @GetMapping({"/getRetailer"})
	    public List<Retailer> getRetailer() {
	    	return retailerService.getRetailer();
	    }
	  
	  @GetMapping("/getRetailer/{id}")
	  public Retailer getRetailerbyId(@PathVariable int id) {
		  return retailerService.getRetailerbyId(id);
	  }
	  
	    @DeleteMapping({"/Deleteretailer/{id}"})
	    public void deleteRetilerbyId(@PathVariable("id") int r_id) {
	    	retailerService.deleteRetilerbyId(r_id);
	    
}
	    @DeleteMapping("/deleteRetailer/{id}")
		  public String deleteRetailerById(@PathVariable int id) {
			  retailerService.deleteRetailerById(id);
			  return "delete successfull";
		  }
}