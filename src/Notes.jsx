import React, { useState } from "react";
import Style from "./Notes.module.css";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, TextField } from "@material-ui/core";
import Content from "./Content";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const useStyle = makeStyles({
  add: {
    position: "absolute",
    top: "-20px",
  },
});

const Note = () => {
  const classes = useStyle();
  const [input, setInput] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);
  const [msgId,setMsgID] = useState({title:"",content:""});
  const [show,setShow] = useState(false);

  const inputEvent = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const add = () => {
    if (input.title === "" || input.content === "") {
        setTimeout(()=>{
      return alert("Empty field not allowed!");},500);
    } else {
      setNotes((prev) => {
        return [...prev, input];
      });
      console.log(notes);
      setInput({ title: "", content: "" });
    }
  };

  const deleteItem = (id) => {
    setNotes((prev) => {
      return prev.filter((val, index) => {
        return index !== id;
      });
    });
  };

  const showMsg=(id)=>{
    setShow(true);;
    setMsgID(notes[id]);
  }

  const close=()=>{
      setShow(false);
  }

  return (
    <>
      <div className={Style.container}>
          <span className={Style.hidden}>
        <input
          type="text"
          name="title"
          value={input.title}
          placeholder="Title"
          onChange={inputEvent}
          autoComplete="off"
        />
        <span>
          {/* <hr style={{ margin: "0" }} /> */}
          <textarea
            row=""
            col=""
            placeholder="write a note..."
            autoComplete="off"
            value={input.content}
            name="content"
            onChange={inputEvent}
          />
          <div
            className={Style.btn}
            onClick={add}
          >
            <AddIcon />
          </div>
        </span>
        </span>
      </div>
      <div className={Style.wrapper}>
      <div className={Style.content_container}>
        {notes.map((val, index) => {
          return (
            <>
              <Content
                title={val.title}
                id={index}
                key={index}
                onSelect={deleteItem}
                onDisplay={showMsg}
              />
            </>
          );
        })}
      </div>
      </div>
      {show?
      <div className={Style.msg}>
          <fieldset>
              <legend>TITLE</legend>
          <textarea disabled>{msgId.title}</textarea></fieldset>
          <fieldset>
              <legend>MESSAGE</legend>
          <textarea disabled>{msgId.content}</textarea></fieldset>
          <CancelPresentationIcon color="secondary" onClick={close} style={{position:'fixed',top:'10%',right:'10%',fontSize:'2em'}}/>
      </div> : null
    }
    </>
  );
};

export default Note;
