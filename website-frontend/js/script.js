// document.querySelector("#mainpage").style.height=screen.height+"px";
console.log(screen.height)
console.log(window.innerHeight)

let totalcases = document.querySelector("#totalcases")
let newcases = document.querySelector("#newcases")
let totaldeaths = document.querySelector("#totaldeaths")
let newdeaths = document.querySelector("#newdeaths")
let totalrecovered = document.querySelector("#totalrecovered")
// function animateValue(id, start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var obj = document.getElementById(id);
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//     }, stepTime);
// }

// animateValue("value", 100, 25, 5000);

let http=new XMLHttpRequest();
http.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        let response = JSON.parse(this.responseText);
        let countries = response.reports[0].table[0]
        for(let country of countries){
            if(country.Country =="Azerbaijan"){
                
                totalcases.innerHTML = Number(country.TotalCases)
                newcases.innerHTML = "+"+Number(country.NewCases);
                totaldeaths.innerHTML = Number(country.TotalDeaths);
                newdeaths.innerHTML = Number(country.NewDeaths);
                totalrecovered.innerHTML = Number(country.TotalRecovered);
            }
        }
    }
}
http.open("GET","https://covid19-server.chrismichael.now.sh/api/v1/AllReports")
http.send();


let aye = document.querySelector("#aye")
let buye = document.querySelector("#buye")

$("#transformsignin").click(function(){
    $("#signinpage").animate({"margin-left":"0%"})
})
$("#transformsignup").click(function(){
    $("#signinpage").animate({"margin-left":"200%"})
})
