// Stwórz observera, który będzie nasłuchiwać 
// na wszystkie <a></a> i <button></button> dostępne w tagu <body></body>

// Działanie:
// po wykonaniu kliknięcia 
// - observer pozwoli na wykonanie callbacka dla klikniętego elementu

// - observer będzie wiedział kiedy kliknięcie jest linkiem na podstronę lub na link z zewnątrz
//      jeśli to wystąpi to w callbacku redirect będzie true 

// - observer będzie wiedział kiedy kliknięcie nie spowoduje przekierowania, tylko np otworzenie modala lub link do #id
//      jeśli to wystąpi to w callbacku redirect będzie false 


const callback = ({element, redirect})=>{
    console.log(element.innerHTML, redirect)
}


class UserActionObserver {
    constructor(options){
        this.entries = []
    }
    observe = (target)=>{

    }
    unobserve = (target)=>{
       
    }
    notifyAll = (callback)=>{
        
    }
}

