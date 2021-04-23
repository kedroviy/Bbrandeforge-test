const tablinks = document.querySelectorAll('.tablinks');
const tabContainer = document.querySelector('.tab-container')
const tabsContent = document.querySelector('.tab-container');
const tabLinkContainer = document.querySelector('.tab-controllers')
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
    let selectedTd;

for( let j = 0; j < tablinks.length; j++){
    tablinks[j].addEventListener('click', function(event){
        console.log(tablinks[j])      
    })
}

    

    


        
