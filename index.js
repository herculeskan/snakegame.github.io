const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Mutable state 
let state = initialState()

//Position helpers

const x = c => Math.round(c * canvas.width /state.cols);
const y = Math.round(r * canvas.height / state.rows);

//game loop draw

const draw = () => {
    //clear
    ctx.fillStyle = '#232323';
    ctx.fillReact(0, 0, canvas.width, canvas.height);

    //dibuja la culebra
    ctx.fillStyle = 'rgb(0,200,50)'
    state.snake.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)));
  
   
}   