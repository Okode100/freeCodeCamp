function getAverage(array){
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function getGrade(score){
  if(score === 100){
    return "A+";
  }else if (score >= 90){
    return "A";
  } else if(score >= 80){
    return "B";
  } else if(score >= 70){
    return "C";
  } else if(score >= 60){
    return "D";
  } else {
    return "F";
  }
};

function hasPassingGrade(score){
  const grade = getGrade(score);
  if(grade !== "F"){
    return true;

  } else {
    return false;

  }
}

function studentMsg(array, score){
  const pass = hasPassingGrade(score);
  const average = getAverage(array)
  const grade = getGrade(score);
  if(pass){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
