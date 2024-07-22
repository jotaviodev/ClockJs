dayjs.extend(window.dayjs_plugin_weekday)
dayjs.extend(window.dayjs_plugin_localeData)
dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)
dayjs.extend(window.dayjs_plugin_customParseFormat)

document.body.addEventListener("load", getHours(dayjs.tz.guess()))
function getHours(timezone){
    let tz = dayjs().tz(timezone)
    console.log(tz)
    let months = dayjs.monthsShort();
    let weekDays = dayjs.weekdays();
    let weekDayIndex = tz.$W;
    let monthDay = tz.$D;
    let monthNumber = tz.$M;
    let year = tz.$y;
    currentTimezone = tz.$x.$timezone
    const timeOutId = setTimeout(getHours,1000,currentTimezone)
    let contentDiv = document.getElementById("content")
    contentDiv.style.displa="block"

    contentDiv.innerHTML=`
    <h3>${currentTimezone}
        <i id="editIcon" class="fa-regular fa-pen-to-square" onclick="openTimesZones(${timeOutId})"></i>
    </h3>
    <h1>${tz.$H}:${tz.$m}:${tz.$s} </h2>
    <h3>${weekDays[weekDayIndex]}, ${monthDay} ${months[monthNumber+1]}, ${year}</h3>
    `
    
}
function openTimesZones(timeOutId){
    let timeZones = ["America/Bogota","America/Sao_Paulo","Asia/Singapore",	"Asia/Tokyo","Europe/London","Europe/Paris","US/Central"]
    clearTimeout(timeOutId)
    let contentDiv = document.getElementById("content")
    contentDiv.innerHTML=`
        <div id="fade" class="hide">
        </div>
        <div class="timeZones" class="hide">
            <div class="headerZones">
                <h2>Select a Timezone<h2>
                <i onclick="getHours(dayjs.tz.guess())" id="close-modal" class="fa-solid fa-x"></i>
            </div>
            <div class="contentZones">     
                <form id="timezoneForm">
                    <select name="" id="selectTag">
                    ${timeZones.map((timeZone)=>{
                        return `<option value='${timeZone}'>${timeZone}</option>`
                    })}
                    </select>
                    <input type="submit" onclick="sendResponse()" value="Apply">
                </form>
            </div>
        </div>
    `
}
function sendResponse(){
    const formContainer = document.getElementById("timezoneForm")
    const selectValue = document.getElementById("selectTag").value
    formContainer.addEventListener("submit", (e)=> e.preventDefault())
    getHours(selectValue)
}
