package com.gmail.antoniomarkoski314.MoviePlace;

import com.gmail.antoniomarkoski314.MoviePlace.entities.Recommendation;
import com.gmail.antoniomarkoski314.MoviePlace.repositories.RecommendationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class MoviePlaceApplication {

  public static void main(String[] args) {
    SpringApplication.run(MoviePlaceApplication.class, args);
  }

  @Bean
  CommandLineRunner init(RecommendationRepository repository) {
    return args -> {
      Stream.of("Terminator", "Star Wars", "Die Hard", "Hit", "The Godfather").forEach(name -> {
        Recommendation user = new Recommendation(name, "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.\",\n",
		   "1.1.1970");
        repository.save(user);
      });
      repository.findAll().forEach(System.out::println);
    };
  }
}
