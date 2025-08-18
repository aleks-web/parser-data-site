document.addEventListener('DOMContentLoaded', () => {
   let accordions = document.querySelectorAll(".accordion");

   accordions.forEach(accord => {
      let title = accord.querySelector(".accordion__title");
      title.addEventListener('click', (title) => {
         toggleAccordion(accord);
      });



      function toggleAccordion(accord) {

         function getContentByAccordNode(node) {
            return node.querySelector(".accordion__content");
         }

         accordions.forEach((el, i, arr) => {

            if (accord !== el) {
               gsap.to(getContentByAccordNode(el), {
                  onStart: () => {
                    el.classList.remove('open');
                  },
                  height: 0,
               });
            }

            if (arr.length - 1 === i) {
               gsap.to(getContentByAccordNode(accord), {
                  onStart: () => {
                     accord.classList.add('open');
                  },
                  height: 'auto',
               });
            }
         });
      }
   });

});



document.addEventListener('DOMContentLoaded', () => {
   let menuOpenNode = document.querySelector('#open-menu');
   let menu = document.querySelector('#mobile-menu');

   menuOpenNode.addEventListener('click', (e) => {
      let height = menu.getBoundingClientRect().height;

      if (height) {
         gsap.to(menu, { height: 0 });
      } else {
         gsap.to(menu, { height: 'auto' });
      }
   });
});


document.addEventListener('DOMContentLoaded', () => {
   const block = document.querySelector('.what-data-collect');
   let splide = document.querySelector('.splide-collect');

   if (!!splide === false) {
      return;
   }

   const splideCollect = new Splide(splide, { type: 'fade', pagination: false, pauseOnHover: true, autoplay: true, interval: 2000 }).mount();

   splideCollect.on('moved', function (newIndex) {
      setActiveTab(newIndex);
   });

   block.addEventListener('mouseenter', function () {
      splideCollect.Components.Autoplay.pause();
   });

   block.addEventListener('mouseleave', function () {
      splideCollect.Components.Autoplay.play();
   });


   const tabs = document.querySelectorAll('.what-data-collect-tab');


   tabs.forEach(el => {
      el.addEventListener('click', (event) => {
         let tabId = parseInt(event.currentTarget.dataset.id);

         splideCollect.go(tabId);

         removeActiveClassTab();
         event.currentTarget.classList.add('active');
      })
   });

   function removeActiveClassTab() {
      tabs.forEach(el => {
         el.classList.remove('active');
      });
   }

   function getTabNodeByIndex(index) {
      return Array.from(tabs).filter(el => parseInt(el.dataset.id) === Number(index) )[0];
   }
   function setActiveTab(tabId) {
      const tab = getTabNodeByIndex(tabId);

      if (false === !!tab) {
         return false;
      }

      removeActiveClassTab();
      tab.classList.add('active');
   }

});


/*
    Кейсы
*/
document.addEventListener('DOMContentLoaded', () => {
    let splides = document.querySelectorAll('.splide-case');

    if (splides.length === 0) {
      return;
    }

    splides.forEach(el => {
      const splideCollect = new Splide(el, { type: 'fade', pagination: false }).mount();
    });
});


/*
* Checkbox group
* */
document.addEventListener('DOMContentLoaded', () => {
   const groupsCheckbox = document.querySelectorAll('.group-checkbox');

   if (groupsCheckbox.length === 0) {
      return;
   }

   groupsCheckbox.forEach(el => {

      el.querySelectorAll('.checkbox').forEach(check => {

         check.addEventListener('click', handleCheckboxClick.bind(el));

      });

   });

   function handleCheckboxClick (event) {
      const element = event.currentTarget;
      const checkboxInput = this.querySelector('.group-checkbox-input');

      let input = null;

      if (element.nodeName !== "INPUT") {
         input = element.querySelector('input');
      } else {
         input = element;
      }

      let allInputs = this.querySelectorAll('.checkbox input');

      for (let inp of allInputs) {
         inp.checked = false;
      }

      input.checked = true;
      checkboxInput.value = input.value;
   }

});


document.addEventListener('DOMContentLoaded', function () {
   Fancybox.bind('[data-fancybox]', {});
});


document.addEventListener('DOMContentLoaded', () => {
   const btnShowMoreArticles = document.querySelector('.article-show-more');

   if (false === !!btnShowMoreArticles) {
      return;
   }

   function getHiddenArticles() {
      return document.querySelectorAll('.article-hidden');
   }

   function showArticles() {

      if (getHiddenArticles().length === 0) {
         return;
      }

      const firstArticle = getHiddenArticles()[0];

      let i = 0;
      for (let el of getHiddenArticles()) {
         if (i < 6) {
            el.classList.remove('hidden');
            el.classList.remove('xl:hidden');
            el.classList.remove('article-hidden');

            gsap.to(el, {
               height: 'auto',
               opacity: 1
            });

            i++;
         }
      }

      window.scrollTo({ top: firstArticle.offsetTop, behavior: 'smooth' });

      if (getHiddenArticles().length === 0) {
         this.classList.add('hidden');
      }

   }

   btnShowMoreArticles.addEventListener('click', (e) => showArticles.bind(e.currentTarget)());
});




document.addEventListener('DOMContentLoaded', () => {
   const splide = document.querySelector('.splide-works');

   if (!!splide === false) {
      return;
   }

    const splideWork = new Splide(splide, {
        type: 'loop',
        pagination: false,
        pauseOnHover: true,
        autoplay: true,
        perPage: 2,
        gap: 20,
        breakpoints: {
            1023: {
                perPage: 1,
            },
        },
    });
    
    splideWork.mount();
});


document.addEventListener('DOMContentLoaded', () => {
   const splide = document.querySelector('.splide-screnrev');

   if (!!splide === false) {
      return;
   }

    const splideWork = new Splide(splide, {
        type: 'loop',
        pagination: false,
        pauseOnHover: true,
        autoplay: true,
        perPage: 2,
        gap: 20,
        breakpoints: {
            1023: {
                perPage: 1,
            },
        },
    });
    
    splideWork.mount();
});

document.addEventListener('DOMContentLoaded', () => {
   const splide = document.querySelector('.splide-map');

   if (!!splide === false) {
      return;
   }

    const splideWork = new Splide(splide, {
        pagination: false,
        pauseOnHover: true,
        autoplay: true,
        perPage: 4,
        gap: 20,
        breakpoints: {
            1536: {
                perPage: 3,
            },
            1023: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            }
        }
    });
    
    splideWork.mount();
});

/*
    tpl.work-item-slide and tpl.work-item
*/
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-screen-show]');
        
        if (btn) {
           let migx = JSON.parse(btn.dataset.migx).map(el => {
               return { src: '/template/images/' + el.image, opts: { caption: el.title } }
           });
           Fancybox.show(migx);
        }
    })
});