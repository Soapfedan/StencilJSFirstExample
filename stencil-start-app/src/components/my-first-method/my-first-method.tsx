import { Component, Method } from '@stencil/core';


@Component({
    tag: 'my-first-method',
    styleUrl: 'my-first-method.css'
})
export class MyFirstMethod{

    @Method()
    myMethod(){
        return Promise.resolve(42);
    }

    render(){

        return (
            <p>
                Ciaoo sono ioooo
            </p>
        );
        
    }
}