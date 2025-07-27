const audio = new Audio('music.mp3');
const video = document.getElementById('video');
const content = document.getElementById('content');
const loading = document.getElementById('loading');

function showLoading(callback) {
  loading.style.display = 'block';
  setTimeout(() => {
    loading.style.display = 'none';
    callback();
  }, 1000);
}

function showCake() {
  showLoading(() => {
    content.innerHTML = `
      <h1>Tiup Lilin 🎂</h1>
      <img src="kueultah.png" alt="Kue Ulang Tahun"/>
      <p>maaf ya sayang ga gerak, susah nyari animasinya</p>
    `;
  });
}

function playMusic() {
  audio.play();
}

function showMessage() {
  showLoading(() => {
    content.innerHTML = `
      <h1>Ucapan Abang 🥰</h1>
      <p>Allo sayangnya abangg, cintanya abang. Hey baby, happy birthday ya sayang &lt;3. Hari ini tepat dimana 20 tahun yg lalu almh mama udah ngelahirin malaikat yg sungguh luar biasa didunia ini, yaapp, sekarang 03 Agustus 2025, 20 tahun sudah agnes ada di dunia yang penuh lika liku ini, didunia yang penuh drama ini, dan abang bangga, abang bangga karena agnes masih kuat dan bertahan sejauh ini, so proud of you bby &lt;3. Sayang, makasih ya, udah bertahan selama 20 tahun ini, makasih udah survive sejauh ini, abang tau itu ga mudah, sayang, makasih udah hadir dan menemani hidup abang, abang bersyukur ditemukan dengan wanita super duper sabar seperti sayang, abang janji kedepannya kita akan selalu merayakan tanggal 03 agustus ini bareng bareng yaa, makasih udah kuat ya sayang, makasih udah hadir, sayang itu seperti lagu "You are the reason". Adanya sayang didunia ini, datangnya sayang di kehidupan laki laki seperti abang ini, adalah alasan mengapa laki laki ini masih kuat sampai saat ini, you are the reason bby. I love you so muchh, now, tomorrow, and forever. Once again, happy birthday my future, Ruth Agnes Afinesdy Gerrits &lt;3</p>
    `;
  });
}

function showPhotos() {
  showLoading(() => {
    content.innerHTML = `
      <h1>Kenangan Kita 🖼️</h1>
      <img src="photo1.jpeg" /><br/><br/>
      <img src="photo2.jpeg" /><br/><br/>
      <img src="photo3.jpeg" /><br/><br/>
      <img src="photo4.jpeg" /><br/><br/>
      <img src="photo5.jpeg" />
    `;
  });
}

function showVideo() {
  showLoading(() => {
    audio.pause();
    audio.currentTime = 0;
    content.innerHTML = `
      <h1>Surprise Video 🎥</h1>
      <video id="video" src="video.mp4" controls autoplay></video>
    `;
  });
}
