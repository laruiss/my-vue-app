export const alphanum = 'abcdefghijklmnopqrstuvwyz0123456789'

export const getRandomAlphaNum = () => {
  const randomIndex = Math.floor(Math.random() * alphanum.length)
  return alphanum[randomIndex]
}

export const getRandomId = (prefix = 'pre', suffix = 'suf') => {
  return prefix + getRandomString() + suffix
}

export const getRandomString = length => {
  return Array.from({ length })
    .map(getRandomAlphaNum).join('')
}

export const repeatFn = (length, func) => {
  return Array.from({ length }).map(func)
}

/*
export const getRandomString = length => {
  let i = 0
  let randomString = ''
  while(i < length) {
    const randomIndex = Math.floor(Math.random() * alphanum.length - 1)
    randomString += alphanum[randomIndex]
    ++i
  }const randomAlphaNum = getRandomAlphaNum()
  return randomString
}

export const getRandomStringClement = length => {
  const alphanum = 'abcdefghijklmnopqrstuvwyz0123456789'.split('');
  const randomArray = [];
  let i = 0;
  while(i < length) {
    const randomIndex = Math.floor(Math.random() * alphanum.length - 1);
    const randomChar = alphanum[randomIndex];
    randomArray.push(randomChar);
    ++i;
  }
  return randomArray.join('');
}
*/