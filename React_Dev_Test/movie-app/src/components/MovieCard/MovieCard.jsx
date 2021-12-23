import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './MovieCard.scss';

Modal.setAppElement('#root');

const MovieCard = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { data } = props;

  return (
    <>
      <div className='card-item' onClick={() => setModalIsOpen(true)}>
        <div className='card-top'>
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        className='Modal'>
        <Link to={`/movie/${data.imdbID}`}>
          <div className='modal-container'>
            <div className='modal-top'>
              <img src={data.Poster} alt={data.Title} />
            </div>
            <div className='modal-bottom'>
              <div className='modal-info'>
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
              </div>
            </div>
          </div>
        </Link>
      </Modal>
    </>
  );
};

export default MovieCard;
