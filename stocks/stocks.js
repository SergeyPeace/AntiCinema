let image = document.querySelectorAll('.image')
let  imageChoice = image[0]

let description =[
    `Сделайте снимок в одном из наших прекрасных залов и выложите его в instagram, отметив наш антикинотеатр.
     Покажите выложенный пост администратору залов и получите внаграду большое ведро попкорна. <br/> 
     *Акция действительна один раз за сеанс. Попкорн выдается на комнату.   `,
    `При покупке бутылки вина "Calem" 30 Years Old Tawny Porto, wooden box — сырна тарелка из самых лучших сортов сыра в подарок. <br/>
    Ни что не сможет создать настолько потрясающую романтическую атмосферу и украсить ваш вечер как бутылка элитного вина и тарелка дорогого сыра! `,
    `Каждый вторник у нас действует скидка для студентов в размере 10%. Для получения скидки при оплате предьявите студенчиский билет администратору залов.`,
    `Срок проведения акции: <br/> с 15 ноября 2021 года по 31 января 2022 года.
     При походе в наш антикинотеатр вы получаете бесплатную подписку на 7 дней на ivi.
     Промокод для активации подписки расположен на чеке, который выдается при оплате зала.`
]

document.querySelector('.description').innerHTML = description[0]

for (let i = 0; i < image.length; i++) {
    image[i].onclick = function() {
        imageChoice.classList.toggle('image_in')
        imageChoice = this
        document.querySelector('.description').innerHTML = description[i]

        imageChoice.classList.toggle('image_in')
        /*document.body.classList.toggle('body_Hidden')*/
    
    }
}