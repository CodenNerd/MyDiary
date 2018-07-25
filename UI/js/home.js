//collapsible js code from www.alligator.io
let myLabels = document.querySelectorAll('.lbl-toggle');

		Array.from(myLabels).forEach(label => {
			label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
    	e.preventDefault();
    	label.click();
    };
});
		});


			let displayTooltip = () => document.getElementsByClassName('tooltip')[0].style.visibility = "visible";
			
			let unshowTooltip = () => document.getElementsByClassName('tooltip')[0].style.visibility = "hidden";

			let showModal = () => document.getElementById('modal').style.display = "inline-block";

			let hideModal = () => document.getElementById('modal').style.display = "none";

