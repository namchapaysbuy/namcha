<recipientmanager>

  <h3>{ opts.title }</h3>

  <form onsubmit='{ add }'>
    <delim_text name='txt'></delim_text>
    <button disabled='{ !tags.txt.value }'>Add #{ items.length + 1 }</button>
  </form>

  <recipientlist items='{ items }'></recipientlist>

  <button disabled='{ !items.length }' onclick='{ remove }'>Remove</button>

  <script>
    var self = this
    self.items = []

    self.on('mount', function() {
      // Trigger init event when component mounted
      RiotControl.trigger('recipients_init')
    })  

    // Register a listener for store change events.
    RiotControl.on('recipients_changed', function(items) {
      self.items = items
      self.update()
    }) 

    add(e) {
      if (self.tags.txt.value) {
        RiotControl.trigger('recipient_add', { title: self.tags.txt.value })
        self.tags.txt.value = ''
      }
    }

    remove(e) {
        RiotControl.trigger('recipient_remove')
    }

  </script>

</recipientmanager>



<recipientlist>

  <ul>
    <li each='{ opts.items }' data-pid="{ pid }">
      <input type='checkbox' checked='{ selected }' onclick='{ parent.toggle }' /> <label class='{ completed: selected }'>{ title }</label>
    </li>
  </ul>

  <script>
    var self = this

    toggle(e) {
      e.item.selected = !e.item.selected
      return true
    }
  </script>

</recipientlist>
