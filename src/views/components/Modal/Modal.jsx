import "./Modal.css"

/**
 * 
 * @param {string} title - string: title of the modal
 * @param {string} description - string: description of the modal
 * @param {string} image - string: image of the modal
 * @param {string} url - string: url of the modal
 */

function Modal({ onClick, title, description, image, url }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{title}</h2>
        <button className="btn align-right" onClick={onClick}>
          X
        </button>
        <img className="span2" src={image} alt={title}/>
        <p className="span2">{description}</p>
        <a href={url} target="_blank" rel="noreferrer">
          <button className="btn">Visit Site</button>
        </a>
      </div>
    </div>
  )
}

export default Modal