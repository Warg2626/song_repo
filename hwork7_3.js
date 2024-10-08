function calculateAverageGrade(students) {

    if (students.length === 0) {
        return 0;
    }

    let totalGrade = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].grade;
    }

    let averageGrade = totalGrade / students.length;
    
    return averageGrade.toFixed(1);
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
