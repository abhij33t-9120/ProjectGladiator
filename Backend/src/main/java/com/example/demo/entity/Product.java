package com.example.demo.entity;


import javax.persistence.*;

import org.springframework.web.multipart.MultipartFile;

//import com.example.demo.entity.Category;

@Entity
@Table(name="product")
public class Product {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
int product_id;
String title;
int price;
@Column(length=600)
String description;
String category;
String image;
public int getProduct_id() {
	return product_id;
}
public void setProduct_id(int product_id) {
	this.product_id = product_id;
}
public String getTitle() {
	return title;
}
public void setTitle(String title) {
	this.title = title;
}
public int getPrice() {
	return price;
}
public void setPrice(int price) {
	this.price = price;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public String getCategory() {
	return category;
}
public void setCategory(String category) {
	this.category = category;
}
public String getImage() {
	return image;
}
public void setImage(String image) {
	this.image = image;
}
@Override
public String toString() {
	return "Product [product_id=" + product_id + ", title=" + title + ", price=" + price + ", description="
			+ description + ", category=" + category + ", image=" + image + "]";
}
public Product(int product_id, String title, int price, String description, String category, String image) {
	super();
	this.product_id = product_id;
	this.title = title;
	this.price = price;
	this.description = description;
	this.category = category;
	this.image = image;
}
public Product() {
	super();
	// TODO Auto-generated constructor stub
}


}

