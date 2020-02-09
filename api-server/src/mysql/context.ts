import { Sequelize } from "sequelize-typescript";
import _ from "lodash";
import faker from "faker";
import User from "./models/user";
import Person from "./models/person";
import Address from "./models/address";
import CategoryType from "./models/categoryType";
import Category from "./models/category";
import Course from "./models/course";
import Period from "./models/period";
import Lesson from "./models/lesson";
import "../util/dateExtensions";
import Instructor from "./models/instructor";
import InstructorLesson from "./models/instructorLesson";
import InstructorPeriod from "./models/instructorPeriod";
import Student from "./models/student";
import StudentPeriod from "./models/studentPeriod";
import StudentLesson from "./models/studentLesson";

export const HeyTeachContext = new Sequelize({
  database: "heyteach",
  username: "root",
  password: "secret",
  dialect: "mysql",
  host: "192.168.99.100",
  port: 3306,
  models: [__dirname + "/models"]
});

export const CreateTestData = async () => {
  // Create Category Types
  const catTyp = await CategoryType.create(<CategoryType>{
    type: "course",
    description: "Used to categorize periods"
  });

  // Create Categories
  const categories: Category[] = [];
  categories.push(
    await Category.create(<Category>{
      name: "Day Classes",
      type: catTyp.type
    })
  );
  categories.push(
    await Category.create(<Category>{
      name: "Night Classes",
      type: catTyp.type
    })
  );

  // Create Courses
  const courses: Course[] = [];
  courses.push(
    await Course.create(<Course>{
      name: "Book 1",
      description: "Some random description here."
    })
  );
  courses.push(
    await Course.create(<Course>{
      name: "Book 2",
      description: "Some random description here."
    })
  );
  courses.push(
    await Course.create(<Course>{
      name: "Book 3",
      description: "Some random description here."
    })
  );

  // Create Periods
  const periods: Period[] = [];
  for (var i = 0; i < categories.length; ++i) {
    for (var k = 0; k < courses.length; ++k) {
      periods.push(
        await Period.create(<Period>{
          courseId: courses[k].id,
          categoryId: categories[i].id
        })
      );
    }
  }

  // Create Lessons
  const lessons: Lesson[] = [];
  for (var i = 0; i < periods.length; ++i) {
    const numOfLessons = Math.round(Math.random() * 10) + 1;
    const startDate: Date = new Date();
    for (var k = 0; k < numOfLessons; ++k) {
      const daysToAdd = k * 7;
      const date = startDate.addDays(daysToAdd);
      lessons.push(
        await Lesson.create(<Lesson>{
          periodId: periods[i].id,
          dayOf: date
        })
      );
    }
  }

  // Create Instructors
  const instructors: Instructor[] = [];
  for (var i = 0; i < periods.length; ++i) {
    instructors.push(
      await CreatePerson().then(p => {
        return Instructor.create(<Instructor>{
          personId: p.id
        }).then(instr => {
          // Assign to period
          InstructorPeriod.create(<InstructorPeriod>{
            instructorId: instr.id,
            periodId: periods[i].id
          }).then(ip => {
            // Assign to lessons
            lessons.forEach(lesson => {
              if (lesson.periodId === ip.periodId) {
                InstructorLesson.create(<InstructorLesson>{
                  lessonId: lesson.id,
                  instructorId: instr.id
                });
              }
            });
          });

          // Return the instructor object
          return instr;
        });
      })
    );
  }

  // Create Students
  const students: Student[] = [];
  for (var i = 0; i < periods.length; ++i) {
    const numStudents = Math.round(Math.random() * 5) + 2;
    for (var k = 0; k < numStudents; ++k) {
      students.push(
        await CreatePerson().then(p => {
          return Student.create(<Student>{
            personId: p.id
          }).then(s => {
            // Assign to period
            StudentPeriod.create(<StudentPeriod>{
              studentId: s.id,
              periodId: periods[i].id
            }).then(sp => {
              // Assign to lessons
              lessons.forEach(lesson => {
                if (lesson.periodId === sp.periodId && Math.random() > 0.3) {
                  StudentLesson.create(<StudentLesson>{
                    lessonId: lesson.id,
                    studentId: s.id
                  });
                }
              });
            });

            // Return the student object
            return s;
          });
        })
      );
    }
  }
};

const CreatePerson = (): Promise<Person> => {
  return Person.create(<Person>{
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
  }).then(p => {
    return Address.create(<Address>{
      lineOne: faker.address.streetAddress(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      city: faker.address.city()
    }).then(a => {
      p.update(<Person>{
        addressId: a.id
      });
      return p;
    });
  });
};
