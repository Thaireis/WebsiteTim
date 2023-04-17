package m347.backend.friend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1")
public class FriendController {

    private final FriendService friendService;

    @Autowired
    public FriendController(FriendService friendService) {
        this.friendService = friendService;
    }

    @GetMapping("/friends")
    public List<Friend> getFriends() {
        return friendService.getFriends();
    }

    @PostMapping
    public void registerNewFriend(@RequestBody Friend friend) {
        friendService.addNewFriend(friend);
    }

    @DeleteMapping(path = "{friendId}")
    public void deleteFriend(@PathVariable("friendId") long friendId) {
        friendService.deleteFriend(friendId);
    }

    @PutMapping(path = "{friendId}")
    public void updateFriend(
            @PathVariable("friendId") long friendId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) int age) {
        friendService.updateFriend(friendId, name, age);
    }
}