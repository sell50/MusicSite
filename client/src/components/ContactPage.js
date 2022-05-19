import React, {useState} from "react";
import "./../css/Contact.css"

export default function ContactPage(props) {

//////////////////////////////////////////////////////////////////

    const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        setStatus("Sending...");

        const { name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

////////////////////////////////////////////////////////////////////////

    const contactTemplate = (
        <div className="contactContainer">
            <form className="contactForm" onSubmit={handleSubmit}>

                <label className="nameLabel" htmlFor="name">
                    Name:
                    <input type="text" name="name" id="name" />
                </label>

                <label className="emailLabel" htmlFor="email">
                    Email:
                    <input type="text" name="email" id="email" />
                </label>

                <label className="messageLabel" htmlFor="message">
                    Message:
                    <textarea name="Text1" cols="40" rows="5" id="message" required />
                </label>

                <button className="submitInput"  type="submit">{status}</button>
            </form>
        </div>
    )

    return (
        <div>
            {contactTemplate}
        </div>
    );
}