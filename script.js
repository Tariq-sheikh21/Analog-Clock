const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Create an Audio object for the ticking sound

const radius = 40; // Reduce radius to bring numbers inside
const numbers = document.querySelectorAll('.number');

numbers.forEach((num, index) => {
    const angle = (index - 3) * (Math.PI * 2) / 12; // Adjust to start at 12
    const x = 50 + radius * Math.cos(angle); // 50% centers the numbers
    const y = 50 + radius * Math.sin(angle);
    num.style.left = `${x}%`;
    num.style.top = `${y}%`;
});

setInterval(() => {
    const d = new Date();
    const hr = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();

    const hr_rotation = 30 * hr + min / 2;
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);
