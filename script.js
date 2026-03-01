document.addEventListener('DOMContentLoaded', function() {
  const hash = window.location.hash;
  
  // Проверяем, есть ли якорь в URL (например, #bitlocker)
  if (hash) {
    // Проверяем, был ли переход с другой страницы (включая главную)
    const isComingFromAnotherPage = document.referrer && 
      !document.referrer.includes(window.location.pathname);

    // Если переход с другой страницы или главной — добавляем задержку
    if (isComingFromAnotherPage || document.referrer?.includes('index.html')) {
      console.log('Задержка перед скроллом к якорю...'); // Для отладки

      // Ждем 1.5 секунды, затем плавно скроллим
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    }
  }
});