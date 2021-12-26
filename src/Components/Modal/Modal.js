import {useState} from 'react'
import './Modal.css'

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModalHandler = () => {
        setModal(!modal)
    }

    return (
        <>
            <button 
            onClick={toggleModalHandler}
            className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure voluptatibus illo rerum reiciendis itaque libero beatae, fuga exercitationem quaerat eos, vitae, ad quisquam deleniti modi perferendis alias! Minus provident natus labore? In blanditiis eveniet amet quis provident ex molestiae aut voluptate eaque? Perferendis, commodi. Officia sint facilis similique obcaecati.
                            </p>
                            <button 
                            onClick={toggleModalHandler}
                            className="close-modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
        )}
        </>
    )
}
