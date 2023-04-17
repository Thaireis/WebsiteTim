package m347.backend.friend;


import javax.persistence.*;

@Entity
@Table
public class Friend {

    @Id
    @SequenceGenerator(
            name = "friend_sequence",
            sequenceName = "friend_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.IDENTITY,
            generator = "friend_sequence"
    )
    private long id;
    private String name;
    private int age;

    public Friend(long id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public Friend(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Friend() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

