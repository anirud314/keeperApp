import React, {useState}from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function AddNote(props){

    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const { value, name } = event.target;
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            };
        });
        
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className ="create-note">
                {isExpanded && (
                    <input
                        name = "title" 
                        placeholder = "Title" 
                        onChange={handleChange}  
                        value={note.title} 
                    />
                )}
                

                <textarea 
                name= "content" 
                onClick = {expand}
                placeholder = "Take a note..."
                rows={isExpanded ? 3 : 1} 
                onChange={handleChange} 
                value={note.content} />

                <Zoom in ={isExpanded}>
                    <Fab onClick = {submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    )
}

export default AddNote;