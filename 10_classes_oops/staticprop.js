class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const bhavya = new User("bhavya");
// console.log(bhavya.createId());

class teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new teacher("iphone", "i@phone.com");
console.log(iPhone.createId());
