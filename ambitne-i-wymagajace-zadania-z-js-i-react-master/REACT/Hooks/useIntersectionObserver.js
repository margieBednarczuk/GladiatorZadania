// Każdy lubi jak scrollując w dół listy elementy ładnie się pojawiaja
// Tylko jak to zrobić!
// można to zrobić na wiele sposobów, np tym HOCem, który jest opisany poniżej

// Wykorzystując JS i IntersectionObserver
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// zbuduj hooka useIntersectionObserver, który:
// który zwraca m.in. {isVisible} o wartościach true lub false jeśli komponent jest lub nie jest w widoku

const useIntersectionObserver = ()=>{
    // return ...
}

// jeśli po zjeźdzaniu w dół listy w apce reacta uda Ci się
// dodawać np klasę active do komponentu Component to zadanie jest skończone