import React from 'react';
import './Button.css';
export interface ButtonProps {
	label: string;
}

export const Button = (props: ButtonProps) => {
	return <button>{props.label}</button>;
};