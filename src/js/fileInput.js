const realInput = document.querySelector('.inputfile');
const customButton = document.querySelector('#custom-button');
const customText = document.querySelector('.custom-input-text');



realInput.addEventListener('change', function(){
    if(realInput.value){
        customText.innerHTML = realInput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
    } else {
        customText.innerHTML = 'Прикрепить файл'
    }
})