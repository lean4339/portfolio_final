import { useState } from 'react';
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
    if(formData.email !== '' && !formData.email.includes('@')){
      newError.email = 'El email no es válido';
      isError = true;
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
      <Element name='/contacto' />
      <div className='form-container' id='/contacto'>
        <div className='title-form-container'>
          <h1 className='title-form'>Contacto</h1>
          <p className='text-form'>Mandame un mail con tu consulta y lo charlamos</p>
        </div>
        <input value={formData.name} placeholder='Name' autoComplete="off" name='name' id='name' onChange={handleChange} type='text' label='Nombre' className='inputs'  />
        {error && error.name &&
          <p className='error'>{error.name}</p>
        }
        <input value={formData.email} placeholder='Email' autoComplete="off" name='email' id='email' onChange={handleChange} type='email' label='Email' className='inputs'  />
        {error && error.email &&
          <p className='error'>{error.email}</p>
        }
        <input value={formData.telephone} placeholder='Telephone' autoComplete="off" name='telephone' id='telephone' onChange={handleChange} type='tel' label='Teléfono' className='inputs'  />
        {error && error.telephone &&
          <p className='error'>{error.telephone}</p>
        }
        <input value={formData.company} placeholder='Company' autoComplete="off" name='company' id='company' onChange={handleChange} type='text' label='Empresa (Opcional)' className='inputs'  />
        <input value={formData.message} placeholder='Message' autoComplete="off" name='message' id='message' onChange={handleChange} label='Mensaje o consulta deseada' className='inputs'  rows={6} />
        {error && error.message &&
          <p className='error'>{error.message}</p>
        }
        <button onClick={onSubmit} className='button-principal hover pointer'>Enviar</button>
      </div>
    </>
  )
}