document.getElementById('submitName').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('greetingMessage').innerText = `Selamat datang, ${username}! Semoga Anda menikmati portofolio saya.`;
        document.getElementById('greetingMessage').style.display = 'block';
        document.getElementById('namePrompt').style.display = 'none';
        document.querySelector('header').style.display = 'block';
        document.querySelector('.theme-picker').style.display = 'block';
        document.querySelector('#about').style.display = 'block';
        document.querySelector('#projects').style.display = 'block';
        document.querySelector('#contact').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    } else {
        alert('Silakan masukkan nama Anda!');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan Anda telah dikirim!');
});

document.getElementById('theme-select').addEventListener('change', function() {
    document.body.className = this.value;
});

// Fungsi untuk memperbarui tanggal dan waktu
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID');
    document.getElementById('datetime').innerText = `${date} | ${time}`;
}

// Memperbarui tanggal dan waktu setiap detik
setInterval(updateDateTime, 1000);
updateDateTime(); // Panggil sekali untuk inisialisasi
