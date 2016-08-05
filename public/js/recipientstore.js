function RecipientStore() {

  riot.observable(this) // Riot provides our event emitter.

  // TEMPORARY code until code to work with API is written
  
  var self = this

  self.recipients = [
    { firstname: 'Fred', lastname: 'Bloggs', email:'fred@acme.com' },
    { firstname: 'John', lastname: 'Doe', email:'j.doe@acme.com' },
    { firstname: 'Another', lastname: 'Person', email:'address@email.com' },
    { firstname: 'One', lastname: 'More', email:'addressmore123@email.com' }
  ];

  self.on('recipient_add', function(newRecipient) {
    self.recipients.push(newRecipient)
    self.trigger('recipient_added', newRecipient)
    self.trigger('recipients_changed', self.recipients)        
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
    console.log(self.recipients)
  })

  function sort(desc = false) {
    self.recipients.sort( (a,b) => (a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? desc ? -1 : 1 : 0 )
  }

}
