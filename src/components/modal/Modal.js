import React from 'react';
import './Styles.scss';

const Modal = ({header, content, onChange, isOpen, trigger}) => {
	if (!isOpen) {
		return (
			<div className="modalContainer">
				<div className="modalContainer__trigger" onClick={() => onChange(true)}>
					{trigger}
			    </div>
			</div>
		)
	}

	return (
		<div className="modalContainer" onClick={() => onChange(false)}>
			<div className="modalContainer__trigger">
				{trigger}
			</div>
			<div className="modalContainer__modalCanvas">
				<div className="modalContainer__modalCanvas__modalBody" onClick={(e) => {
					e.stopPropagation();
				}}>
					<h2 className="modalContainer__modalCanvas__modalBody__close" onClick={() => onChange(false)}>x</h2>
					<h3 className="modalContainer__modalCanvas__modalBody__header">
						{header}
					</h3>
					<p className="modalContainer__modalCanvas__modalBody__content">
						{content}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Modal;
