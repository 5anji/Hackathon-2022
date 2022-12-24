package com.example.team1.model.request;

import lombok.*;

import java.util.UUID;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class FoodRequestDto {
    private UUID foodId;
    private String foodName;
    private String foodPhoto;
    private int foodPrice;
    private UUID cookId;
}
