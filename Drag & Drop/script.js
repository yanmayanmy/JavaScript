jQuery(function ($) {

    let lists = $('ul.list-group li') //Selecting the elements  
    //element.on( event_name, selector, data, function )
    lists.on('dragstart', onDragStart)
    lists.on('dragover', onDragOver)
    lists.on('dragleave', onDragLeave)
    lists.on('drop', onDrop)

    $('form').submit(updateOrder)

    function onDragStart (e) {
      e.originalEvent.dataTransfer.setData('text', $(this).data('id'))
    }

    function onDragOver (e) {
      e.preventDefault()

      if ((e.offsetY) < ($(this).innerHeight() / 2)) {
        //マウスカーソルの位置が要素の半分より上
        $(this).css({
          'border-top': '2px solid blue',
          'border-bottom': '',
        })
      } else {
        //マウスカーソルの位置が要素の半分より下
        $(this).css({
          'border-top': '',
          'border-bottom': '2px solid blue',
        })
      }
    }

    function onDragLeave (e) {
      $(this).css({
        'border-top': '',
        'border-bottom': '',
      })
    }

    function onDrop (e) {
      e.preventDefault()
      let id = e.originalEvent.dataTransfer.getData('text')

      if ((e.offsetY) < ($(this).innerHeight() / 2)) {
        $('li[data-id=\'' + id + '\']').insertBefore(this)
      } else {
        $('li[data-id=\'' + id + '\']').insertAfter(this)
      }
      $(this).css({
        'border-top': '',
        'border-bottom': '',
      })

    }

    function updateOrder () {
      let listOrder = []
      $('ul.list-group li').each(function () {
        listOrder.push($(this).data('id'))
      })

      $('#list_order').val(listOrder.join(','))

      console.log($('#list_order').val())
    }

  })