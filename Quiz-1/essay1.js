// nomor 10
var pesertaLomba = [["Budi", "Pria", "172cm"], ["Susi", "Wanita", "162cm"], ["Lala", "Wanita", "155cm"], ["Agung", "Pria", "175cm"]];
var objectPesertaLomba = pesertaLomba.map(function(peserta) {
    return {
        nama: peserta[0],
        "jenis kelamin": peserta[1],
        tinggi: peserta[2]
    };
});

console.log(objectPesertaLomba);

// nomor 11
var daftarNama = [];
var inputNama;
var i = 1;

function tambahNama(nama, jenisKelamin) {
    inputNama = {};
    inputNama.nama = nama;
    inputNama.jenisKelamin = jenisKelamin;
    if(jenisKelamin == "Laki-laki") {
        inputNama.panggilan = "Bapak";
    } else {
        inputNama.panggilan = "Ibu";
    }
    daftarNama.push(inputNama);
}

tambahNama("Asep", "Laki-laki");
tambahNama("Siti", "Perempuan");
tambahNama("Yeni", "Perempuan");
tambahNama("Rudi", "Laki-laki");
tambahNama("Adit", "Laki-laki");

daftarNama.forEach(function(nama) {
    console.log(i + ". " + nama.panggilan + " " + nama.nama);
    i++;
});

// nomor 12
function luasLingkaran(jarijari) {
    return 22/7 * jarijari * jarijari;
}

function luasSegitiga(alas, tinggi) {
    return 1/2 * alas * tinggi;
}

function luasPersegi(sisi) {
    return sisi * sisi;
}

console.log(luasLingkaran(14));
console.log(luasSegitiga(14, 14));
console.log(luasPersegi(14));

// nomor 13
var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
daftarAlatTulis.sort();

var i = 0;
while(i < daftarAlatTulis.length) {
    console.log(daftarAlatTulis[i]);
    i++;
}

// nomor 14


// nomor 15