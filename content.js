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
	if (!selector) {
		customDiv = document.createElement('div')
		customBtn = document.createElement('BUTTON')
		customBtn.innerText = 'TP'
		customBtn.addEventListener('click', () => console.log('hello world'))

		customDiv.setAttribute('id', 'customTP')
		customDiv.setAttribute('class', 'css-1dbjc4n')

		const first = $(toolBar).find(':first-child')[0]
		$(first).append(customDiv)
		$(customDiv).append(customBtn)
	} else {
		customDiv = selector
	}

	log(selector)
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
