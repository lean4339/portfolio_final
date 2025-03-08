import { useState } from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
    company: '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newError = {};
    let isError = false;
    for (const key in formData) {
      if (formData[key] === '' && key !== 'company') {
        newError[key] = 'Este campo es obligatorio';
        isError = true;
      }
    }
    if (formData.email !== '' && !formData.email.includes('@')) {
      newError.email = 'El email no es válido';
      isError = true;
    }
    if (isError) {
      setError(newError);
      return;
    }
    const mailtoLink = `mailto:lean4339@gmail.com?subject=${encodeURIComponent('Nuevo mensaje de ' + formData.name)}&body=${encodeURIComponent('Nombre: ' + formData.name + '\nEmail: ' + formData.email + '\nTelefono: ' + formData.telephone + '\nCompany: ' + formData.company + '\nMensaje: ' + formData.message)}`;
    window.open(mailtoLink, '_blank');
    setFormData({ name: '', email: '', message: '', telephone: '', company: '' });
  };

  return (
    <>
      <Element name='/contacto' />
      <motion.div className='form-container min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 md:px-16 py-20'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className='title-form-container text-center mb-8'>
          <h1 className='text-6xl md:text-7xl font-extrabold uppercase tracking-wide'>Contacto</h1>
          <p className='text-lg text-gray-300 mt-4'>Hablemos sobre cómo puedo ayudarte a crear algo increíble.</p>
        </div>
        <form onSubmit={onSubmit} className='w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex items-center bg-gray-800 p-3 rounded-lg'>
              <PersonIcon className='text-blue-400 mr-3' />
              <input className='bg-transparent w-full text-white outline-none' type='text' name='name' placeholder='Nombre' value={formData.name} onChange={handleChange} />
            </div>
            <div className='flex items-center bg-gray-800 p-3 rounded-lg'>
              <EmailIcon className='text-green-400 mr-3' />
              <input className='bg-transparent w-full text-white outline-none' type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            </div>
            <div className='flex items-center bg-gray-800 p-3 rounded-lg'>
              <PhoneIcon className='text-yellow-400 mr-3' />
              <input className='bg-transparent w-full text-white outline-none' type='tel' name='telephone' placeholder='Teléfono' value={formData.telephone} onChange={handleChange} />
            </div>
            <div className='flex items-center bg-gray-800 p-3 rounded-lg'>
              <BusinessIcon className='text-red-400 mr-3' />
              <input className='bg-transparent w-full text-white outline-none' type='text' name='company' placeholder='Empresa (Opcional)' value={formData.company} onChange={handleChange} />
            </div>
          </div>
          <div className='flex items-center bg-gray-800 p-3 rounded-lg mt-6'>
            <ChatIcon className='text-purple-400 mr-3' />
            <textarea className='bg-transparent w-full text-white outline-none' name='message' placeholder='Mensaje' value={formData.message} onChange={handleChange} rows={4}></textarea>
          </div>
          <button type='submit' className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-bold transition-transform transform hover:scale-105'>Enviar</button>
        </form>
      </motion.div>
    </>
  );
}