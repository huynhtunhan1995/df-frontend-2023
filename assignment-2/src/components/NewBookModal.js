import React, {useState} from 'react';
import Modal from 'react-modal';


function NewBookModal({isOpen, onClose, onAddBook}) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [topic, setTopic] = useState('');

    const handleAddBook = () => {
        if (title.trim() === '' || author.trim() === '' || topic.trim() === '') {
            alert('Please enter title, author, and topic.');
            return;
        }

        const newBook = {
            id: Date.now(),
            title,
            author,
            topic,
        };

        onAddBook(newBook);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Add New Book"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className="modal-header">
                <h2>Add New Book</h2>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
            <div className="modal-body">
                <div className="field">
                    <label className="label" htmlFor="Title">Title</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="label">Author</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label className="label">Topic</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>
            </div>
            <div className="modal-footer">
                <button className="button is-success" onClick={handleAddBook}>
                    Add Book
                </button>
                <button className="button" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
}

export default NewBookModal;
