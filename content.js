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

function Obs(selector) {
	var observer = new IntersectionObserver(
		function(entries) {
			// isIntersecting is true when element and viewport are overlapping
			// isIntersecting is false when element and viewport don't overlap
			if (entries[0].isIntersecting === false) {
				observer.unobserve(selector)
				selector.remove()
			}
		},
		{ threshold: [1] },
	)

	observer.observe(selector)
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
		customBtn.addEventListener('click', () => convert())

		customDiv.setAttribute('id', 'customTP')
		customDiv.setAttribute('class', 'css-1dbjc4n')

		const first = $(toolBar).find(':first-child')[0]
		$(first).append(customDiv)
		$(customDiv).append(customBtn)

		Obs(customDiv)
	} else {
		customDiv = selector
	}

	log(selector)
}

function convert() {
	const cv = document.createElement('CANVAS').getContext('2d')
	const val = $('.DraftEditor-root')[0].innerText
	const image = document.createElement('IMAGE')

	const lineHeight = 15

	const arr = val.match(/(.{30}[.\S]*)/g)

	cv.font = '30px Arial'

	log(arr)
	// cv.canvas.width = cv.measureText(arr[0]).width

	for (let i = 0; i < arr.length; i++) {
		cv.fillText(arr[i], 0, 30 + i * lineHeight)

		if (cv.canvas.width < cv.measureText(arr[i]).width)
			cv.canvas.width = cv.measureText(arr[i]).width
	}

	// image.src = cv.canvas.toDataURL()

	console.log(cv.canvas.toDataURL())
}
