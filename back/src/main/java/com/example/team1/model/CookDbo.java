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
@Table(name = "cook")
public class CookDbo {
    @Id
    @GeneratedValue
    private UUID cookId;
    @Column(nullable = false)
    private String cookName;
    @Column(nullable = false)
    private String cookPhoto;
    @Column(nullable = false)
    private String phoneNumber;
    @Column(nullable = false)
    private int rating;
}
