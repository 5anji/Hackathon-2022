package com.example.team1.controller;

import com.example.team1.model.request.CookRequestDto;
import com.example.team1.model.response.CookResponseDto;
import com.example.team1.service.CookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/cook")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CookController {

    private final CookService cookService;

    @PostMapping()
    public void saveCook(@RequestBody CookRequestDto cookRequestDto) {
        cookService.saveCook(cookRequestDto);
    }

    @GetMapping()
    public List<CookResponseDto> findAllCook(@RequestParam int pages, @RequestParam int nrOfItems) {
        return cookService.findAllCook(pages, nrOfItems);
    }

    @GetMapping("/{cookId}")
    public CookResponseDto getCookById(@PathVariable UUID cookId) {
        return cookService.getCookById(cookId);
    }

    @DeleteMapping("/{cookId}")
    public void deleteCookById(@PathVariable UUID cookId) {
        cookService.deleteCookById(cookId);
    }
}
