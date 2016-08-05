function RecipientStore(api) {

  riot.observable(this) // Riot provides our event emitter.
  
  var self = this

  self.recipients = [
    { firstname: 'Fred', lastname: 'Bloggs', email:'fred@acme.com' },
    { firstname: 'John', lastname: 'Doe', email:'j.doe@acme.com' },
    { firstname: 'Another', lastname: 'Person', email:'address@email.com' },
    { firstname: 'One', lastname: 'More', email:'addressmore123@email.com' }
  ];

  self.on('recipient_add', function(newRecipient) {
    api.add(newRecipient).then((addedRecipient) => {
      if (addedRecipient) {
        self.recipients.push(addedRecipient)
        self.trigger('recipients_changed', self.recipients)
      }
      self.trigger('recipient_added', addedRecipient)       
    })
  })

  self.on('recipient_remove', function() {
    self.recipients = self.recipients.filter(function(item) {
      return !item.selected
    });
    self.trigger('recipients_changed', self.recipients)
  })

  self.on('recipients_init', function() {
    self.trigger('recipients_changed', self.recipients)
  })

  self.on('recipients_changed', ()=>{
    sort()
  })

  function sort(desc = false) {
    self.recipients.sort( (a,b) => (a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? desc ? -1 : 1 : 0 )
  }

}
