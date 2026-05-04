document.addEventListener('DOMContentLoaded', function () {
  var w = document.querySelector('.card-webinfo .webinfo')
  if (!w) return
  var d = document.createElement('div')
  d.className = 'webinfo-item'
  d.innerHTML = '<div class="item-name">本站总访问量 :</div><div class="item-count"><span id="finicount_views"><i class="fa-solid fa-spinner fa-spin"></i></span></div>'
  w.insertBefore(d, w.lastElementChild)
})
