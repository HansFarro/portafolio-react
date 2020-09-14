import React , {useState} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const ContactForm = () => {
    // Crear el state de datos
    const [datos, setDatos] = useState({
        name: '',
        email:'',
        subject:'',
        message:''
    });

    // Extraer los datos
    const {name,email,subject,message} = datos;

    // Funcion que se ejecuta  cada que el usuario escribe en un input 
    const handleInputChange  = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    
    const sendEmail = e => {
        e.preventDefault();
        // Validar
        e.target.className += " was-validated";
        if(name.trim()==='' || email.trim()==='' || subject.trim()==='' || message.trim()===''){
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
            })
            // return para que no se siga ejecutando el codigo
            return;
        }
        Swal.fire(
            'Buen trabajo!',
            'He recibido tu correo, pronto me pondré en contacto contigo',
            'success'
            )
        
        emailjs.sendForm('service_404n65s', 'template_c5qbpgt', e.target, 'user_U3aUnHsGJaVk1GwNlD4an')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // Resetear el formulario
        setDatos({
            name: '',
            email:'',
            subject:'',
            message:''
        })
        // Eliminar clase wasvalidated de los inputs / textarea
        e.target.classList.remove('was-validated')

    }

    return ( 
        <div className="jumbotron jumbotron-fluid" id="contact">
            <h1 className="display-3 title">CONTÁCTAME</h1>
            <div className="container">
                <form onSubmit={sendEmail} className="needs-validation" noValidate>
                    <fieldset>
                        <div className="row mx-auto">
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label htmlFor="inputName">Nombre completo</label>
                                <input type="text" name="name" value={name} className="form-control" id="inputName" onChange={handleInputChange} placeholder="Ingresa tu nombre completo" required/>
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label htmlFor="inputEmail">Dirección de correo electrónico</label>
                                <input type="email" name="email" value={email} className="form-control" id="inputEmail" onChange={handleInputChange} placeholder="Ingresar correo electronico" required/>
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label htmlFor="inputAsunto">Asunto</label>
                                <input type="text" name="subject" value={subject} className="form-control" id="inputAsunto" onChange={handleInputChange} placeholder="Asunto" required/>
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label htmlFor="textarea">Mensaje</label>
                                <textarea className="form-control" name="message" value={message} id="textarea" cols="30" rows="4" onChange={handleInputChange} placeholder="Mensaje" required></textarea>
                            </div>
                            <div className="col-12 col-md-8 pt-4 mx-auto">
                                <input type="submit" className="btn btn-primary message" value="Enviar Mensaje"/>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;