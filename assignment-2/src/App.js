import './App.css';
import BookList from "./components/BookList";
import React, {useState} from "react";
import Header from "./components/Header";
import NewBookModal from "./components/NewBookModal";

function App() {



    return (
        <div>
            <Header/>
            <div className="py-4">
                <BookList />
            </div>

        </div>
    );
}

export default App;
