function maskEmail(email){
  let [userName, domain] = email.split("@");
  let mask = userName[0] + "*".repeat(userName.length - 2) + userName[userName.length - 1];
  return mask + "@" + domain;
}

// User-defined email variable
let email = "freecodecamp@example.com";

// Logging the result
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
