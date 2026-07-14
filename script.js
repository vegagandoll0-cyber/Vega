const wrapper = document.querySelector(".envelope-wrapper");

const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const music = document.getElementById("bgMusic");

music.volume = 0.3;

openBtn.onclick = () => {

    wrapper.classList.add("open");

    music.play();

}

closeBtn.onclick = () => {

    wrapper.classList.remove("open");

    music.pause();

    music.currentTime = 0;

}