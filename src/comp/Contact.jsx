import React, { useState } from 'react';

function Contact() {

  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('nahawon2ya@gmail.com'); 
    setShowToast(true); 

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className='contact'>
      <div>
        <span>
          <div className='contact_title'>CONTACT</div>

          <div className='contact_number'>
            <img src='./img/phone.svg' alt="phone" />
            <div>010-2533-7460</div>
          </div>
        </span>

        <div className='contact_id'>

          <span className='contact_github'>
            <a href="https://github.com/nahawon2ya-hub" className='clickable'> 
              <img src='./img/contact_github.svg' alt="github" />
            </a>
            <a href="https://github.com/nahawon2ya-hub" className='clickable'>
              <div>GitHub</div>
            </a>
          </span>

          <span className='contact_gmail clickable' onClick={handleCopy}>
            <img src='./img/gmail.svg' alt="gmail" />
            <div>nahawon2ya@gmail.com</div>
          </span>
        </div>

        <div className='contact_end'>
          Thank you for taking the time to read my portfolio!
        </div>

      </div>

      {showToast && <div className='toast'>이메일이 복사되었습니다!</div>}

    </div>
  );
}

export default Contact;