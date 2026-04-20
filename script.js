function daysOfAYear(year) {
    year = Number(year);

    if (year % 400 === 0) console.log(366);
    else if (year % 4 === 0 && year % 100 !== 0) console.log(366);
    else console.log(365);
}

let year = prompt("Enter your year");
daysOfAYear(year);  