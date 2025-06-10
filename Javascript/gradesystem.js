function getAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scoresArray, studentScore) {
  const average = getAverage(scoresArray).toFixed(1);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  return `Class average: ${average}. Your grade: ${grade}. You ${passed ? "passed" : "failed"} the course.`;
}
