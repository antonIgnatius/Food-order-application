package com.project.service;

import java.util.List;

import com.project.model.FoodItem;

public interface FoodItemService {
	
	 FoodItem saveFoodItem(FoodItem foodItem);
	    FoodItem getFoodItemById(Long id);
	    List<FoodItem> getAllFoodItems();

}
