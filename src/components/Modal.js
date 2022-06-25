import './Modal.css';
import check from '../img/check.png'; 

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
          <div className="modal-container">

              <section className="modal-main">
                <div className='wrap-modal m-b'>
                  <div className="close-btn" type="button" onClick={handleClose}>
                      x
                    </div>          
                    <div className="icon-check"> <img src={check} alt="Trivia Test" /> </div>
                    <h3 className='tittle-modal m-b m-t'>Create an account to keep track of your score</h3>
                    <input className="input"></input>
                    <button className="send-btn m-t m-b" type="button" onClick={handleClose}>Sign Up</button>                       
                </div>                    
              </section>
        </div>

    </div>
  );
};

export default Modal
