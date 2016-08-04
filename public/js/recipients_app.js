function RecipientsApp() {

	riot.observable(this)

	var self = this

	this.addRecipientFromArr = (arr) => {
		self.addRecipient({
			firstName: arr[0],
			lastName: arr[1],
			email: arr[2]
		})
	}

	this.addRecipient = (recipient) => {
		RiotControl.trigger('recipient_add', recipient)
	}

}