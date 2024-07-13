import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const Conexion = () => {
    const openWhatsAppChat = () => {
        const phoneNumber = '+5491122514060';
        const message = 'Hola, quiero hablar contigo'; // Mensaje predeterminado
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        window.open(whatsappURL, '_blank');
      };
    return (
        <>
        <div className="conexionContainer">
            <button onClick={openWhatsAppChat} className="guasa  pointer"><WhatsAppIcon sx={{ fontSize: 30 }}/></button>
        </div>
        </>
    )
}