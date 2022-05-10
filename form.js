const getRandomInt = max => Math.floor(Math.random() * max)

const shuffle = array => array.sort(() => Math.random() - 0.5);

const getRandomInRange = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

mountEvents('#inputPassword5_', '#inputButton_')
mountEvents('#inputPassword5', '#inputButton')

function mountEvents(inputId, buttonId) {
  const input = document.querySelector(inputId)
  const button = document.querySelector(buttonId)

  button.addEventListener('click', () => {
    input.value = generatePasswords()
  })

  button.addEventListener('focus', () => {
    input.type = 'text'
  })

  button.addEventListener('focusout', () => {
    input.type = 'password'
  })

  input.addEventListener('focus', () => {
    input.type = 'text'
  })

  input.addEventListener('focusout', () => {
    input.type = 'password'
  })
}

function generatePasswords() {
  const length = getRandomInRange(10, 20)

  const password = [];

  const pushCharactersByType = (type, arr) => {
    const typeAmount = getRandomInRange(length / arr.length, 2);

    for (let index = 0; index < typeAmount; index++) {
      password.push(type[getRandomInt(type.length)])
    }
  }

  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  const types = [uppercase, lowercase, numbers]
  types.forEach((type) => pushCharactersByType(type, types))

  const result = shuffle(password).join('');
  return result;
}
