var audio = document.querySelector("#audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea, su tiempo de aparición y su duración en segundos
var lyricsData = [
  { text: "I love you baby and if it's quite all right", time: 17.5, duration: 4.5 },
  { text: "I need you baby to warm your lonely night", time: 22, duration: 4.5 },
  { text: "I love you baby trust in me when I say", time: 24, duration: 8.5 },
  { text: "Oh pretty baby don't bring me down I pray", time: 33, duration: 5 },
  { text: "Oh pretty baby come on and find you stay", time: 38, duration: 4 },
  { text: "And let me love you baby let me love you", time: 40, duration: 8.2 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // Mantén el tiempo exacto del audio
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Llama a `updateLyrics` más frecuentemente para mayor precisión
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Ejecuta ocultarTitulo después de 216 segundos (216000 ms)
setTimeout(ocultarTitulo, 216000);

// Verifica que el audio esté en loop y se reproduce correctamente
audio.loop = true;
audio.play(); // Asegúrate de que el audio se reproduzca al cargar
