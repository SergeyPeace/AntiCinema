const Header={
    data(){
        return{
           HeaderInner:
           `<img class="logo_website" src="resource/images/load.png" alt="Иконка сайта" width="30px" height="30px" style="float: left; margin-right: 15px; cursor: pointer;" onclick="window.open('https://sergeypeace.github.io/AntiCinema/index.html')">
           <nav>
               <ul>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/index.html'>Главная</a></li>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/tariff/tariff.html'>Тарифы</a></li>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/stocks/stocks.html'>Акции</a></li>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/reviews/reviews.html'>Отзывы</a></li>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/photoalbums/photoalbums.html'>Фотогалерея</a></li>
                   <li><a href='https://sergeypeace.github.io/AntiCinema/contacts/contacts.html'>Контакты</a></li>
               </ul>
           </nav> 
           <button class="calling_form">Заказать звонок</button>`,
        }
    }
}



Vue.createApp(Header).mount('#Header')

function logotip(){
if(String(window.location) !== 'https://sergeypeace.github.io/AntiCinema/index.html'){
    document.querySelector('.logo_website').src='../resource/images/load.png'
} 

else{
    document.querySelector('.logo_website').src='resource/images/load.png'
}}

logotip()


let calling_form = document.querySelector('.calling_form')
let container = document.querySelector('.container')
let btn_exit = document.querySelector('.btn_exit')
let primary = document.querySelector('.primary')
let btn_2 = document.querySelectorAll('.btn_2')

calling_form.addEventListener('click', function(){
    /*Отключение прокрутки страницы*/
    document.body.style.overflow = "hidden"
    container.style.display = "block"
    container.style.top = window.scrollY + "px"
})


btn_exit.addEventListener('click', function(){
    container.style.display = "none"
    document.body.removeAttribute('style')
})

primary.addEventListener('click', function(){
    container.style.display = "none"
    document.body.removeAttribute('style')
    alert('Форма успешно отправлена!')
})




for (let i = 0; i < btn_2.length; i++) {
    btn_2[i].onclick = function() {

        /*Отключение прокрутки страницы*/
        document.body.style.overflow = "hidden"
        container.style.display = "block"
        container.style.top = window.scrollY + "px"
       
    }
}