const canvas = document.getElementById("animation-box");
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 300;

//モエヤキオカ7ケサスz152ヨタワ4ネヌナ98ヒ0ホア3ウセ¦:꞊ミラリ╌ツテニハソ—<>0|+*コシマムメ

let letters = "モエヤキオカ7ケサスz152ヨタワ4ネヌナ98ヒ0ホア3ウセ¦:꞊ミラリ╌ツテニハソ—<>0|+*コシマムメ";
letters = letters.split("");

let columnWidth = 25;
let columns = canvas.width / 25;
let trails = [];
for (let i = 0; i < columns; i++) {
    trails[i] = 1;
}

function draw() {
    //makes trail fade
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < columns; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];

        //constant text settings
        ctx.textAlign = "center";
        ctx.font = "25px Matrix";

        ctx.clearRect((i * 25) - 12.5, (trails[i] * 25) - 20, 25, 25);
        ctx.fillStyle = "#00FF41";
        ctx.fillText(text, i * 25, trails[i] * 25);

        trails[i]++;

        //&& Math.random() > 0.95
        //random spawns at when trails reaches bottom of page
        if (trails[i] * columnWidth > canvas.height && Math.random() > 0.95) {
            let text2 = letters[Math.floor(Math.random() * letters.length)];
            let text3 = letters[Math.floor(Math.random() * letters.length)];

            //random indices
            randomIndX = Math.floor(Math.random() * columns);
            randomIndX2 = Math.floor(Math.random() * columns);
            while (randomIndX2 == randomIndX) {
                randomIndX2 = Math.floor(Math.random() * columns);
            }
            randomIndY = Math.floor(Math.random() * columns);
            randomIndY2 = Math.floor(Math.random() * columns);
            while (randomIndY2 == randomIndY) {
                randomIndY2 = Math.floor(Math.random() * columns);
            }

            // first random cluster
            ctx.clearRect(((randomIndX * 25) - 12.5), ((trails[randomIndX]-randomIndY) * 25) - 20, 25, 25);
            ctx.fillStyle = "#00FF41";
            ctx.fillText(text2, randomIndX * 25, (trails[randomIndX]-randomIndY) * 25);

            //second random cluster
            ctx.clearRect(((randomIndX2 * 25) - 12.5), ((trails[randomIndX2]-randomIndY2) * 25) - 20, 25, 25);
            ctx.fillStyle = "#00FF41";
            ctx.fillText(text3, randomIndX2 * 25, (trails[randomIndX2]-randomIndY2) * 25);

            // reset y coordinates back to 0 (top of page)
            trails[i] = 0;
        }
    }
};

setInterval(draw, 33);