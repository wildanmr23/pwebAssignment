document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const nim = document.getElementById('nim').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const kosAddress = document.getElementById('kosAddress').value;
    const religion = document.getElementById('religion').value;

    // Validasi sederhana
    if (!name || !nim || !address || !dob || !kosAddress || !religion) {
        alert("Semua field harus diisi!");
        return;
    }

    // Output
    const output = `
        <h3><center>Data Mahasiswa</center></h3>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>NIM :</strong> ${nim}</p>
        <p><strong>Agama :</strong> ${religion}</p>
        <p><strong>Alamat :</strong> ${address}</p>
        <p><strong>Tanggal Lahir :</strong> ${dob}</p>
        <p><strong>Alamat Kos :</strong> ${kosAddress}</p>
    `;

    document.getElementById('output').innerHTML = output;
});
