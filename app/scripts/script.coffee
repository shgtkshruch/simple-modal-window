btn = document.querySelectorAll 'button'
msg = document.querySelector '.message'

toggleClass = ->
  msg.classList.toggle 'on'

b.addEventListener 'click', toggleClass for b in btn

