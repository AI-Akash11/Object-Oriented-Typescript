type AlphaNumeric = number | string;

const add = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
};

// in guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`${user.name} is a ${user.role} user`);
  } else {
    console.log(`${user.name} is a normal user`);
  }
};

getUserInfo({ name: "Normal" });
getUserInfo({ name: "Admin", role: "admin" });
