package com.example.team1.model.response;

import lombok.*;

import java.util.UUID;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FoodResponseDto {
    private UUID foodId;
    private String foodName;
    private String foodPhoto;
    private int foodPrice;
    private UUID cookId;
}
