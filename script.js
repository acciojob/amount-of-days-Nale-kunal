//your JS code here. If required.
function daysOfAYear(year) {
	let leap=true;
	if(year%400==0) return 366;
	else if{
		if(year%4==0 && year%100!=0) return 366;
	}
	else{
		return 365;
	}
}



