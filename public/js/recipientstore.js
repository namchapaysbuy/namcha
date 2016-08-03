function RecipientStore() {
  riot.observable(this) // Riot provides our event emitter.
  
  var self = this,
    _nextID = 3

  self.recipients = [
    { pid:1, title: 'Task 1', done: false },
    { pid:2, title: 'Task 2', done: false }  
  ];

  self.on('recipient_add', function(newR) {
    newR.pid = _nextID++
    self.recipients.push(newR) 
    self.trigger('recipients_changed', self.recipients)        
  })

  self.on('recipient_remove', function() {
    self.recipients = self.recipients.filter(function(item) {
      return !item.done
    });
    self.trigger('recipients_changed', self.recipients)
  })

  self.on('recipients_init', function() {
    self.trigger('recipients_changed', self.recipients)
  })

  self.on('recipients_changed', ()=>console.log(self.recipients) )

}
