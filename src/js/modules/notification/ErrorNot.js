
export function ErrorNotification(){
const body = document.querySelector('body');
body.insertAdjacentHTML('afterBegin', `
    
<div class="error flex flex_row">
  <div class="error_icon img"></div>
  <div class="error_text">Error</div>
</div>
    `)

    document.querySelector('.error').classList.add('disappearance');

    setTimeout(()=>{
        document.querySelector('.error').remove()
    },3500)
 }