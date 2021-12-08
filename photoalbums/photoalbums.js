let images = document.querySelectorAll('.images')
let slide = document.querySelector('.image')
let slider = document.querySelector('.slider')
let down = document.querySelector('.down')
let next = document.querySelector('.next')
let exit = document.querySelector('.exit')
let slides = ["../resource/images/photo_halls/hall_StarWars/hall_StarWars_1.jpg", "../resource/images/photo_halls/hall_StarWars/hall_StarWars_2.jpg", 
"../resource/images/photo_halls/hall_StarWars/hall_StarWars_3.jpg", "../resource/images/photo_halls/hall_StarWars/hall_StarWars_4.jpg", 
"../resource/images/photo_halls/hall_StarWars/hall_StarWars_5.jpg","../resource/images/photo_halls/hall_StarWars/hall_StarWars_6.jpg",
"../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_1.jpg", "../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_2.jpg",
"../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_3.jpg", "../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_4.jpg",
"../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_5.jpg", "../resource/images/photo_halls/hall_PartyHard/hall_PartyHard_6.jpg",
"../resource/images/photo_halls/hall_laboratory/hall_laboratory_1.jpg", "../resource/images/photo_halls/hall_laboratory/hall_laboratory_2.jpg",
"../resource/images/photo_halls/hall_laboratory/hall_laboratory_3.jpg", "../resource/images/photo_halls/hall_laboratory/hall_laboratory_4.jpg",
"../resource/images/photo_halls/hall_laboratory/hall_laboratory_5.jpg", "../resource/images/photo_halls/hall_laboratory/hall_laboratory_6.jpg",
"../resource/images/photo_halls/hall_tower/hall_tower_1.jpg", "../resource/images/photo_halls/hall_tower/hall_tower_2.jpg",
"../resource/images/photo_halls/hall_tower/hall_tower_3.jpg", "../resource/images/photo_halls/hall_tower/hall_tower_4.jpg",
"../resource/images/photo_halls/hall_tower/hall_tower_5.jpg", "../resource/images/photo_halls/hall_tower/hall_tower_6.jpg",
"../resource/images/photo_halls/hall_forest/hall_forest_1.jpg", "../resource/images/photo_halls/hall_forest/hall_forest_2.jpg",
"../resource/images/photo_halls/hall_forest/hall_forest_3.jpg", "../resource/images/photo_halls/hall_forest/hall_forest_4.jpg",
"../resource/images/photo_halls/hall_forest/hall_forest_5.jpg", "../resource/images/photo_halls/hall_forest/hall_forest_6.jpg",
"../resource/images/photo_halls/hall_Miami/hall_Miami_1.jpg", "../resource/images/photo_halls/hall_Miami/hall_Miami_2.jpg", 
"../resource/images/photo_halls/hall_Miami/hall_Miami_3.jpg", "../resource/images/photo_halls/hall_Miami/hall_Miami_4.jpg",
"../resource/images/photo_halls/hall_Miami/hall_Miami_5.jpg", "../resource/images/photo_halls/hall_Miami/hall_Miami_6.jpg"]


for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        /*Затемнение заднего фона по размерам body*/
        document.querySelector('.dark_fon').style.height = document.body.scrollHeight + 'px'
        /*Отключение прокрутки страницы*/
        document.body.style.overflow = "hidden"
        slider.style.display = "flex"
        slider.style.top = window.scrollY + "px"
        slide.src = slides[i]
        
        /*Промотка фотографий влево*/
        down.addEventListener('click', function(){
            i -= 1
            if (i < 0 ){
                i = slides.length-1
                
            }
            slide.src = slides[i]
        })

        /*Промотка фотографий вправо*/
        next.addEventListener('click', function(){
            i += 1
            if (i > 35 ){
                i = 0
                
            }
            slide.src = slides[i]
        })

        /*Выход из полноэкранного просмотра*/
        exit.addEventListener('click', function(){
            document.body.removeAttribute('style')
            slider.removeAttribute('style')
            location.reload()
            
        })
        
    }
    
}


