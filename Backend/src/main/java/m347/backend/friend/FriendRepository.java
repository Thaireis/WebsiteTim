package m347.backend.friend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {

    //@Query("SELECT s FROM Friend s WHERE s.name = ?1")
    Optional<Friend> findFriendByName (String name);

    //List<Friend> findByName(String name);


}