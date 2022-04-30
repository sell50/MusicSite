import React from "react";
import "./../css/Contact.css"

export default function ContactPage(props) {

    const contactTemplate = (
        <div className="contactContainer">
            <form className="contactForm">
                <label className="fnameLabel">
                    First Name:
                    <input type="text" name="fname" />
                </label>
                

                <label className="lnameLabel">
                    Last Name:
                    <input type="text" name="lname" />
                </label>
                

                <label className="emailLabel">
                    Email:
                    <input type="text" name="email" />
                </label>

                <label className="messageLabel">
                    Message:
                    <textarea name="Text1" cols="40" rows="5"></textarea>
                </label>

                <input className="submitInput" type="submit" value="Submit" />
            </form>
        </div>
    )

    return (
        <div>
            {contactTemplate}
        </div>
    );
}