import "./Modal.scss";
import ClosingX from "../ClosingX/ClosingX";


function Modal({ title, bodyContent, footerContent, show, closeHandler }) {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__top">
                    <div className="modal__header">
                        <h2 className="modal__title">{title}</h2>
                        <ClosingX closeHandler={closeHandler}
                        />
                    </div>

                    <div className="modal__body">
                        {bodyContent()}
                    </div>
                </div>

                {footerContent && (
                    <div className="modal__footer">
                        {footerContent()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;