import type { FC } from 'react';

interface ContactGadgetProps {}

const ContactGadget: FC<ContactGadgetProps> = ({}) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <div className="floating-container">
        <div className="floating-button">+</div>
        <div className="element-container">

          <a href="mailto:1rafaelrocha2@gmail.com" target="_blank" rel="noreferrer">
            <span className="float-element email">
              <i className="material-icons">email</i>
            </span>
          </a>

          <a href="https://wa.me/5522997041878" target="_blank" rel="noreferrer">
            <span className="float-element tooltip-left whatsApp">
              <i className="material-icons">chat</i>
            </span>
          </a>

          <a href="https://is.gd/rafaelrocha" target="_blank" rel="noreferrer">
            <span className="float-element phone">
              <i className="material-icons">phone</i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactGadget;