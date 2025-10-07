function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
}

window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(sec => {
    const id = sec.getAttribute('id');
    const navLink = document.querySelector(`#nav-links li a[href="#${id}"]`);
    if(!navLink) return;
    let top = window.scrollY;
    let offset = sec.offsetTop-80, height = sec.offsetHeight;
    if(top >= offset && top < offset + height){
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});
