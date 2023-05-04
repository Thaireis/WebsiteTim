package m347.backend.friend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class FriendConfig {

    @Bean
    CommandLineRunner commandLineRunner(FriendRepository friendRepository) {
        return args -> {
            friendRepository.save(new Friend(0, "Tim", 18));
            friendRepository.save(new Friend(0, "Robbius", 20));
            friendRepository.save(new Friend(0, "Kay", 18));
            friendRepository.save(new Friend(0, "Adrian", 18));
            friendRepository.save(new Friend(0, "Kevin", 18));
            friendRepository.save(new Friend(0, "Aaron", 17));
            friendRepository.save(new Friend(0, "Simon", 19));
            friendRepository.save(new Friend(0, "Sierra", 18));
            friendRepository.save(new Friend(0, "Liam", 18));
        };
    }


    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:4200")
                        .allowedMethods("PUT", "DELETE", "GET", "POST");
            }
        };
    }
}
