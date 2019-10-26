var now  = new Date()
var timeHours = now.getHours()
var timeDay = now.getDay()
var day
switch(timeDay)
{
    case 0:
        day = "Sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thursday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
        break
    default:
        day = "Invalid Input"
}
    timeHours = 12
    function display(){
        var display = document.getElementById('timeNow')
        display.innerText = `Today is ${day} and the time is ${timeHours} hour(s)`
        var bkGround = document.getElementById('container')
        if(timeHours >= 6 && timeHours < 12)
        {
            document.getElementById('display').src = "img/gMorning.png"
            bkGround.style.backgroundColor = "#df5d06"
        }
        else if(timeHours >= 12 && timeHours < 18)
        {
            document.getElementById('display').src = "img/gAfternoon.png"
            bkGround.style.backgroundColor = "#c26700"
        }
        else if(timeHours < 6 || timeHours >= 18)
        {
            document.getElementById('display').src = "img/gNight.png"
            bkGround.style.backgroundColor = "#2b27275b"
        }
    }