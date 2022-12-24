package com.example.team1.service;

import com.example.team1.model.request.CookRequestDto;
import com.example.team1.model.response.CookResponseDto;

import java.util.List;
import java.util.UUID;

public interface CookService {
    void saveCook(CookRequestDto cookRequestDto);
    CookResponseDto getCookById(UUID cookId);
    void deleteCookById(UUID cookId);
    List<CookResponseDto> findAllCook(int pages, int nrOfItems);
}
