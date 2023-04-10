const users = [
	'petr',
	'jana-34',
	'husky16',
	'66beruska',
	'thegodofU',
	'rene_gade',
	'tommy',
	'luciluci',
	'tanko',
	'poltergeist',
	'hlava-havla',
	'telo-ramba',
]

let userNameInput = document.querySelector('#username')
let pswInputFirst = document.querySelector('#pass1')
let pswInputSecond = document.querySelector('#pass2')
let regForm = document.querySelector('.reg-form')
let button = document.querySelector('#btn-register')
//button.disabled = true
//button.classList.add('button--disabled')

let formError = document.querySelector('.reg-form__error')
let formCorrect = document.querySelector('.reg-form__correct')

const checkUserName = (event) => {
	if (userNameInput.value !== ' ') {
		if (users.includes(userNameInput.value)) {
			formError.innerHTML += 'Zadané uživatelské jméno již existuje'
			userNameInput.value = ''
			userNameInput.classList.add('input--blank')
		} else {
			formCorrect.innerHTML += 'Uživatelské jméno je v pořádku'
			formError.innerHTML = ''
			userNameInput.classList.remove('input--blank')
		}
	} else {
		alert('Uživatelské jméno nesmí být prázdné')
		userNameInput.classList.add('input--blank')
	}
}

const checkPasswordFirst = (event) => {
	if (pswInputFirst.value.length >= 10) {
		if (pswInputFirst.value.includes('-') || pswInputFirst.value.includes('_') ||
			pswInputFirst.value.includes(':')) {
			console.log('Heslo je v pořádku')
		} else {
			alert('Heslo musí obsahovat diakritiku - _ :')
			pswInputFirst.classList.add('input--blank')
		}
	} else {
		alert('Heslo musí obsahovat min. 10 znaků')
		pswInputFirst.classList.add('input--blank')
	}
}

const checkPasswordSecond = (event) => {
	if (pswInputSecond.value !== pswInputFirst.value) {
		alert('Chybné heslo')
		pswInputSecond.classList.add('input--blank')
	} else {
		console.log('Správné heslo')
	}
}

const submitForm = (event) => {
	event.preventDefault()
	regForm.innerHTML = 'Registrace byla úspěšně dokončena'
	console.log('Registrace byla úspěšně dokončena')
}

userNameInput.addEventListener('change', (event) => checkUserName(event))
pswInputFirst.addEventListener('change', (event) => checkPasswordFirst(event))
pswInputSecond.addEventListener('change', (event) => checkPasswordSecond(event))
regForm.addEventListener('submit', (event) => submitForm(event))



//autofocus
//více mezer