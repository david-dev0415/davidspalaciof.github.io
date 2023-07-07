
export default function observerScrollAnimated () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.animated')[0].classList.add('fadeIn');
        document.querySelectorAll('.animated')[1].classList.add('fadeInBottom');
        document.querySelectorAll('.animated')[2].classList.add('fadeInTopRight');        
      }
    });
  });

  observer.observe(document.querySelector('.event-us'));
}

// module.export = observerScrollAnimated;