import React from 'react';
import './Styles.scss';

const Modal = ({header, content, onChange, isOpen, trigger}) => {
	if (!isOpen) {
		return (
			<div className="modalContainer">
				<div className="trigger" onClick={() => onChange(true)}>
					{trigger}
			    </div>
			</div>
		)
	}

	return (
		<div className="modalContainer" onClick={() => onChange(false)}>
			<div className="trigger">
				{trigger}
			</div>
			<div className="modalCanvas">
				<div className="modalBody" onClick={(e) => {
					e.stopPropagation();
				}}>
					<h2 className="close" onClick={() => onChange(false)}>x</h2>
					<h3 className="header">
						{header}
					</h3>
					<p className="content">
						{content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Modal;
