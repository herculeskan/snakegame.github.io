const base = require ('./base')
Object.getOwnPropertyNames(base).map(p => global[p]);

//constantes

const NORTH = {x: 0, y: -1 };
const SOUTH = {x: 0, y: 1 };
const EAST = {x: 1, y: 0 };
const WEST = {x: -1, y: 0 };

//puntos de operación

const pointEq = p1 =>p2 =p1.x ==p2.x && p1.y == p2.y;

//booleanos

const willEat = state => pointEq(nextHead(state))(state.apple);
const willCrash = state => state.snake.find(pointEq(nextHead(state)));
const validMove = move => state =>
state.moves[0].x + move.x !=0 || state.moves[0].y + move.y !=0;

//valores Next basados en state

const nextMoves = state = state.moves.length > 1 ? dropFirst(state.moves) : state.moves