document.addEventListener('DOMContentLoaded', () => {
    // 1. 観察対象をすべて見つける
    const targets = document.querySelectorAll('.anime');

    // 2. 実行する「動作」を決める
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // もし画面内に入ったら
        if (entry.isIntersecting) {
          // クラスを付与する
          entry.target.classList.add('is-active');
        }
      });
    }, {
      threshold: 0.2 // 要素の20%が見えたら実行
    });

    // 3. 観察を開始する
    targets.forEach(target => observer.observe(target));
  });