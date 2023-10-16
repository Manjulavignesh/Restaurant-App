import classes from "./Model.module.css"
import React,{Fragment} from "react";
import ReactDOM from "react-dom"
const BackDrop=(props)=>
{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const ModelOverlay=(props)=>
{
    return <div className={classes.modal}><div className={classes.content}>{props.children}</div></div>
}
const Model=(props)=>{
    const portalElement=document.getElementById("overlays")
    return (<Fragment>
        {ReactDOM.createPortal(<BackDrop  onClose={props.onClose}/>,portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>)

}
export default Model;