function whisper(string) {
  console.log(string.toLowerCase())
  return string.toLowerCase()
}

function shout(string) {
  console.log(string.toUpperCase())
  return string.toUpperCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === whisper(string)){
    return "I can't hear you!"}
  else if (string === shout(string)){
    return "YES INDEED!"
  }
  else if (string === 'I love you, Grandma.'){
    return "I love you, too."
  }
}
