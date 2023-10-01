import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the main app element (replace with your app's root element)

interface NewBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (newBook: {
    id: number;
    title: string;
    author: string;
    topic: string;
  }) => void;
}

function NewBookModal({ isOpen, onClose, onAddBook }: NewBookModalProps): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [topic, setTopic] = useState<string>('');

  const handleAddBook = (): void => {
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
          <label className="label" htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              className="input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

        </div>
        <div className="field">
          <label className="label" htmlFor="author">
            Author:
            <input
              id="author"
              className="input"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>

        </div>
        <div className="field">
          <label className="label" htmlFor="topic">
            Topic:
            <input
              id="topic"
              className="input"
              type="text"
              placeholder="Topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
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









/*
import React, { useState } from 'react';
import Modal from 'react-modal';

interface NewBookModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddBook: (newBook: {
        id: number;
        title: string;
        author: string;
        topic: string;
    }) => void;
}

function NewBookModal({ isOpen, onClose, onAddBook }: NewBookModalProps): JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [topic, setTopic] = useState<string>('');

    const handleAddBook = (): void => {
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
                    <label className="label" htmlFor="Title">
                        Title
                    </label>
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
*/
