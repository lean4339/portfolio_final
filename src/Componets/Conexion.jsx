import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';

export const Conexion = () => {
    const openWhatsAppChat = () => {
        const phoneNumber = '+5491122514060';
        const message = 'Hola, quiero hablar contigo';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    };

    return (
        <motion.div 
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <motion.button 
                onClick={openWhatsAppChat} 
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:rotate-6 animate-pulse"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
            >
                <WhatsAppIcon sx={{ fontSize: 40 }} />
            </motion.button>
        </motion.div>
    );
};