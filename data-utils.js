export function findFriendByName(name, friends) {
    // iterate through the friends
    for (let name of friends) {
        if (friends.name === name) {
            return name;
        }
    }
}
    // when you find a friend with the correct name, return that friend
