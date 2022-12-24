package com.example.team1.service.impl;

import com.example.team1.model.CookDbo;
import com.example.team1.model.FoodDbo;
import com.example.team1.model.request.FoodRequestDto;
import com.example.team1.model.response.FoodResponseDto;
import com.example.team1.repository.CookRepository;
import com.example.team1.repository.FoodRepository;
import com.example.team1.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {
    private final CookRepository cookRepository;
    private final FoodRepository foodRepository;

    @Override
    public void saveFood(FoodRequestDto foodRequestDto) {
        foodRepository.save(FoodDbo.builder()
                .foodPrice(foodRequestDto.getFoodPrice())
                .foodPhoto(foodRequestDto.getFoodPhoto())
                .foodId(foodRequestDto.getFoodId())
                .foodName(foodRequestDto.getFoodName())
                .cookDbo(cookRepository.findById(foodRequestDto.getCookId()).orElseThrow())
                .build());
    }

    @Override
    public FoodResponseDto getFoodById(UUID foodId) {
        FoodDbo foodDbo = foodRepository.findById(foodId).orElseThrow();
        return FoodResponseDto.builder()
                .foodPrice(foodDbo.getFoodPrice())
                .cookId(foodDbo.getCookDbo().getCookId())
                .foodId(foodDbo.getFoodId())
                .foodName(foodDbo.getFoodName())
                .foodPhoto(foodDbo.getFoodPhoto())
                .build();
    }

    @Override
    public void deleteFoodById(UUID foodId) {
        foodRepository.deleteById(foodId);
    }

    @Override
    public List<FoodResponseDto> getFoodByCookId(UUID cookId, int pages, int nrOfItems) {
        CookDbo cookDbo = cookRepository.findById(cookId).orElseThrow();
        return foodRepository.findFoodDboByCookDbo(cookDbo, PageRequest.of(pages - 1, nrOfItems))
                .stream()
                .map(foodDbo -> FoodResponseDto.builder()
                        .foodPhoto(foodDbo.getFoodPhoto())
                        .cookId(foodDbo.getCookDbo().getCookId())
                        .foodPrice(foodDbo.getFoodPrice())
                        .foodName(foodDbo.getFoodName())
                        .foodId(foodDbo.getFoodId())
                        .build())
                .toList();
    }
}