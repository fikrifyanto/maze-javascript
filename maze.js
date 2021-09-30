function maze(s, startDoor = 'l')
{
    // True for right door false for left door on start
    let empty = ' ';
    let wall = '@';
    let leftOrRightDoor = startDoor == 'l' ? false : startDoor == 'r' ? true : false;
    for(let i = 1; i <= s; i++)
    {
        let at = '';
        for(e = 1; e <= s; e++)
        {
            if((i % 2) == 1) {
                if(leftOrRightDoor == true && e == s-1) {
                    // Open Right Door
                    at = at + empty;
                } else if(leftOrRightDoor == false && e == 2) {
                    // Open Left Door
                    at = at + empty;
                } else {
                    // Make A Wall
                    at = at + wall;
                }
            } else {
                if(e == 1 || e == s) {
                    at = at + wall;
                } else {
                    at = at + empty;
                }
            }
        }

        if((i % 2) == 1) {
            if(leftOrRightDoor) {
                leftOrRightDoor = false;
            } else {
                leftOrRightDoor = true;
            }
        }
        console.log(at);
    }
}

let s = process.argv.slice(2)[0];
let startDoor = process.argv.slice(2)[1];
if(!s) {
    console.log('Give an integer');
} else {
    maze(s, startDoor);
}
