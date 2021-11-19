let greeting = (name) => {
    let greetingMessage = "Hello, "+name;
    console.log(name === "Alice"?greetingMessage:name==="Bob"?greetingMessage:"Hi")
}

greeting("TT");