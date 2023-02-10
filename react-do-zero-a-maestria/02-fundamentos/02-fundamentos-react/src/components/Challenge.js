const Challenge = () => {
    const numberA = 10; 
    const numberB = 20; 

    return (
        <div>
            <p>O primeiro número é {numberA}.</p>
            <p>O segundo número é {numberB}.</p>
            <button onClick = {() => console.log(numberA + numberB)}>Realize a soma!</button>
        </div>
    )
}

export default Challenge; 