document.body.addEventListener("load", getHours())

const changeTimezoneButton = document.getElementById("timezone")
changeTimezoneButton.addEventListener("mousedown", changeVisibilityOfClock)

function getHours(){
    dayjs.extend(window.dayjs_plugin_weekday)
    dayjs.extend(window.dayjs_plugin_localeData)
    dayjs.extend(window.dayjs_plugin_utc)
    dayjs.extend(window.dayjs_plugin_timezone)
    let months = dayjs.monthsShort();
    let weekDays = dayjs.weekdays();

    let weekDayIndex = dayjs().weekday();
    let monthDay = dayjs().date();
    let monthNumber = dayjs().month();
    let year = dayjs().year();
    let contentDiv = document.getElementById("content")
    contentDiv.innerHTML=`
    <h3>${dayjs.tz.guess()}</h3>
    <div id="timezone" style="cursor: pointer;">Oi</div>
    <h1>${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()} </h2>
    <h3>${weekDays[weekDayIndex]}, ${monthDay} ${months[monthNumber+1]}, ${year}</h3>
    `
    setTimeout(getHours,1000)
}
function changeVisibilityOfClock(){
    const modalList = document.getElementById("modal")
    const clock = document.getElementById("content")
    clock.style.display='none'
    modalList.style.display='block'

}