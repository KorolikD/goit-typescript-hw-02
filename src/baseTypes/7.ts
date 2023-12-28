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

// const isWeekend = (dayOfWeek: string): boolean => {
//   const optimizedDayOfWeek = dayOfWeek.toLocaleLowerCase().trim();
//   return (
//     DaysOfWeek[DaysOfWeek.saturday] === optimizedDayOfWeek ||
//     DaysOfWeek[DaysOfWeek.sunday] === optimizedDayOfWeek
//   );
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

const isWeekend = (dayOfWeek: string): boolean => {
  const optimizedDayOfWeek = dayOfWeek.toLocaleLowerCase().trim();
  return (
    DaysOfWeek.saturday === optimizedDayOfWeek ||
    DaysOfWeek.sunday === optimizedDayOfWeek
  );
};
