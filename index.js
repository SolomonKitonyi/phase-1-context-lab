/* Your Code Here */
// Your code here
function createEmployeeRecord(arr) {
    let employee = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [] 
    }
    return employee;
}

function createEmployeeRecords(arr) {
    let records = arr.map(element => {
        return createEmployeeRecord(element);
    });
    return records
}
function createTimeInEvent(timeStamp) {
   return this.timeInEvents.push( {
        type: "TimeIn",
        hour: parseInt(timeStamp.split(" ")[1]),
        date : timeStamp.split(" ")[0]
    })
}
function createTimeOutEvent(obj,timeStamp) {
    let newObj = createEmployeeRecord(obj)
    newObj.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt(timeStamp.split(" ")[1]),
        date : timeStamp.split(" ")[0]
    })
    return newObj
}
function hoursWorkedOnDate(obj,date) {
    let hoursIN = obj.timeInEvents.find(item => item.type === "TimeIn" && item.date === date)
    let hoursOut = obj.timeOutEvents.find(item => item.type === "TimeOut" && item.date === date)

    let hours = hoursOut - hoursIN;
    return hours
}
function wagesEarnedOnDate(obj,date) {}
//function allWagesFor(obj) {}
function calculatePayroll() {}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

