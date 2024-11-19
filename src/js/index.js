import { mainMenuListener } from "./modules/mainMenuListener.js"; //вставка панели меню


// Получение и обновление курса валют
const updateCourseCurrency = async () => {
  const USD_value = document.querySelector(".courseValueUSD");
  const EUR_value = document.querySelector(".courseValueEUR");

  const getCouurse = async () => {
    let curVal = {}
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        let USD = Number(json.Valute.USD.Value.toFixed(2));
        let EUR = Number(json.Valute.EUR.Value.toFixed(2));
        USD_value.textContent = USD;
        EUR_value.textContent = EUR;
        curVal.USD = USD;
        curVal.EUR = EUR;

        localStorage.setItem('courseValue', JSON.stringify(curVal));
      });
  };
  getCouurse();

  setInterval(async () => { getCouurse()}, 1000 * 60 * 60 * 6);
};
updateCourseCurrency();
// клькулятор расчета валют
const calcValueCurrency = async() =>{

const USD = document.querySelector('#USD');
const EUR = document.querySelector('#EUR');
const RUB = document.querySelector('#RUB');

const inputlCourse = document.querySelectorAll('.inputlCourse');

inputlCourse.forEach(item=>{
    item.addEventListener('blur',()=>{
        inputlCourse.forEach(it=>{
            it.value = ''
        })
    })
})


USD.addEventListener('input',()=>{
const USDCurVal = JSON.parse(localStorage.getItem(`courseValue`)).USD
    RUB.value = Number((USD.value * USDCurVal).toFixed(2))
})

EUR.addEventListener('input',()=>{
    const EURCurVal = JSON.parse(localStorage.getItem(`courseValue`)).EUR
        RUB.value = Number((EUR.value * EURCurVal).toFixed(2))
    })

RUB.addEventListener('input',()=>{
    const USDCurVal = JSON.parse(localStorage.getItem(`courseValue`)).USD
    const EURCurVal = JSON.parse(localStorage.getItem(`courseValue`)).EUR
          USD.value = Number((RUB.value / USDCurVal).toFixed(2))
          EUR.value = Number((RUB.value / EURCurVal).toFixed(2))
        })


}
calcValueCurrency();
// дата/время
const getTime = () =>{
    setInterval(()=>{
        let time = new Date()
       document.querySelector('.mainDate_time_hour').textContent = time.getHours().toString().length === 1 ? `0${time.getHours()}`: time.getHours(); 
       document.querySelector('.mainDate_time_minuets').textContent =  time.getMinutes().toString().length === 1 ? `0${time.getMinutes()}`: time.getMinutes(); 
       document.querySelector('.mainDate_date_day').textContent =  time.getDate()
       document.querySelector('.mainDate_date_month').textContent =  
       time.getMonth()===0 ? 'JANUARY' : 
       time.getMonth()===1 ? "FEBRUARY":
       time.getMonth()===2 ? "MARCH":
       time.getMonth()===3 ? "april":
       time.getMonth()===4 ? "MAY":
       time.getMonth()===5 ? "JUNE":
       time.getMonth()===6 ? "JULY":
       time.getMonth()===7 ? "AUGUST":
       time.getMonth()===8 ? "SEPTEMBER":
       time.getMonth()===9 ? "OCTOBER":
       time.getMonth()===10 ? "NOVEMBER": "DECEMBER"
       document.querySelector('.mainDate_date_year').textContent =  time.getFullYear()
    },1000)
}
getTime();

mainMenuListener();
