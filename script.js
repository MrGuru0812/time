'use strict';

let time =  setInterval(() => {
    const data = new Date();
    let seconds = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds(),
        minutes = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes(),
        hours = data.getHours() < 10 ? '0' + data.getHours() : data.getHours(),
        date = data.getDate() < 10 ? '0' + data.getDate() : data.getDate(),
        month = data.getMonth() < 10 ? '0' + data.getMonth() : data.getMonth(),
        year = data.getFullYear() < 10 ? '0' + data.getFullYear() : data.getFullYear();
    
    document.querySelector('body').innerHTML = (date + '.' + month + '.' + year +' - ' + hours + ':' 
    + minutes + ':' + seconds);

}, 1000);

/*let timeTwo = setInterval(() => {
    const data = new Date(),
        monthArr = [ 'Января',  'Февраля',  'Марта',  'Апреля',  'Мая',  'Июня',  'Июля',  'Августа',  'Сентября',  'Октября',  'Ноября',  'Декабря'],
        dayWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let hours = data.getHours(),
        date = data.getDay(),
        day =  data.getDate(),
        month = data.getMonth();
        console.log(typeof hours);
        
        dayWeek.forEach((item, index) => {
            if(index === data.getDay()) {
                date = item;
            }
        });
            monthArr.forEach((item, index) => {
                if(index === data.getMonth()) {
                    month = item;
                    
                }
            });
    document.querySelector('body').innerHTML = ('Сегодня ' + date + ', ' + day + ' ' + month + ' ' + data.getFullYear() + ' года, ');
}, 1000);*/

//'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  (1 БАЛЛ)
// '04.02.2020 - 21:05:33' complete

/*if(hours === 0 || hours >= 5 || hours <= 20) {
                    return  hours + ' часов';
                } else if (hours >= 2 || hours <= 4) {
                    return  hours + ' часа';
                } else {
                    return hours + ' час';
                } */

                /*witch (hours) {
                    case 0:
                        return ' часов';
                        break;
                    case 1: 
                        return ' час'
                        break;
                } */