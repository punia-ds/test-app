const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]*$/;
  return nameRegex.test(name);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

const validateLink = (name) => {
  const nameRegex = /^[a-zA-Z.\-\_]*$/;
  return nameRegex.test(name);
};

function containsExcludedChars(word, excludedChars) {
  for (let i = 0; i < word.length; i++) {
    if (excludedChars.includes(word[i].toUpperCase())) {
      return true; // Found an excluded character
    }
  }
  return false; // No excluded characters found
}
const exceptLetters = ["I", "O", "Q", "U", "Z"];

export {
  validateEmail,
  validateName,
  validatePassword,
  validateLink,
  containsExcludedChars,
  exceptLetters,
};
