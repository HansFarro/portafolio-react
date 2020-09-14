import React , {useState} from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

const ContactForm = () => {
    // Crear el state de datos
    const [datos, setDatos] = useState({
        nombre: '',
        email:'',
        asunto:'',
        mensaje:''
    });

    // Extraer los datos
    const {nombre,email,asunto,mensaje} = datos;

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
        if(nombre.trim()==='' || email.trim()==='' || asunto.trim()==='' || mensaje.trim()===''){
            // return para que no se siga ejecutando el codigo
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
              })
            return;
        }
        Swal.fire(
            'Buen trabajo!',
            'He recibido tu correo ,pronto me pondre en contacto contigo',
            'success'
        )

        // Resetear el formulario
        setDatos({
            nombre: '',
            email:'',
            asunto:'',
            mensaje:''
        })
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
    }

    return ( 
        <div className="jumbotron jumbotron-fluid" id="contact">
            <h1 className="display-3 title">CONTACTAME</h1>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <fieldset>
                        <div className="row mx-auto">
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label for="inputName">Nombre completo</label>
                                <input type="text" name="nombre" value={nombre} className="form-control" id="inputName" onChange={handleInputChange} placeholder="Ingresa tu nombre completo" />
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label for="inputEmail">Direcccion de correo electronico</label>
                                <input type="email" name="email" value={email} className="form-control" id="inputEmail" onChange={handleInputChange} placeholder="Ingresar correo electronico" />
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label for="inputAsunto">Asunto</label>
                                <input type="text" name="asunto" value={asunto} className="form-control" id="inputAsunto" onChange={handleInputChange} placeholder="Asunto" />
                            </div>
                            <div className="col-12 col-md-8 form-group mx-auto">
                                <label for="textarea">Mensaje</label>
                                <textarea className="form-control" name="mensaje" value={mensaje} id="textarea" cols="30" rows="4" onChange={handleInputChange} placeholder="Mensaje"></textarea>
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