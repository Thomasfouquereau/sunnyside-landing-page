let modal = document.getElementById('modal')

const btn = document.getElementById('modal-button')

btn.onclick = function  () {
    if (modal.style.visibility === 'hidden'){
        modal.style.visibility = 'visible';
    } else {
        modal.style.visibility = 'hidden';
    }
    
}

