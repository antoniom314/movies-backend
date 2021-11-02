package com.gmail.antoniomarkoski314.MoviePlace.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
@EnableWebSecurity
public class HttpBasicAuthenticationConfigurer extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user")
                .password("{noop}user")
                .authorities("ROLE_USER")
                .and()
                .withUser("admin")
                .password("{noop}admin")
                .authorities("ROLE_ADMIN");
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // For H2 database console
        http.headers().frameOptions().sameOrigin();

        http.cors().configurationSource(request -> {
            var cors = new CorsConfiguration();
            cors.setAllowCredentials(true);
            cors.setAllowedOrigins(List.of("http://digitalplayground.online:4303"));
            cors.setAllowedMethods(List.of("GET","POST", "PUT", "DELETE", "OPTIONS"));
            cors.setAllowedHeaders(List.of("*"));
            return cors;
        });
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/api/get_reviews").permitAll()
                .antMatchers("/api/get_review/**").permitAll()
                .antMatchers("/api/add_review").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .antMatchers("/api/edit_review/**").hasAuthority("ROLE_ADMIN")
                .antMatchers("/api/delete_review/**").hasAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }

//    @Bean
//    public PasswordEncoder encoder() {
//        return new BCryptPasswordEncoder();
//    }
}
