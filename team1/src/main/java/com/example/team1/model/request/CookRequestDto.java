package com.example.team1.model.request;

import lombok.*;

import java.util.UUID;

@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CookRequestDto {
    private UUID cookId;
    private String cookName;
    private String cookPhoto;
    private String phoneNumber;
    private int rating;
}
