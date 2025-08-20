// optional parameters "?"
function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`)
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more");

// optional fields
interface User {
    id: string;
    info?: {
        email?: string;
    }
}

function getEmail(user: User): string {
    if (user.info) {
        // add the ! if you know better than TS, that it would not be null
        return user.info.email!;
    }
    return "";
}

// same but easier
function getEmailEasy(user: User): string {
    // if user exists, give in info
    // if info exists, give email 
    return user?.info?.email ?? "";
}

// optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x,y]);
    /* old version
    if (callback) {
        callback();   
    }
    */
    callback?.();
}