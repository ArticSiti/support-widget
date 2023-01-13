if (document.querySelector('.whatsapp-widget')) {
	let whatsappBtn = document.querySelector('.whatsapp-btn');	
	let whatsappWidget = document.querySelector('.whatsapp-widget');

	whatsappBtn.addEventListener('click', () => {
		whatsappWidget.classList.toggle('active')
	})

	whatsappWidget.querySelector('.close').addEventListener('click', () => {
		whatsappWidget.classList.toggle('active')
	})
}