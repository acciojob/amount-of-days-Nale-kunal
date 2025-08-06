function daysOfAYear(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  }
  return 365;
}


let input = prompt("Enter a year:");
let year = Number(input);
  
if (year >= 1 && year <= 9999) {
  alert(daysOfAYear(year)); // ✅ ONLY alert the number
} else {
  alert("Invalid year");
}