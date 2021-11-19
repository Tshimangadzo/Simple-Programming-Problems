let greeting = (name) => {
    let greetingMessage = "Hello, "+name;
    console.log(name === "Alice"?greetingMessage:name==="Bob"?greetingMessage:"Opps, I cannot greet you =)")
}

greeting("TT");