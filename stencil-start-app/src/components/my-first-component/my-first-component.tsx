import { Component, Prop, Listen } from '@stencil/core';


@Component({
    tag: 'my-first-component',
    styleUrl: 'my-first-component.css'
})
export class MyComponent{

    @Prop() name:string = "Craig";

    @Listen('click')
    onclick(){
        console.log("Ciaooooo");
        const elem = document.querySelector('my-first-method');
        elem.myMethod().then( e => {
            console.log("Ciao hai" + e + " anni");
        })

    }

    render(){
        return(            
            <p>
                My name is {this.name}
            </p>          
           
        );
    }
}