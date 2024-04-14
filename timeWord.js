timeObj = {
    minutes: {
        "00": "o'clock",
        "01": "oh one",
        "02": "oh two",
        "03": "oh three",
        "04": "oh four",
        "05": "oh five",
        "06": "oh six",
        "07": "oh seven",
        "08": "oh eight", 
        "09": "oh nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
    },
    
    hours: {
        "01": "one",
        "02": "two",
        "03": "three",
        "04": "four",
        "05": "five",
        "06": "six",
        "07": "seven",
        "08": "eight",
        "09": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "one",
        "14": "two",
        "15": "three",
        "16": "four",
        "17": "five",
        "18": "six",
        "19": "seven",
        "20": "eight",
        "21": "nine", 
        "22": "ten",
        "23": "eleven",
        "00": "twelve",
    }
}

function timeWord(time){
    
    if(time === "00:00") return "midnight";

    if(time === "12:00") return "noon";

    let hour = time[0] + time[1];
    let minute = time[3] + time[4];
    let ampm;
    if(hour < 12){
        ampm = "am";
    } else {
        ampm = "pm";
    }

    if(hour > 23 || hour < 0){
        return "Invalid hour input";
    }
    if(minute > 59 || minute < 0){
        return "Invalid minute input"
    }

    if(minute > 20){
        let first = minute[0] + "0";
        let second = "0" + minute[1];
        minute = `${timeObj.minutes[first]} ${timeObj.hours[second]}`;
    } else {
        minute = timeObj.minutes[minute]
    } 
    
    hour = timeObj.hours[hour]
    
    return `${hour} ${minute} ${ampm}`
}