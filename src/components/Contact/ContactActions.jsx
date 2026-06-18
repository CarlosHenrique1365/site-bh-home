import "./ContactActions.css"
function ContactActions() {
  return (
    <div className="property-actions">
      <a
        href="https://wa.me/553172556969"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
      >
        Falar com Consultora no Whatsap
      </a>

      <a
        href="https://bhomescheckin.lovable.app"
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