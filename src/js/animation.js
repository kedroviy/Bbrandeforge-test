const foxContainer = document.querySelector('.fox-loader');
import fox from '../assets/images/fox.gltf'

foxContainer.insertAdjacentHTML('afterbegin', 
`<model-viewer 
    src=${fox} 
    camera-controls exposure="0.17" 
    shadow-intensity="0" 
    shadow-softness="1" 
    auto-rotate
></model-viewer>`
)