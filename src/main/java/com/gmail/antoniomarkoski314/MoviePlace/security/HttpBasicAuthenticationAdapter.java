package com.gmail.antoniomarkoski314.MoviePlace.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class HttpBasicAuthenticationAdapter extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
                .inMemoryAuthentication()
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
        http.headers().frameOptions().sameOrigin();
        http.cors();
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/get_reviews").permitAll()
                .antMatchers("/api/get_review/**").permitAll()
                .antMatchers("/api/add_review").hasAnyAuthority("ROLE_USER", "ROLE_ADMIN")
                .antMatchers("/api/edit_review/**").hasAuthority("ROLE_ADMIN")
                .antMatchers("/api/delete_review/**").hasAuthority("ROLE_ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }
}
