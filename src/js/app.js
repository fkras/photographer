require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/


$(document).ready(() => {
  $('.mobile-menu').on('click touch', () => {
    $('body').toggleClass('mobile-open')
  })
  $('#mobile-backdrop').on('click touch', () => {
    $('body').removeClass('mobile-open')
  })
})





$(window).on('load', () => {
  const $grid = $('.grid');
  $grid.isotope({
    // options
    itemSelector: '.grid-item',
  })

  $('.filter-button-group button').on('click touch', (event) => {
    $('.filter-button-group button').removeClass('active')
    const activeItem = $(event.target)
    activeItem.addClass('active')
    const attribute = activeItem.data()
    console.log(attribute)
    $grid.isotope({ filter: attribute.filter });
  })
  $('#loadmore').on('click touch', () => {
    const theSource = 'https://picsum.photos/id/110/300/300'
    const elem = `<div class="grid-item"><img src="${theSource}"/></div>`
    $grid.isotope('appended', elem)
  })
  $("input#searchi").keydown(function () {
    const value = $('input#searchi').val()

    $grid.isotope({
      filter: function () {
        var alt = $(this).find('img').attr('alt');
        if (value.length === 0) {
          return true
        }
        if (!alt) {
          return false
        }
        return alt.includes(value);
      }
    })
  });
})

$(document).ready(function () {
  const options = {
    loop: true,
    items: 2,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  }
  console.log(options)
  $('.owl-carousel').owlCarousel(options)
});

// ()=>{} ==== function(){}

const student = {
  name: 'Okaj',
  age: 20,
  city: 'little italy',
  friends:[
    {
      name:'denisi',
      age:123
    },
    {
      name:'meritoni',
    
    }
    ]
}

console.log(student)

