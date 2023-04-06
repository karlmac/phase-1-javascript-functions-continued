// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

//const wrapAdjective = 
function wrapAdjective(str1 = "*") {
    return function (str2 = "special") {
        return `You are ${str1}${str2}${str1}!`;
    }
}

//console.log(wrapAdjective("#")("a dedicated programmer"));

