let validFields = [];
		let inputValidation = fieldName =>{
			let fieldValue = getInputField('signup-form',fieldName).value;
			let isValid = true;
			let message = "";
			let validChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
			let word = makeInputErrorMessage(fieldName);
			if(fieldName == "signup-email"){
			validChars.push('@');
			validChars.push('.');
			}
			for (let i = 0; i < fieldValue.length; i++) {
				let charAtPos = fieldValue.charAt(i);
				if(inArray(validChars,charAtPos) == false){
					isValid = false;
					message = word+" contains invalid characters";
					
					break;
				}
			}
			if(fieldName == "signup-password"){
				isValid = true;
				message = "";
			}
			if(fieldValue.length < 4){
				isValid = false;
				message = word+" is too short"
			}
			if(fieldValue == ""){
				isValid = false;
				message = word+" field should not be empty";
			}
			//use isValid instead // also check for string length
			if(isValid==false){
				getInputField('signup-form',fieldName).style.border = "1px solid red";
				getInputField('signup-form',fieldName).style.backgroundColor = "#330000";
				getInputField('signup-form',fieldName).previousElementSibling.innerHTML = message;
			}
			else{
				getInputField('signup-form',fieldName).style.border = "1px solid green";
				getInputField('signup-form',fieldName).style.backgroundColor = "#006633";
				message = "";
				getInputField('signup-form',fieldName).previousElementSibling.innerHTML = message;
			}
			if(isValid == true){
				validFields.push(fieldName);
				validFields.sort();
			}
			else{
				for (let i = 0; i < validFields.length; i++) {
					if(validFields[i] == fieldName){
						delete validFields[i];
					}
				}

			}
			if(inArray(validFields,'signup-name') == true && inArray(validFields,'signup-email') == true && inArray(validFields,'signup-password') == true){

				getInputField('signup-form','signup-button').disabled = "";
				getInputField('signup-form','signup-button').className = "enabled";
			}
			else{
				getInputField('signup-form','signup-button').disabled = "disabled";
				getInputField('signup-form','signup-button').className = "";
			}

		}
		let makeInputErrorMessage = fieldName =>{
			if(fieldName == "signup-name"){
				return "Name";
			}
			else if(fieldName == "signup-email"){
				return "Email";
			}
			else if(fieldName == "signup-password"){
				return "Password";
			}
			else{
				return  "";
			}
		} 
		let getInputField = (formName, inputName) => document.forms[formName][inputName];
		let inArray = (testarray,testvalue) =>{
			testvalue = testvalue.toLowerCase();
			for (let i = 0; i < testarray.length; i++) {
				//console.log(testarray[i]+'--inArray--'+testvalue)
				if(testarray[i]==testvalue){
					return true;
				}
			}
			return false;
		}