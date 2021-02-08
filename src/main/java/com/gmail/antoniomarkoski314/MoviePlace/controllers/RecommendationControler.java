package com.gmail.antoniomarkoski314.MoviePlace.controllers;

import com.gmail.antoniomarkoski314.MoviePlace.entities.Recommendation;
import com.gmail.antoniomarkoski314.MoviePlace.repositories.RecommendationRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RecommendationControler {

    @Autowired
    RecommendationRepository recRepository;

    @GetMapping("/api/review")
    public List<Recommendation> getAllRecommendations(){
        return recRepository.findAll();
    }

    @GetMapping("/api/review/{id}")
    public Recommendation getRecommendationDetail(@PathVariable Long id){
        Optional<Recommendation> rec = recRepository.findById(id);

//        if (!rec.isPresent()){
//            ResponseEntity.notFound().build();
//        }

        return rec.get();
    }

    @PostMapping("/api/review")
    public Recommendation addRecommendation(@RequestBody Recommendation rec){
        return recRepository.save(rec);
    }

    @PutMapping("/api/review/{id}")
    public Recommendation updateRecommendation(@RequestBody Recommendation rec, @PathVariable Long id){

//        Optional<Recommendation> recommendationOptional = recRepository.findById(id);
//
//        if (!recommendationOptional.isPresent()){
//            ResponseEntity.notFound().build();
//        }
        rec.setId(id);

        return recRepository.save(rec);
    }

    @DeleteMapping("/api/review/{id}")
    public void deleteRecommendation(@PathVariable Long id){
        recRepository.deleteById(id);
    }
}
