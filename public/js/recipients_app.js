function RecipientsApp() {

	riot.observable(this)

	var self = this

	this.addRecipientFromArr = (arr) => {
		self.addRecipient({
			firstname: arr[0],
			lastname: arr[1],
			email: arr[2]
		})
	}

	this.addRecipient = (recipient) => {
		RiotControl.trigger('recipient_add', recipient)
	}

	this.focusAddField = (e) => {
		self.trigger('focus_add_field')
	}

}