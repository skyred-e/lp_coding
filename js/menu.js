document.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.querySelector('.nav-btn');
  const navMenu = document.querySelector('.nav-menu');

  navBtn.addEventListener('click', () => {
    // クラスがあれば削除、なければ追加を自動で行う
    navBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });

  // ナビ内のリンクをクリックしたらメニューを閉じる
  const navLinks = navMenu.querySelectorAll('a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navBtn.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    });
  });
});