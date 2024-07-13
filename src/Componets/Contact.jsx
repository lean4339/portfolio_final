import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Element } from 'react-scroll';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
    company: '',
  });
  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError({
      ...error,
      [name]: '',
    });
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
    if (isError) {
      setError(newError)
      return;}
    const mailtoLink = `mailto:lean4339@gmail.com?subject=${encodeURIComponent('Nuevo mensaje de ' + formData.name)}&body=${encodeURIComponent('Nombre: ' + formData.name + '\nEmail: ' + formData.email + '\nTelefono: ' + formData.telephone + '\nCompany: ' + formData.company + '\nMensaje: ' + formData.message)}`;

    window.open(mailtoLink, '_blank');

    setFormData({
      name: '',
      email: '',
      message: '',
      telephone: '',
      company: '',
    });
  };
  return (
    <>
      <Element name='/contact' />
      <div className='form-container' id='/contact'>
        <div className='title-form-container'>
          <h1 className='title-form'>Contacto</h1>
          <p className='text-form'>Puedes dejarnos un mensaje</p>
        </div>
        <TextField autoComplete="off" name='name' id='name' onChange={handleChange} type='text' label='Nombre' className='inputs' variant='standard' />
        {error && error.name &&
          <p className='error'>{error.name}</p>
        }
        <TextField autoComplete="off" name='email' id='email' onChange={handleChange} type='email' label='Email' className='inputs' variant='standard' />
        {error && error.email &&
          <p className='error'>{error.email}</p>
        }
        <TextField autoComplete="off" name='telephone' id='telephone' onChange={handleChange} type='tel' label='Teléfono' className='inputs' variant='standard' />
        {error && error.telephone &&
          <p className='error'>{error.telephone}</p>
        }
        <TextField autoComplete="off" name='company' id='company' onChange={handleChange} type='text' label='Empresa (Opcional)' className='inputs' variant='standard' />
        <TextField autoComplete="off" name='message' id='message' onChange={handleChange} label='Mensaje o consulta deseada' className='inputs' variant='standard' multiline rows={6} />
        {error && error.message &&
          <p className='error'>{error.message}</p>
        }
        <button onClick={onSubmit} className='button-principal  pointer'>Enviar</button>
      </div>
    </>
  )
}