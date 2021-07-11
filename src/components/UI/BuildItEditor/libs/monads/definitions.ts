
interface Functor<A>{
    map<B>( transform: (value: A) => B) : Functor<B>; 
}

interface Monad<A>{
    bind<B>( transform: (value : A) => Monad<B>) : Monad<B>; 
}

const foo1 = (a : number)=> {
    return a*a; 
}

const foo2 = (a : number)=> {
    return a+1; 
}

export const test = ()=> {

    return 5; 
}