function RecipientAPI() {

	const URL = '/api/v1/recipients'
	const CODE_SUCCESS = 201

	this.add = (recipient) => {
		return $.post(URL, recipient).then(addComplete)
	}

	var addComplete = (result) => {
		var recip
		if (result.code == CODE_SUCCESS) {
			recip = result.recipient
		} else {
			recip = false
		}
		return recip
	}

}