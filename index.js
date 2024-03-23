function receivesAFunction(property){
    property()
}

function returnsANamedFunction(){
    return function named(){
        console.log(welcome);
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('today is tuesday');
    }
}

