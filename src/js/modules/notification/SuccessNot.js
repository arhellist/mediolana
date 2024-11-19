
export function SuccsesNotification(){
const body = document.querySelector('body');
body.insertAdjacentHTML('afterBegin', `
    <div class="success flex flex_row">
  <div class="success_icon img"></div>
  <div class="success_text">Success</div>
</div>
    `)

    document.querySelector('.success').classList.add('disappearance');

    setTimeout(()=>{
        document.querySelector('.success').remove()
    },3500)
 }