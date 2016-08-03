<!-- Delimited text field -->
<delim_text>

  <input value="{ opts.value }" onkeyup="{upd}"/>

  <script>
    var self = this
    self.value = opts.value

    self.on('update', function() {
      if (self.value != opts.value) opts.value = self.value
    })

    upd(e) {
      self.value = e.target.value
      self.parent.update()
      return true
    }
  </script>

</delim_text>
