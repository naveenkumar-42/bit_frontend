window.addEventListener('scroll', handleScroll);

    function handleScroll() {
      document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    }

  


    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.faq__icon i');
        icon.classList.toggle('uil-minus');
        icon.classList.toggle('uil-plus');
      });
    });





    const menu = document.querySelector('.nav__menu');
    const menuBtn = document.querySelector('#open-menu-btn');
    const closeBtn = document.querySelector('#close-menu-btn');

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    function openMenu() {
      menu.style.display = 'flex';
      closeBtn.style.display = 'inline-block';
      menuBtn.style.display = 'none';
    }

    function closeMenu() {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    }


    function copyEmail(elementId) {
        const copyText = document.getElementById(elementId);
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = copyText.textContent;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(tempTextarea);
        alert("Email copied to clipboard!");
      }

     

    $(document).ready(function() {
        $('#search-button').click(function() {
            var searchText = $('#course-search').val().toLowerCase();
            $('.course').each(function() {
                var courseTitle = $(this).find('h4').text().toLowerCase();
                if (courseTitle.includes(searchText)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });


    $(document).ready(function() {
      $('#search_button').click(function() {
        var searchText = $('#name-search').val().toLowerCase();
        $('.team__member').each(function() {
          var memberName = $(this).find('h4').text().toLowerCase();
          var memberInfo = $(this).find('p').text().toLowerCase();
          if (memberName.includes(searchText) || memberInfo.includes(searchText)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
    });
    

   
    

