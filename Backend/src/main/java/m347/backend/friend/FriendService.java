package m347.backend.friend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class FriendService {

    private final FriendRepository friendRepository;

    @Autowired
    public FriendService(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    public List<Friend> getFriends() {
        return friendRepository.findAll();
    }

    /***
     *
     * @param friend
     *
     * Sucht ob ein Friend beim Namen schon existiert
     * Falls ja -> wirft Exception
     * Falls nein -> Speichert einen neuen Friend in DB
     */
    public void addNewFriend(Friend friend) {
        Optional<Friend> friendByName = friendRepository.findFriendByName(friend.getName());
        if(friendByName.isPresent()) {
            throw new IllegalStateException("Name taken");
        }
        friendRepository.save(friend);
    }


    public void deleteFriend(long friendId) {
        boolean exists = friendRepository.existsById(friendId);
        if(!exists) {
            throw new IllegalStateException("Friend with Id " + friendId + " does not exist");
        }
        friendRepository.deleteById(friendId);
    }

    @Transactional
    public void updateFriend(long friendId, String name, int age) {

        Friend friend = friendRepository.findById(friendId)
                .orElseThrow(() -> new IllegalStateException(
                        "Friend with id " + friendId + " doesn't exist")
                );

        if(name != null && name.length() > 0 && !Objects.equals(friend.getName(), name)) {
            friend.setName(name);
        }

        if(!Objects.equals(friend.getAge(), age)) {
            friend.setAge(age);
        }
    }
}