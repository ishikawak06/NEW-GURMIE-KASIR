<!-- REGISTRASI SERVICE WORKER UNTUK PWA -->
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Ubah '/sw.js' menjadi './sw.js' atau 'sw.js'
      navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
          console.log('Service Worker berhasil didaftarkan dengan scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker gagal didaftarkan:', error);
        });
    });
  }
</script>
