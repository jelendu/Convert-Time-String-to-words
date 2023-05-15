// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

function timeWord(time) {
    const hours = ["twelve","one","two","three","four","five","six","seven","eight","nine","ten",
"eleven","twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven",
    ];
    const minutes = ["o'clock","o one","o two","o three","o four","o five","o six","o seven","o eight","o nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
"eighteen","nineteen","twenty","twenty one","twen two","twenty three","twenty four","twenty five",
"twenty six","twenty seven","twenty eight","twenty nine","thirty","thirty one","thirty two", "thirty three","thirty four","thirty five","thirty six","thirty seven","thirty eight","thirty nine","fourty","fourty one","fourty two","fourty three","fourty four","fourty five","fourty six",
"fourty seven","fourty eight","fourty nine","fifty","fifty one","fifty two","fifty three","fifty four","fifty five","fifty six","fifty seven","fifty eight","fifty nine",
    ];
    const [hour, minute] = time.split(':').map(Number);
    return hour === 0 && minute === 0 ? 'midnight' : hour === 12 && minute === 0 ? 'noon' : `${hours[hour]} ${minute === 0 ? "o'clock" : minutes[minute-1]} ${hour < 12 ? 'am' : 'pm'}`;

};
console.log(timeWord("00:00"));
console.log(timeWord("12:00"));
console.log(timeWord("01:00"));