package m347.backend.friend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class FriendConfig {

    @Bean
    CommandLineRunner commandLineRunner(FriendRepository friendRepository) {
        return args -> {
            Friend tim = new Friend("Tim", 18);
            Friend robin = new Friend("Robbius", 20);

            friendRepository.saveAll(
                    List.of(tim, robin)
            );
        };
    }
}
