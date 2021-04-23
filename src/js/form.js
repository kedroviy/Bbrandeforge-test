import visibilityEye from '../assets/images/visibility.png';
import clipImg from '../assets/images/clip.png';
import './fileInput';
import './tabs';
import './parallacs';
const formButton = document.querySelector('.form-button');
const formSelect = document.querySelector('.select-form');

const optionData = [
    'Выбор чего-то*',
    'Выбор 1',
    'Выбор 2',
    'Выбор 3',
    'Выбор 4',
    'Выбор 5',
]

const addImage = function (createNode, parentNode, img) {
    const imgNode = createNode;

    parentNode.appendChild(imgNode)

    imgNode.src = img;
}

const addMoreOption = function(params) {
    for(let i = 0; i <= 5; i++ ){
        const option = document.createElement('option');

        for( let k = 0; k < 1 ; k++) {
        formSelect.appendChild(option);
        option.setAttribute('value',  optionData[i]);
        option.appendChild(document.createTextNode(optionData[i]))
        }
    }
}

addMoreOption(optionData);

addImage(
    document.createElement('img'),
    formButton,
    visibilityEye
    );

addImage(
    document.createElement('img'),
    document.querySelector('.clip-img'),
    clipImg
);

formButton.addEventListener('click', function(){
    const phoneNumberInput = document.querySelector('.phone-number-form')
    if(phoneNumberInput.value === ''){
        phoneNumberInput.classList.add('phone-wrong')
    } else {
        phoneNumberInput.classList.remove('phone-wrong')
    }

    const optionParent = document.querySelector('.select-form')
    const optionValue = optionParent.options[optionParent.selectedIndex].text
    
        switch (optionValue) {
        case 'Выбор чего-то*':
           optionParent.classList.add('phone-wrong')
            break;
    
        default:
        optionParent.classList.remove('phone-wrong')
            break;
    }
});

