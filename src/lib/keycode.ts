export const melodies = [[0,4,7,9],[7,4,2,0],[0,2,5,4],[4,7,11,9],[9,7,4,2],[2,5,9,7],[0,7,5,4],[11,7,9,4],[5,4,0,2],[2,4,9,7],[7,9,4,0],[4,2,7,5]];
export function puzzleFor(date:string){const day=Math.floor(Date.parse(date+'T00:00:00Z')/86400000);const base=melodies[((day%melodies.length)+melodies.length)%melodies.length];const shift=((Math.floor(day/melodies.length)%12)+12)%12;return base.map(n=>(n+shift)%12);}
export function score(guess:number[],target:number[]){return guess.map((n,i)=>n===target[i]?'exact':target.includes(n)?'present':'absent');}
