function RecipientAPI() {

	var URL = '/api/v1/recipients'

	this.add = (recipient) => {
		return $.post(URL, recipient).then(addComplete)
	}

	var addComplete = (result) => {
		var recip
		if (result.code == 201) {
			recip = result.recipient
		} else {
			recip = false
		}
		return recip
	}

}