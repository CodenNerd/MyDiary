//Collapsible js code from www.alligator.io
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

			let modalContent = () =>{
				const modalForm = document.forms['modalForm'];

				let dateValue = modalForm['entryDate'].value = "MM/DD/YYYY";
				let summaryValue = modalForm['entrySummary'].value = "...Summary";
				let detailValue = modalForm['entryDetail'].value = "You are not implementing the core functionality yet, you are only building the UserInterface elements, pages and views!	● You are to create a pull request to elicit review and feedback for the UI template when you are done working on them ● Do not use any css frameworks e.g bootstrap, materialize .● Do not download or use an already built website template.";


			}

			let removeEntry = id =>{
					document.getElementById(id).parentNode.innerHTML = null;
			}	
