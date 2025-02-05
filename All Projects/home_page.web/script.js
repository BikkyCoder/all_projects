// Add smooth scrolling to all links
// const image = document.querySelector('back_image')
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

// //   Parallax effect for hero image
//   window.addEventListener('scroll', () => {
//     const hero = document.getElementById('hero');
//     let scroll = window.pageYOffset;
//     hero.style.backgroundImage = `${image}`;
//   });
