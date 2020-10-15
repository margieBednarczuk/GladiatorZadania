// stwórz elementy ui typu akordeon dla FAQ które:
// - na start tego komponentu Faq wyświetli wszystkie tytuły w FaqItem oraz tylko pierwszy FaqItem będzie miał pokazany swój opis
// - podczas kliknięcia w dowolny FaqItem, opis poprzedniego FaqItem ma się schować
// - tylko 1 FaqItem może mieć pokazany opis, chyba że ma prop force === true

const faqs = [
  { label: 'FAQ - pkt 1', description: 'Opis do pkt 1' },
  { label: 'FAQ - pkt 2', description: 'Opis do pkt 2' }
  // ...
]

const FaqItem = ({ force = false }) => {}
const Faq = ({ faqs }) => {}

// Przetestuj:
// - czy poprawnie wyświetli 10 losowych komponentów FaqItem w komponencie Faq
// - losowe 6 kliknięć w dowolne FaqItem sprawdzając czy poprawnie się chowają i pokazują opisy
// - czy dla force === true zmieniony FaqItem nie schowa się nigdy
