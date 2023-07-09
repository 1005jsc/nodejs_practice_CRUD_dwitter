export const generateNewId = (tweets) => {
  let yo;
  for (let i = 1; i <= tweets.length; i++) {
    if (!tweets.map((v) => v.id).includes(i)) {
      console.log(i);
      yo = i;
      break;
    }
  }

  if (yo) {
    return yo;
  } else {
    return tweets.length + 1;
  }
};
