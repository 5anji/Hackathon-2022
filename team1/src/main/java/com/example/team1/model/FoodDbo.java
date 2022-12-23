package com.example.team1.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "food_menu")
public class FoodDbo {
    @Id
    @GeneratedValue
    private UUID foodId;
    @Column(nullable = false)
    private String foodName;
    @Column(nullable = false)
    private String foodPhoto;
    @Column(nullable = false)
    private int foodPrice;
    @ManyToOne(
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE}
    )
    @JoinColumn(name = "cook_id")
    private CookDbo cookDbo;
}
