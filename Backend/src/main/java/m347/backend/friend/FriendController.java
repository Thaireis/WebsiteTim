package m347.backend.friend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1")
public class FriendController {

    private final FriendService friendService;
    private final FriendRepository friendRepository;

    @Autowired
    public FriendController(FriendService friendService, FriendRepository friendRepository) {
        this.friendService = friendService;
        this.friendRepository = friendRepository;
    }

    @GetMapping("/friends")
    public List<Friend> getFriends() {
        return friendService.getFriends();
    }

    /*
    @PostMapping("/friends/add")
    public void registerNewFriend(@RequestBody Friend friend) {
        friendService.addNewFriend(friend);
    }
     */

    @PostMapping("/friends")
    Friend newFriend(@RequestBody Friend newFriend) {
        return friendRepository.save(newFriend);
    }

    @PutMapping(path = "/friends/{friendId}")
    public void updateFriend(
            @PathVariable("friendId") long friendId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) int age) {
        friendService.updateFriend(friendId, name, age);
    }

    @DeleteMapping(path = "/friends/{friendId}")
    public void deleteFriend(@PathVariable("friendId") long friendId) {
        friendService.deleteFriend(friendId);
    }
}