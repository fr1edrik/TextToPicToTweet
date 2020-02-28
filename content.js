chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch (request.message) {
		case 'update_browser_action':
			findActionButtons()
			sendResponse()
			break
		default:
			break
	}
})

// log({ changeInfo, tab });

// implementButton();

// sendAction();
function log(string) {
	console.log(string)
}

function findActionButtons() {
	const toolBar = $('div[data-testid="toolBar"]')[0]
	if (!toolBar) return

	let custom = null
	const selector = $('#customTP')[0]
	// if (!selector) {
	// 	custom = document.createElement('div')
	// 	custom.innerText = 'TP'
	// 	custom.setAttribute('id', 'customTP')
	// 	custom.setAttribute('class', 'css-1dbjc4n')
	// 	$(toolBar)
	// 		.find(':first-child')
	// 		.append(custom)
	// } else {
	// 	log(selector)
	// 	custom = selector
	// }
}

function convert() {
	const cv = document.createElement('CANVAS').getContext('2d')
	const ta = document.getElementById('ta')
	const image = document.createElement('IMAGE')

	const val = ta.value

	cv.canvas.width = cv.measureText(val).width

	cv.fillText(val, 0, 10)
	cvfont = '30px Arial'
	image.src = cv.canvas.toDataURL()

	console.log(image.src)
}
