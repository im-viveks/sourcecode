function time(){
    let datetime = new Date()
    let hour = datetime.getHours()
    let min = datetime.getMinutes()
    let sec = datetime.getSeconds()
    let date = datetime.getDate()
    let month = datetime.getMonth()+1
    let year = datetime.getFullYear()
    if(hour>12){
        hour = hour - 12
        document.getElementById('am').innerHTML='PM'
    }
    document.getElementById('hours').innerHTML=doubleval(hour)
    document.getElementById('min').innerHTML=doubleval(min)
    document.getElementById('sec').innerHTML=doubleval(sec)
    document.getElementById('day').innerHTML=doubleval(date)
    document.getElementById('month').innerHTML=doubleval(month)
    document.getElementById('year').innerHTML=doubleval(year)

}
function doubleval(num){
    return num<10?"0"+num:num
}
setInterval(time,500);

let datetime = new Date()
