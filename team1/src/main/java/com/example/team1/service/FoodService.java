package com.example.team1.service;

import com.example.team1.model.request.FoodRequestDto;
import com.example.team1.model.response.FoodResponseDto;

import java.util.List;
import java.util.UUID;

public interface FoodService {
    void saveFood(FoodRequestDto foodRequestDto);
    FoodResponseDto getFoodById(UUID foodId);
    void deleteFoodById(UUID foodId);
    List<FoodResponseDto> getFoodByCookId(UUID cookId, int pages, int nrOfItems);
}
