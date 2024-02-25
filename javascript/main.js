document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;

        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerHTML;
        let judul = parent.querySelector('.card-text').innerHTML;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML:'<i>tidak ada informasi yang tersedia</i>';

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        document.querySelector('.modalTitle').innerHTML = judul;
        let image = document.createElement('img');
        image.src =gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        const nohp = '6283181270763';
        let pesan = `https://api.whatsapp.com/send?phone = ${nohp} &text=hallo kak, saya mau pesan produk ini ${gambar}`;

        document.querySelector('.btnBeli').href = pesan;

        document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir
        
            // Dapatkan nilai rating dan ulasan
            var rating = document.getElementById('rating').value;
            var review = document.getElementById('review').value;
        
            // Simulasi pengiriman data ke server (di sini Anda dapat mengganti dengan pengiriman data ke server yang sesungguhnya menggunakan AJAX)
            setTimeout(function() {
                console.log('Rating:', rating);
                console.log('Ulasan:', review);
                alert('Terima kasih atas rating dan ulasannya!');
                // Lakukan tindakan sesuai kebutuhan, misalnya menampilkan pesan sukses kepada pengguna
                // Atau muat ulang halaman jika diperlukan
                // window.location.reload();
            }, 1000); // Contoh penundaan 1 detik untuk simulasi pengiriman data
        });

    });
});