/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Thursday,
  Wednesday,
  Friday,
  Saturday,
}
function isWeekend(day: Days): boolean {
  return day === Days.Sunday || day === Days.Saturday;
}
const aaa = isWeekend(Days.Sunday);
console.log(aaa);
