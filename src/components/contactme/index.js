import React from 'react';
import {useState} from 'react';
import axios from 'axios';

import Heading from '@theme/Heading';
import styles from "@site/src/components/contactme/styles.module.css";

const URL = "https://wy4fg5l8x5.execute-api.us-east-1.amazonaws.com/contact";

/**
 * A component with a 'Contact Me' header.
 * @returns {React.JSX.Element}
 */
function ContactMeHeader() {
    return (<div className={styles.main}>
        <Heading as="h1">
            Contact Me
        </Heading>
    </div>);
}

/**
 * A component containing a contact box that sends form data to the api. When
 * submitted, re-renders either a message indicating successful submission, or error.
 * @returns {React.JSX.Element}
 */
function ContactMeBox() {
    // Form handling literally copied from here: https://ibaslogic.com/simple-guide-to-react-form/
    const [state, setState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(true);

    /**
     * Handles changes to the form, setting each state property to the
     * value written. State is unpacked and set with ..state.
     * @param {*} e - The event.
     */
    function handleChange(e) {
        setState((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    /**
     * Sends the contact form. Modifies the isSubmitted state to true when
     * submitted, and the isSuccessful depending on the response of the event.
     * @param {*} e - The event
     */
    function sendContact(e) {
        e.preventDefault(); // for some reason fetch breaks when this is not done.
        setIsSubmitted(true);
        axios({
            method: "post",
            url: URL,
            data: {
                name: state.name,
                email: state.email,
                message: state.message
            }
        }).then(
            (res) => {setIsSuccessful(true)},
            (rej) => {
                console.log(rej);
                setIsSuccessful(false);
            }
        ).catch(err => {
                console.log(err);
                setIsSuccessful(false);
            }
        );
    }

    /**
     * The contact me form.
     * @returns {React.JSX.Element}
     */
    function ContactMeForm() {
        return (<>
            <form id="contactme" className={styles.form} onSubmit={sendContact}>
                <div className={styles.formField}>
                    <label htmlFor="name"></label>
                    <input className={styles.input} type="text" name="name" id="name" placeholder="Name" onChange={handleChange} required />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email"></label>
                    <input className={styles.input} type="email" name="email"  id="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="message"></label>
                    <textarea className={styles.textarea} type="text" name="message" id="message" placeholder="Message" onChange={handleChange} required />
                </div>
                <div className={styles.formField}>
                    <button className={styles.button} type="submit">Submit</button>
                </div>
            </form>
        </>);
    }

    /**
     * The contact me form submitted with no error message.
     * @returns {React.JSX.Element}
     */
    function ContactMeSubmitted() {
        return (<div className={styles.main}>
            <p className="hero__subtitle">
                Thank you for your submission!
            </p>
        </div>);
    }


    /**
     * The contact me form submitted error message.
     * @returns {React.JSX.Element}
     */
    function ContactMeError() {
        return (<div className={styles.main}>
            <p className="hero__subtitle">
                There was an error processing your request.
            </p>
        </div>);
    }
    
    /**
     * Sets whether the submission component will bte the submitted with
     * no error, or with error message.
     * @returns {React.JSX.Element}
     */
    function ContactMeSubmission() {
        return (<>
            {isSuccessful ? (ContactMeSubmitted()) : (ContactMeError())}
        </>);
    }

    // The final component return decision.
    return (<>
        {isSubmitted ? (ContactMeSubmission()) : (ContactMeForm())}
    </>);
    
}

/**
 * A component with a 'Contact Me' header and a functional 'Contact Me' box.
 * @returns {React.JSX.Element}
 */
function ContactMe() {
    return (<>
        <ContactMeHeader/>
        <ContactMeBox/>
    </>);
}

export {ContactMe};