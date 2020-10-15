// Stwórz komponent funkcyjny Stepper, 
// który będzie miec tyle kroków 
// ile ma elementów w children
// który pokazuje tylko ten element, 
// którego krok jest aktywny 


// - każdy krok powinien mieć swój przycisk "nad"
// - który jest "wizualnie" aktywny, wtedy kiedy krok jest aktywny
// - kliknięcie w przycisk powoduje zmianę widocznego elementu children
// - text tego przycisku jest zawarty w propie buttonText danego elementu children
// - jeśli w danym elemencie children nie występuje prop buttonText, ten element powinien być pomijany


const Stepper = ({children}) =>{ 
    return null
}


// takie wywołanie powinno działać
return (
    <Stepper>
        <div buttonText={'Krok 1'}>...</div>
        <div buttonText={'Krok 2'}>...</div>
        <div buttonText={'Krok 3'}>...</div>
        <div>...</div>
        <div buttonText={'Krok 5'}>...</div>
    </Stepper>
)