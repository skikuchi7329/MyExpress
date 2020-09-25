const button = document.getElementById('call-api');
const text = document.getElementById('password-text');

button.addEventListener('click',()=>{
  fetch('/api/password')
	.then(response => {
		return response.json();
	})
	.then(result => {
		text.innerHTML = result;
  });
})
