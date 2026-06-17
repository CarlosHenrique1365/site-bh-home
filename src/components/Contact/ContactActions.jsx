import "./ContactActions.css"
function ContactActions() {
  return (
    <div className="property-actions">
      <a
        href="https://wa.me/5533998435685"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Falar com Consultora no Whatsap
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-contract"
      >
        Quero Reservar
      </a>
    </div>
  );
}

export default ContactActions;