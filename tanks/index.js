import World from './src/world'
import View from './src/view'
import Game from './src/game'
import levels from './data/levels'

const canvas = document.querySelector('canvas')

new Game({
    world: new World(),
    view: new View(canvas),
    levels,
})