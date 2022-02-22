import React, { Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ReactDOM from "react-dom";
import "./ErrorModal.css";

const Backdrop = (props) => {
	return <div className="backdrop" onClick={props.onHandleError}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className="modal">
			<header className="header">
				<h2> {props.title} </h2>
			</header>
			<div className="content">
				<p> {props.message} </p>
			</div>
			<footer className="actions">
				<Button onClick={props.onHandleError}>OK</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onHandleError={props.onHandleError} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onHandleError={props.onHandleError}
				/>,
				document.getElementById("overlay-root")
			)}
		</Fragment>
	);
};

export default ErrorModal;
