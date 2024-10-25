class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}bhavya`;
  }
  set password(value) {
    this._password = value;
  }
}

const bhavya = new User("b@bhavya@ai.com", "abc");
console.log(bhavya.email);
