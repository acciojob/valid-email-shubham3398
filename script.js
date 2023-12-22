function validEmail(str) {
  // Check for the presence of domain extensions
  if (!str.includes(".com") && !str.includes(".co.in") && !str.includes(".edu")) {
    return false;
  }

  // Check for the presence of '@'
  if (!str.includes("@")) {
    return false;
  }

  // Find the index of '@'
  let atIndex = str.indexOf('@');

  // Ensure that there are characters before and after '@'
  if (atIndex === 0 || atIndex === str.length - 1) {
    return false;
  }

  // Ensure that there is a dot (.) after '@'
  if (!str.includes(".", atIndex)) {
    return false;
  }

  return true;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

