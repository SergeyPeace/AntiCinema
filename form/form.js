const form = Vue.createApp({
    data(){
        return{
            name: '',
            tel: '',
        }
    },
    template:`
        <div class="container">
            <form class="card" @submit.prevent="createPerson">
                
                <h2>Заказать обратный звонок</h2>

                <div class="form-control">
                <label for="name">Введите имя</label>
                <input type="text" id="name" onkeyup="this.value = this.value.replace(/[^А-я]/g,'');" v-model.trim="name">

                <label for="tel">Введите номер телефона</label>
                <input type="tel" id="tel" onkeyup="this.value = this.value.replace(/[^\\+\\(\\)\\-0-9]/g,'');" placeholder="+7(___)___-__-__" v-model.trim="tel">
                </div>

                <button class="btn primary" :disabled="name.length === 0 || tel.length === 0">Оставить заявку</button>

            </form>   
            <button class="btn_exit"><p>✖</p></button>
        </div>
        `,
    methods: {
        async createPerson(){
            //https://anti-cinema-default-rtdb.firebaseio.com/people.json

            //Создаем запрос с типом POST с помощью метода fetch
            const response = await fetch('https://anti-cinema-default-rtdb.firebaseio.com/people.json', {
                method: 'POST',
                //Указываем тип данных с которым мы работаем
                headers: {
                    'Content-Type': 'application/json'
                },

                //объект с которым работаем. Поскольку мы не можем по сети отправить js объекты, мы их стерилизуем
                body: JSON.stringify({
                    
                    //Данные, которые мы хотим отправить
                    //Ключ : данные
                    firstName: this.name,
                    numberTel: this.tel

                })
            })

            //Получить ответ сервера после отправки данных
            //const firebaseData = await response.json()

            //очищаем поля ввода
            this.name = ''
            this.tel = ''
        }
    }, 
  
})
form.mount('#form')

let telefon = document.getElementById('tel')
let number
let numberProverka = "+7(___)___-__-__"
telefon.addEventListener('keyup', function(event){
    number = String(telefon.value)
        if(event.code !== 'Backspace' && event.code !== 'Delete'){
        if ((number[0] === '8' || number[0] === '+' || number[0] === '7') && number[3] === undefined){
        number =  '+7('
        }
        if (number[5] !== undefined && number[7] === undefined){
            number += ")"
        }
        if (number[9] !== undefined && number[11] === undefined){
            number += "-"
        }
        if (number[12] !== undefined && number[14] === undefined){
            number += "-"
        }

        if (number.length === 16){
            numberProverka = number
        }

        else if (number.length > 16){
            number = numberProverka
        }
    }
    telefon.value = number
})