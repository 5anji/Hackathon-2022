package com.example.team1.service.impl;

import com.example.team1.model.CookDbo;
import com.example.team1.model.request.CookRequestDto;
import com.example.team1.model.response.CookResponseDto;
import com.example.team1.repository.CookRepository;
import com.example.team1.service.CookService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CookServiceImpl implements CookService {
    private final CookRepository cookRepository;

    @Override
    public List<CookResponseDto> findAllCook(int pages, int nrOfItems) {
        return cookRepository.findAll(PageRequest.of(pages - 1, nrOfItems)).stream()
                .map(cookDbo -> CookResponseDto.builder()
                        .rating(cookDbo.getRating())
                        .phoneNumber(cookDbo.getPhoneNumber())
                        .cookName(cookDbo.getCookName())
                        .cookId(cookDbo.getCookId())
                        .cookPhoto(cookDbo.getCookPhoto())
                        .build())
                .toList();
    }

    @Override
    public void saveCook(CookRequestDto cookRequestDto) {
        cookRepository.save(CookDbo.builder()
                .cookPhoto(cookRequestDto.getCookPhoto())
                .cookId(cookRequestDto.getCookId())
                .cookName(cookRequestDto.getCookName())
                .phoneNumber(cookRequestDto.getPhoneNumber())
                .rating(cookRequestDto.getRating())
                .build());
    }

    @Override
    public CookResponseDto getCookById(UUID cookId) {
        CookDbo cookDbo = cookRepository.findById(cookId).orElseThrow();
        return CookResponseDto.builder()
                .cookPhoto(cookDbo.getCookPhoto())
                .cookId(cookDbo.getCookId())
                .cookName(cookDbo.getCookName())
                .phoneNumber(cookDbo.getPhoneNumber())
                .rating(cookDbo.getRating())
                .build();
    }

    @Override
    public void deleteCookById(UUID cookId) {
        cookRepository.deleteById(cookId);
    }
}