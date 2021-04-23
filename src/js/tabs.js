const tablinks = document.querySelectorAll('.tablinks');
const tabItems = document.querySelectorAll('.tabcontent');

for ( let i = 0; i < tabItems.length; i++){
    tabItems[i].addEventListener('click', function(){
        if(tabItems[i].classList.contains('active-tab')){
            tabItems[i].classList.remove('active-tab')
        } else {
            tabItems[i].classList.add('active-tab')
        }
    })
}

for( let j = 0; j < tablinks.length; j++){
    tablinks[j].addEventListener('click', function(event){
        if( tablinks[j].classList.contains('active-tab-link')) {
            return;
        } else {
            tablinks.forEach(element => {
                element.classList.remove('active-tab-link')
            });
            tablinks[j].classList.add('active-tab-link')
        }
    })
}
