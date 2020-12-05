import Boy from "../../../../Session 3 - Nov 28th (Module)/hw/modules/Boy.js";
import Person from "./Person.js";
import Relationship from "./Relationship.js";

export default class Group {
  name;
  people;
  relationships;

  constructor(name) {
    this.people = [];
    this.relationships = [];
  }
  addPerson(person) {
    if (person instanceof Person) {
      this.people.push(person);
    }
  }
  addRelationship(p1, p2) {
    if (p1 instanceof Person && p2 instanceof Person) {
      let found = this.relationships.find((relationship) => {
        return (
          (relationship.a == p1 && relationship.b == p2) ||
          (relationship.a == p2 && relationship.b == p1)
        );
      });
      if (!found) {
        this.relationships.push(new Relationship(p1, p2));
      }
    }
  }
  findFriends(person) {
    if (person instanceof Person) {
      let friends = [];
      for (let relationship of this.relationships) {
        if (this.relationship.a == person) {
          friends.push(relationship.b);
        } else if (relationship.b == person) {
          friends.push(relationship.a);
        }
      }
      return friends;
    }
    return [];
  }
  findMaleFriends(person) {
      let friends = this.findFriends(person);
      return friends.filter((friend) => {
          return friend instanceof Boy;
      })
  }
}
