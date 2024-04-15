document.body.addEventListener("load", getHours())
function getHours(){
    dayjs.extend(window.dayjs_plugin_weekday)
    dayjs.extend(window.dayjs_plugin_localeData)
    let months = dayjs.monthsShort();
    let weekDays = dayjs.weekdays();

    let weekDayIndex = dayjs().weekday();
    let monthDay = dayjs().date();
    let monthNumber = dayjs().month();
    let year = dayjs().year();
    let contentDiv = document.getElementById("content")
    contentDiv.innerHTML=`
    <h3></h3>
    <h1>${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()} </h2>
    <h3>${weekDays[weekDayIndex]}, ${monthDay} ${months[monthNumber+1]}, ${year}</h3>
    `
    setTimeout(getHours,1000)
}