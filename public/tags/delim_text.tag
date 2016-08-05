<!-- Delimited text field -->
<delim_text>

  <input class="{ opts.classname }" value="{ opts.value }" onkeyup="{ upd }"/>

  <script>
    var self = this
    self.value = opts.value
    self.delim = opts.delim || ','
    self.trim = opts.trim || false

    self.on('update', function() {
      if (self.value != opts.value) opts.value = self.value
    })

    upd(e) {
      self.value = e.target.value
      self.tokens =  self.getTokens(self.value)
      self.trigger('update')
      return true
    }

    focus() {
     $('input', self.root).focus()
    }

    getTokens() {
      var tokens = self.value.split(self.delim)
      return self.trim ? tokens.map((x)=>x.trim()) : tokens
    }
  </script>

</delim_text>
