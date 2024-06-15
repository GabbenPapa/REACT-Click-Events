
function Button() {
    // let count = 0;

    // const handleClick = (name) => {
    //     if ( count < 3 ) {
    //         count++;
    //         console.log( `${name} you clicked me ${count} times` );
    //     }
    //     else {
    //         console.log(`${name} just stop it!`)
    //     }
    // }

    // return (<button onClick={() => handleClick("G")}>Click Me</button>);

    const handleClick = (e) => e.target.textContent = "Jajj!";

    return (<button onClick={(e) => handleClick(e)}>Click Me</button>);
}

export default Button