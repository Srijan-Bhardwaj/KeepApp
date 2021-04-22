import React from "react";
import Style from "./Content.module.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Content = (props) => {
  return (
    <>
    <div className={Style.wrapper}>
      <div className={Style.container} onClick={()=>{
          return props.onDisplay(props.id);
      }}>
        <div className={Style.heading}>
          <div>{props.title}</div>
        </div>
        <div className={Style.delete}>
          <div>Note-{props.id+1}</div>
          <IconButton aria-label="delete" color="secondary" onClick={()=>{
              return props.onSelect(props.id);
          }}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      </div>
    </>
  );
};

export default Content;
