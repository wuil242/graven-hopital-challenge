/**
 * 
 */
class Menu {

  constructor(selector, icon = null) {
    this.btn = document.getElementById(selector)
    this.menu = document.getElementById('_' + selector)
    this.icon = icon
    this.iconElements = icon != null ? Array.from(document.querySelectorAll('.' + icon.hidden)) : null

    if(this.icon != null) {      
       this.replaceIcon.apply(this)
    }
    
    this.bindEvent()
  }

  /**
   * 
   */
  bindEvent() {
    this.btn.addEventListener('change', this.btnEvent.bind(this))
  }

  /**
   * 
   */
  btnEvent() {
    if(this.btn.checked === true) {
      this.menu.style.display = 'none'
    }else {
      this.menu.style.display = 'block'
    }

    this.replaceIcon()
  }

  /**
   * 
   */
  replaceIcon() {
    if(this.icon == null) return
    this.iconElements.forEach(icon => {
      if(icon.classList.contains(this.icon.hidden)) {
        icon.classList.replace(this.icon.hidden, this.icon.visible)
      }
      else {
        icon.classList.replace(this.icon.visible, this.icon.hidden)
      }
    })
  }
}

const m1 = new Menu('drop')
const m2 = new Menu('drop-2', {visible: 'fa-angle-up', hidden: 'fa-angle-down'})

















































