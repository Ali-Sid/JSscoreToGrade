const score = Number(prompt('Enter your score: '));

const gradeObj = {
  90: 'A',
  70: 'B',
  50: 'C',
  40: 'D',
};

let grade = 'F';

for (let i in gradeObj) {
  if (score >= parseInt(i)) {
    grade = gradeObj[i];
  } else {
    break;
  }
}

alert(`Your grade is ${grade}`);
