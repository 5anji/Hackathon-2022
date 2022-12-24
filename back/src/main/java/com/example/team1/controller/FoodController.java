package com.example.team1.controller;

import com.example.team1.model.request.FoodRequestDto;
import com.example.team1.model.response.FoodResponseDto;
import com.example.team1.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/food")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FoodController {

    private final FoodService foodService;

    @PostMapping()
    public void saveFood(@RequestBody FoodRequestDto foodRequestDto) {
        foodService.saveFood(foodRequestDto);
    }

    @GetMapping("/{foodId}")
    public FoodResponseDto getCookById(@PathVariable UUID foodId) {
        return foodService.getFoodById(foodId);
    }

    @DeleteMapping("/{foodId}")
    public void deleteCookById(@PathVariable UUID foodId) {
        foodService.deleteFoodById(foodId);
    }

    @GetMapping("/{cookId}/")
    public List<FoodResponseDto> getFoodByCookId(@PathVariable UUID cookId, @RequestParam int pages, @RequestParam int nrOfItems){
        return foodService.getFoodByCookId(cookId, pages, nrOfItems);
    }
}
