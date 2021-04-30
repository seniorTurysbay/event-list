//get header a tags
const eventCalendar = document.querySelector(".eventCalendar");
const myEvents = document.querySelector(".myEvents");
// get sorting btns
const getListBtn = document.querySelector(".listBtn");
const getCalendarBtn = document.querySelector(".calendarBtn");
//get releventEvents and pastEvents btns
const getRelevantEvents = document.querySelector("#relevantEvents");
const getPastEvents = document.querySelector("#pastEvents");
console.log(document.querySelector(".relevantEvents"))

myEvents.addEventListener("click", function () {
    document.querySelector(".event-calendar").classList.add("hidden");
    document.querySelector(".event-calendar").classList.remove("active__d-flex");
    document.querySelector(".my-event").classList.remove("hidden");
    document.querySelector(".my-event").classList.add("active__d-block");
    document.querySelector('.list__item').classList.add("hidden");
    // document.querySelector('.list').style.width = "955px"
});
eventCalendar.addEventListener("click", function () {
    document.querySelector(".event-calendar").classList.remove("hidden");
    document.querySelector(".event-calendar").classList.add("active__d-flex");
    document.querySelector(".my-event").classList.add("hidden");
    document.querySelector(".my-event").classList.remove("active__d-block");
    document.querySelector('.list__item').classList.remove("hidden");
    document.querySelector('.list__item').classList.add("active__d-block");
});

getCalendarBtn.addEventListener("click", function () {
    document.querySelector(".list__item").classList.remove("active__d-block");
    document.querySelector(".list__item").classList.add("hidden");
    document.querySelector('.calendar').classList.add('active__d-block');
    document.querySelector('.calendar').classList.remove('hidden');
});

getListBtn.addEventListener("click",function (){
    document.querySelector(".list__item").classList.add("active__d-block");
    document.querySelector(".list__item").classList.remove("hidden");
    document.querySelector('.calendar').classList.remove('active__d-block');
    document.querySelector('.calendar').classList.add('hidden');
});

getPastEvents.addEventListener("click",function (){
    document.querySelector(".list__item").classList.remove("active__d-block");
    document.querySelector(".list__item").classList.remove("hidden");
    // document.querySelector(".list__item__ch").classList.remove("hidden");
    // document.querySelector(".list__item__ch").classList.add("active__d-block");
    // document.querySelector(".ch").classList.add("active__d-block");
});

getRelevantEvents.addEventListener("click",function (){
    document.querySelector(".list__interface").classList.remove("hidden");
    document.querySelector(".list__interface").classList.add("active__d-flex");
    document.querySelector(".list__item").classList.add("hidden");
});