/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result
*/

function checkGrade(mark){
    switch(true){
        case (mark>90 && mark<=100):
        return 'A+';
        break;
        case (mark>80 && mark<90):
        return 'A';
        break;
        case (mark>70 && mark<80):
        return 'B';
        break;
        case (mark>60 && mark<70):
        return 'C';
        break;
        case (mark>50 && mark<60):
        return 'D';
        break;
        default:
        return 'Fail'
        break;
    }
}

let mark = 95;
let grade = checkGrade(mark);
console.log("The Grade is " , grade);


