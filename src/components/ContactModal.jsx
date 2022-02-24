import React from 'react'

export default function ContactModal() {
  return (
    <div id="contactModal" className="customModal">
    <div className="customModalInner">
        <div className="modalHead">
            <h3>Contact Us!</h3>
            <button className="closeBtn xBtn">x</button>
        </div>
        <div className="modalContent">
            <form id="contactForm" className="customForm">
                <div className="customFormGroup">
                    <label className="customFormLabel" htmlFor="name">Name</label>
                    <input className="customFormInputText" type="text" name="name" />
                    <span className="nameErrorText errorText customFormMessage customFormMessageError"></span>
                </div>
                <div className="customFormGroup">
                    <label className="customFormLabel" htmlFor="Email">Email</label>
                    <input className="customFormInputText" type="email" name="email" />
                    <span className="emailErrorText customFormMessage customFormMessageError"></span>
                    <span className="emailTypeErrorText customFormMessage customFormMessageError"></span>
                </div>
                <div className="customFormGroup">
                    <label className="customFormLabel" htmlFor="Message">Message</label>
                    <textarea className="customFormInputText" name="message"></textarea>
                    <span className="messageErrorText customFormMessage customFormMessageError"></span>
                </div>
                <div className="customFormMessage resMessage"></div>
                <button id="contactSubmit" className="customBtn blueBtn submitBtn">Contact</button>
            </form>
        </div>
    </div>
</div>
  )
}
