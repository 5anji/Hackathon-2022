package com.example.team1.repository;

import com.example.team1.model.CookDbo;
import com.example.team1.model.FoodDbo;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface FoodRepository extends JpaRepository<FoodDbo, UUID> {
    List<FoodDbo> findFoodDboByCookDbo(CookDbo cookDbo, PageRequest pageRequest);
}
