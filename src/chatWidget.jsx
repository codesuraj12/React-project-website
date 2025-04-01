import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ChatWidget.css';

const ChatWidget = () => {
  const [step, setStep] = useState(1);
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [fullName, setFullName] = useState('');
  const [chatOpen, setChatOpen] = useState(false);

  const sendEmail = () => {
    const serviceID = "service_41tafpt"; // Your actual Service ID
    const templateID = "template_0zqagth"; // Your actual Template ID
    const publicKey = "mlGwgTfHcG3Dnvc4T"; // Use the Public Key instead of Private Key

    const templateParams = {
        fullName: fullName,   // Ensure it matches the template field name
        email: email,         // Ensure it matches the template field name
        contact: contact,     // Ensure it matches the template field name
        query: query,         // Ensure it matches the template field name
    };

    console.log("Sending Email with Params: ", templateParams); // Debugging

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log("Email sent successfully:", response);
        alert('Message sent successfully!');
        setStep(1);
        setQuery('');
        setEmail('');
        setContact('');
        setFullName('');
        setChatOpen(false);
      })
      .catch(error => {
        console.error('Email sending error:', error);
        alert('Failed to send message. Please try again.');
      });
};



  return (
    <div className="chat-widget">
      {!chatOpen ? (
        <button className="chat-button" onClick={() => setChatOpen(true)}>💬 Chat</button>
      ) : (
        <div className="chat-box">
          <button className="close-chat" onClick={() => setChatOpen(false)}>✖</button>
          {step === 1 && (
            <>
              <p>How can I help you?</p>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Type your query..." />
              <button className="next-Chat" onClick={() => setStep(2)}>Next</button>
            </>
          )}
          {step === 2 && (
            <>
              <p>Please enter your email:</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email..." />
              <button className="next-Chat" onClick={() => setStep(3)}>Next</button>
            </>
          )}
          {step === 3 && (
            <>
              <p>Enter your contact number:</p>
              <input type="tel" value={contact} onChange={e => setContact(e.target.value)} placeholder="Your contact..." />
              <button className="next-Chat" onClick={() => setStep(4)}>Next</button>
            </>
          )}
          {step === 4 && (
            <>
              <p>Enter your full name:</p>
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Full Name..." />
              <button className='submit' onClick={sendEmail}>Submit</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
