
"use strict";
//1

  function Student(name, lastName) {
    
    this.name = name;
    this.lastName = lastName;
    this.courses = {
      JSBasic: {
        title: "JavaScript Basic",
        grades: [], 
        attendance: {} 
      },
      TypeScript: {
        title: "Type Script",
        grades: [],
        attendance: {}
      }
    };
  }
  
  Student.prototype = {
    
    addGrade: function (course, grade) {
      if (this.courses[course]) {
        this.courses[course].grades.push(grade);
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    addAttendance: function (course, lesson, isPresent) {
      if (this.courses[course]) {
        this.courses[course].attendance[lesson] = isPresent;
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    getAverageGrade: function (course) {
      if (this.courses[course]) {
        const grades = this.courses[course].grades;
        if (grades.length === 0) return 0;
        const total = grades.reduce((acc, grade) => acc + grade, 0);
        return total / grades.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    },
  
    getAverageAttendance: function (course) {
      if (this.courses[course]) {
        const lessons = Object.values(this.courses[course].attendance);
        if (lessons.length === 0) return 0;
        const total = lessons.filter(att => att === true).length;
        return total / lessons.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    },
  
    getStudentInfo: function () {
      return `
        Ім'я: ${this.name}
        Фамілія: ${this.lastName}
        Середня оцінка по JSBasic: ${this.getAverageGrade("JSBasic")}
        Середня відвідуваність по JSBasic: ${(this.getAverageAttendance("JSBasic") * 100).toFixed(2)}%
        Середня оцінка по TypeScript: ${this.getAverageGrade("TypeScript")}
        Середня відвідуваність по TypeScript: ${(this.getAverageAttendance("TypeScript") * 100).toFixed(2)}%
      `;
    }
  };
  
  let student1 = new Student('Іван', 'Зелений');
  
  student1.addGrade('JSBasic', 95);
  student1.addGrade('JSBasic', 90);
  student1.addAttendance('JSBasic', 'lesson1', true);
  student1.addAttendance('JSBasic', 'lesson2', false);
  
  student1.addGrade('TypeScript', 90);
  student1.addAttendance('TypeScript', 'lesson1', true);
  
  console.log(student1.getStudentInfo());


  //2

  function Student(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.courses = {
      JSBasic: {
        title: "JavaScript Basic",
        grades: [],
        attendance: {}
      },
      TypeScript: {
        title: "TypeScript",
        grades: [],
        attendance: {}
      }
    };
  }
  
  Student.prototype = {
    
    addGrade: function (course, grade) {
      if (this.courses[course]) {
        this.courses[course].grades.push(grade);
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    addAttendance: function (course, lesson, isPresent) {
      if (this.courses[course]) {
        this.courses[course].attendance[lesson] = isPresent;
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    getAverageGrade: function (course) {
      if (this.courses[course]) {
        const grades = this.courses[course].grades;
        if (grades.length === 0) return 0;
        const total = grades.reduce((acc, grade) => acc + grade, 0);
        return total / grades.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    },
  
    getAverageAttendance: function (course) {
      if (this.courses[course]) {
        const lessons = Object.values(this.courses[course].attendance);
        if (lessons.length === 0) return 0;
        const total = lessons.filter(att => att === true).length;
        return total / lessons.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    },
  
    getStudentInfo: function () {
      let info = `Ім'я: ${this.name}\nФамілія: ${this.lastName}\n`;
      
      for (let course in this.courses) {
        info += `Середня оцінка по ${this.courses[course].title}: ${this.getAverageGrade(course)}\n`;
        info += `Середня відвідуваність по ${this.courses[course].title}: ${(this.getAverageAttendance(course) * 100).toFixed(2)}%\n`;
      }
      
      return info;
    },
  
    addCourse: function (courseName, title) {
      if (!this.courses[courseName]) {
        this.courses[courseName] = {
          title: title,
          grades: [],
          attendance: {}
        };
        console.log(`Курс ${title} додано`);
      } else {
        console.log(`Курс ${title} вже існує`);
      }
    },
  
    removeCourse: function (courseName) {
      if (this.courses[courseName]) {
        delete this.courses[courseName];
        console.log(`Курс ${courseName} видалено`);
      } else {
        console.log(`Курс ${courseName} не знайдено`);
      }
    }
  };
  
  let student1 = new Student('Іван', 'Зелений');
  
  student1.addGrade('JSBasic', 95);
  student1.addGrade('JSBasic', 90);
  student1.addAttendance('JSBasic', 'lesson1', true);
  student1.addAttendance('JSBasic', 'lesson2', false);
  
  student1.addCourse('Python', 'Python Programming');
  student1.addGrade('Python', 85);
  student1.addAttendance('Python', 'lesson1', true);
  
  console.log(student1.getStudentInfo());
  
  student1.removeCourse('TypeScript');
  
  console.log(student1.getStudentInfo());

  //3

  function Student(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.courses = {};
  }
  
  Student.prototype = {
    addCourse: function (course) {
      if (!this.courses[course]) {
        this.courses[course] = {
          title: course,
          grades: [],
          attendance: []
        };
      }
    },
  
    addGrade: function (course, grade) {
      if (this.courses[course]) {
        this.courses[course].grades.push(grade);
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    addAttendance: function (course, isPresent) {
      if (this.courses[course]) {
        this.courses[course].attendance.push(isPresent);
      } else {
        console.log(`Курс ${course} не знайдено`);
      }
    },
  
    getAverageGrade: function (course) {
      if (this.courses[course]) {
        const grades = this.courses[course].grades;
        if (grades.length === 0) return 0;
        const total = grades.reduce((acc, grade) => acc + grade, 0);
        return total / grades.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    },
  
    getAverageAttendance: function (course) {
      if (this.courses[course]) {
        const lessons = this.courses[course].attendance;
        if (lessons.length === 0) return 0;
        const attended = lessons.filter(att => att === true).length;
        return attended / lessons.length;
      }
      console.log(`Курс ${course} не знайдено`);
      return 0;
    }
  };
  
  function Group() {
    this.students = [];
  }
  
  Group.prototype = {
    addStudent: function (student) {
      this.students.push(student);
    },
  
    removeStudent: function (name, lastName) {
      this.students = this.students.filter(
        student => student.name !== name || student.lastName !== lastName
      );
    },
  
    getRankingByPerformance: function (course) {
      return this.students
        .map(student => ({
          name: `${student.name} ${student.lastName}`,
          averageGrade: student.getAverageGrade(course)
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade);
    },
  
    getRankingByAttendance: function (course) {
      return this.students
        .map(student => ({
          name: `${student.name} ${student.lastName}`,
          averageAttendance: student.getAverageAttendance(course)
        }))
        .sort((a, b) => b.averageAttendance - a.averageAttendance);
    }
  };
  
  let group = new Group();
  
  let student1 = new Student('Іван', 'Зелений');
  student1.addCourse('JSBasic');
  student1.addGrade('JSBasic', 95);
  student1.addAttendance('JSBasic', true);
  
  let student2 = new Student('Марія', 'Синя');
  student2.addCourse('JSBasic');
  student2.addGrade('JSBasic', 85);
  student2.addAttendance('JSBasic', false);
  
  group.addStudent(student1);
  group.addStudent(student2);
  
  console.log(group.getRankingByPerformance('JSBasic'));
  console.log(group.getRankingByAttendance('JSBasic'));
  
  group.removeStudent('Іван', 'Зелений');
  console.log(group.students);
