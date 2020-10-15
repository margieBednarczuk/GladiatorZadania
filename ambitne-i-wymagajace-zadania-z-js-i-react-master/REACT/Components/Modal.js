// Stwórz komponent klasowy Modal
// zawierający podkomponenty <Modal.Header>, <Modal.Footer>, <Modal.Content>
// (info można znaleźć na - https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5)
// możesz do tego wykorzystać ContextApi, ale nie musisz

// Modal ma mieć 
// - metodę toggle(), która włącza lub wyłącza Modal
// - state isOpen, który jest true/false jeśli Modal jest włączony/wyłączony
// - Modal ma mieć szare, półprzeźroczyste tło o kolorze rgba(0,0,0,0.5)
// - jeśli user kliknie w tło, Modal ma się wyłączyć

// Modal.Header ma mieć 
// - nieklikalne białe tło
// - props title, który renderuje się po lewej stronie 
// - ma zawierać po prawiej stronie, przycisk do zamykania modalu metodą toggle()

// Modal.Content ma mieć:
// - nieklikalne białe tło
// - props children, który jest renderowany wewnątrz tego białego tła

// Modal.Footer ma mieć:
// - nieklikalne białe tło
// - ma mieć props callToActionLabel
// - 2 przyciski po prawej stronie, z którego jeden to "Cancel", a drugi to {callToActionLabel}
// - oba przyciski mają zamykać modal
// - podczas kliknięcia w przycisk z tekstem callToActionLabel, dodatkowo ma wyskakiwać alert z tekstem "OK"


// takie wywołanie powinno działać
return (
    <Modal>
        <Modal.Header title={'Tytuł modala'}/>
        <Modal.Content>
            <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel={'Udało się'}/>
    </Modal>
)