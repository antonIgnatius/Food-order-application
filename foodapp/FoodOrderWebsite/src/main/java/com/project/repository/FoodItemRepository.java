package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.model.FoodItem;

public interface FoodItemRepository extends JpaRepository <FoodItem, Long> {

}
