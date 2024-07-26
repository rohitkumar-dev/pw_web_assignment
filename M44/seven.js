class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length);
    }

    set password(newPassword) {
        if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

// Examples:
let user = new User("user1", "Password1");
console.log(user.password); // ********

user.password = "NewPass1"; // Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.password = "NewPassword1";
console.log(user.password); // ***********
