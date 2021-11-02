package com.gmail.antoniomarkoski314.MoviePlace.controllers;

import com.gmail.antoniomarkoski314.MoviePlace.Properties;
import com.gmail.antoniomarkoski314.MoviePlace.entities.Recommendation;
import com.gmail.antoniomarkoski314.MoviePlace.repositories.RecommendationRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://digitalplayground.online:4303")
public class RecommendationController {

    RecommendationRepository recRepository;

    public RecommendationController(RecommendationRepository recRepository) {
        this.recRepository = recRepository;
    }

    @GetMapping("/api/get_reviews")
    public List<Recommendation> getAllRecommendations(){
        return recRepository.findAll();
    }

    @PostMapping("/api/add_review")
    public Recommendation addRecommendation(@RequestBody Recommendation rec){

        return recRepository.save(rec);
    }

    @GetMapping("/api/get_review/{id}")
    public Recommendation getRecommendationDetail(@PathVariable Long id){

        Optional<Recommendation> optional = recRepository.findById(id);

        if (!optional.isPresent()){
            ResponseEntity.notFound().build();
        }
        return optional.get();
    }

    @PutMapping("/api/edit_review/{id}")
    public Recommendation updateRecommendation(@RequestBody Recommendation rec, @PathVariable Long id){

        Optional<Recommendation> optional = recRepository.findById(id);

        if (!optional.isPresent()){
            ResponseEntity.notFound().build();
        }
        rec.setId(id);

        return recRepository.save(rec);
    }

    @DeleteMapping("/api/delete_review/{id}")
    public void deleteRecommendation(@PathVariable Long id){

        recRepository.deleteById(id);
    }
}
