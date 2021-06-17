alert('Silahkan isi Forum berikut ini.');
var nama=false;
while(nama===false){
    var isi=prompt('Nama :');
    nama=confirm('Apakah anda yakin?? ' + isi);
}
alert('Selamat datang di website kami ' + isi);