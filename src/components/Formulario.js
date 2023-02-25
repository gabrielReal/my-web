import React, { useState } from "react";
/*
export default function Formulario() {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mail, setMail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                name="nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} 
                />

            <label htmlFor="telefono">Teléfono</label>
            <input 
                type="text" 
                id="telefono" 
                name="telefono" 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                />

            <label htmlFor="mail">E-mail</label>
            <input 
                type="mail" 
                id="mail" 
                name="mail" 
                value={mail}
                onChange={(e) => setMail(e.target.value)} 
                />

            <label htmlFor="mensaje">Mensaje</label>
            <textarea 
                id="mensaje" 
                name="mensaje" 
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)} 
                />

            <input type="submit" />
        </form>
        </>

    );
}*/

export default function Formulario() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Error Message start
    const [errName, setErrName] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errMessage, setErrMessage] = useState("");

    // Handle function start
    const handleName = (e)=> {
        setName(e.target.value)
        setErrName("");
    }

    const handlePhone=(e)=>{
        setPhone(e.target.value);
        setErrPhone("");
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        setErrEmail("");
    }

    const handleMessage=(e)=>{
        setMessage(e.target.value);
        setErrMessage("");
    }

    // Name validation start
    const nameValidation = (name)=> {
        return String(name)
        .match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/);
    }

    // Email validation start
    const emailValidation = (email)=> {
        return String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }

    // Submit button start
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!name) {
            setErrName("Ingresa tu nombre")
        }else{
            if(!nameValidation(name)) {
            setErrName("El campo acepta sólo caracteres y espacios en blanco")
            }
        }
        if(!phone) {
            setErrPhone("Ingresa un teléfono de contacto")
        }
        if(!email){
            setErrEmail("Ingresa tu email");
        }else{
            if(!emailValidation(email)){
                setErrEmail("Ingresa un email válido");
            }
        }
        if(!message) {
            setErrMessage("No escribiste ningún mensaje")
        }

        if(name 
            && phone
            && email 
            && emailValidation(email) 
            && message) {
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");
        }
    }

    return (
        <section className="container-formulario viewport" id="contacto">
            <h1>Contacto</h1>
        <form onSubmit={handleSubmit}>
            <div className="Form">
            <div className="colForm">
            <input 
                type="text"
                placeholder="Nombre"
                id="nombre"
                name="nombre" 
                value={name}
                onChange={handleName}
                />
                {errName && (
                    <p className="errorMessage">
                        {errName}
                    </p>
                )}

            <input 
                type="text"
                placeholder="Teléfono" 
                id="telefono" 
                name="telefono" 
                value={phone}
                onChange={handlePhone}
                />
                {errPhone && (
                    <p className="errorMessage">
                        {errPhone}
                    </p>
                )}

            <input 
                type="mail" 
                placeholder="E-mail"
                id="mail" 
                name="mail" 
                value={email}
                onChange={handleEmail} 
                />
                {errEmail && (
                    <p className="errorMessage">
                        {errEmail}
                    </p>
                )}
            </div>
            <div className="colForm">
            <textarea 
                id="mensaje" 
                placeholder="Mensaje"
                name="mensaje" 
                value={message}
                onChange={handleMessage}  
                />
                {errMessage && (
                    <p className="errorMessage">
                        {errMessage}
                    </p>
                )}
            </div>
            </div>
            <input className="contacto_boton" type="submit" />
        </form>
        </section>

    );
}