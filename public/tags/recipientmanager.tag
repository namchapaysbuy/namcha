<recipientmanager>

    <div>
      <h3>{ opts.title }</h2> 
      <form class="form-horizontal" onsubmit="{ add }">
        <div class="form-group">
          <div class="col-sm-10">
            <delim_text classname="form-control" name='recipient_info' trim='true'></delim_text>
          </div>
          <div class="col-sm-2">
            <button disabled="{ !tags.recipient_info.value }" class="btn btn-default pull-right">
              <span>Add</span>
            </button>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-12">
            <recipientlist items='{ items }'></recipientlist>
          </div>
        </div>
      </form>
    </div>

  <script>
    var self = this
    var recipents
    self.items = []
    self.addInProgress = false

    self.on('mount', () => {
      self.tags.recipient_info.on('update', self.update)
      recipients = opts
      recipients.on('focus_add_field', self.tags.recipient_info.focus)
      RiotControl.trigger('recipients_init')
    })  

    RiotControl.on('recipients_changed', (items) => {
      self.items = items
      self.update()
    }) 

    add(e) {
      var toAdd = self.tags.recipient_info
      if (!self.addInProgress && toAdd.value) {
        self.addInProgress = true
        recipients.addRecipientFromArr(toAdd.tokens)
      }
    }    

    RiotControl.on('recipient_added', (recipient) => {
      var toAdd = self.tags.recipient_info
      if (recipient) {
        toAdd.value = ''
        toAdd.update()
      } else {
        alert('Add failed')
      }
      toAdd.focus()
      self.addInProgress = false
    }) 

  </script>

</recipientmanager>



<recipientlist>
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr each='{ opts.items }'>
        <td><a class="attrib-toggle">{ firstname }</a></td>
        <td>{ lastname }</td>
        <td>{ email }</td>
      </tr>
    </tbody>
  </table>
</recipientlist>
