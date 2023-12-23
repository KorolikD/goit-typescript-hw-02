/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

const isWeekend = (day: string): boolean =>
  DaysOfWeek[DaysOfWeek.saturday] === day ||
  DaysOfWeek[DaysOfWeek.sunday] === day
    ? true
    : false;
