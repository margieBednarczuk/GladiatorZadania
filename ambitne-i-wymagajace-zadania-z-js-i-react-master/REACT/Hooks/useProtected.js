 // na podstawie tego kontekstu
const userCtx = React.createContext({auth:false})

// oraz dla routes:
const routes = [
    {
        url:'/login',
        protected: false
    },
    {
        url:'/',
        protected: true
    }
]

// Stwórz hooka useProtected używając useContext oraz
const useProtected = (actualRoute)=>{
    // return null
}

// który działa w następujący sposób:
// - jeśli w kontekście userCtx {auth} jest false robi przekierowanie na '/login'
// - jeśli w kontekście auth jest true to useProtected wyświetla komponent, w którym hook jest zaimplementowany

// to ćwiczenie możesz wykonać zarówno z użyciem Reduxa i hooka useReducer
// to ćwiczenie możesz wykonać zarówno z react-router jak i na sucho
