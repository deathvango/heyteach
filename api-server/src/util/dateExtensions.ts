export {};

declare global {
  interface Date {
    addDays(days: number): Date;
  }
}

// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
Date.prototype.addDays = function(days: number) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
