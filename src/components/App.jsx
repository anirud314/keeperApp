import React, {useState} from "react";
import Header from "./Header";
import AddNote from "./AddNote";
import Footer from "./Footer";
import Note from "./Note";


function App(){
    const[notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
           return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        })
    }
    return(
    <div>
        <Header />
        <AddNote onAdd = {addNote}/>
        {notes.map((noteItem, index) => {
            return <Note 
            key = {index}
            id = {index}
            title ={noteItem.title}
            content = {noteItem.content}
            onDelete = {deleteNote}
            />
        })}
        <Footer />
    </div>
        
    )
}

export default App;