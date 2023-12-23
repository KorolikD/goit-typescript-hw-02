/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// *Звернення до властивості через []
// enum DaysOfWeek {
//   monday,
//   tuesday,
//   wednesday,
//   thursday,
//   friday,
//   saturday,
//   sunday,
// }

// const isWeekend = (day: string): boolean => {
//   const optimizedDay = day.toLocaleLowerCase().trim();
//   return DaysOfWeek[DaysOfWeek.saturday] === optimizedDay ||
//     DaysOfWeek[DaysOfWeek.sunday] === optimizedDay
//     ? true
//     : false;
// };

// *Повний опис властивостей
enum DaysOfWeek {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

const isWeekend = (day: string): boolean => {
  const optimizedDay = day.toLocaleLowerCase().trim();
  return DaysOfWeek.saturday === optimizedDay ||
    DaysOfWeek.sunday === optimizedDay
    ? true
    : false;
};
