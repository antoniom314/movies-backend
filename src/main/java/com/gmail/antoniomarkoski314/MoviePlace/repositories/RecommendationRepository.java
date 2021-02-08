package com.gmail.antoniomarkoski314.MoviePlace.repositories;

import com.gmail.antoniomarkoski314.MoviePlace.entities.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {

}
