
let subject1 = 75;
let subject2 = 87;
let subject3 = 89;

let grade = Averarge(SumOfGrades(subject1, subject2, subject3), 3);


if(grade < 75){
    console.log("Your Grade is " + grade.toFixed(2) + "! You have failed this subject.");
} else if(grade >= 75 && grade <=100){
    console.log("Your Grade is " + grade.toFixed(2) + "! You have passed this subject");
} else{
    console.log("Your Grade is " + grade.toFixed(2) + "! Invalid Grade!");
}



function Averarge(sumOfGrades, numberOfSubject) {
    return sumOfGrades / numberOfSubject;
}

function SumOfGrades(sub1, sub2, sub3) {
    return sub1 + sub2 + sub3;
}