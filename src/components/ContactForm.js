import React , {useState} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

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
            <div className="jumbotron main-info-section" id="contact">
                <div class="container">
                <Tada>
                    <h1 className="display-3 title">CONTÁCTAME</h1>
                </Tada>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">

                    </div>
                </div>
                </div>
            </div> 
     );
}
 
export default ContactForm;