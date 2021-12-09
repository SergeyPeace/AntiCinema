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
                <input type="text" id="name" v-model.trim="name">

                <label for="tel">Введите номер телефона</label>
                <input type="text" id="tel" onkeyup="this.value = this.value.replace(/(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g);" v-model.trim="tel">
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

