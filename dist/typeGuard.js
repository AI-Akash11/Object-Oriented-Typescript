"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
};
const getUserInfo = (user) => {
    if ("role" in user) {
        console.log(`${user.name} is a ${user.role} user`);
    }
    else {
        console.log(`${user.name} is a normal user`);
    }
};
getUserInfo({ name: "Normal" });
getUserInfo({ name: "Admin", role: "admin" });
//# sourceMappingURL=typeGuard.js.map