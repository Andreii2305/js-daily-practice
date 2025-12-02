function multipicationTable(num, multiplyBy) {
    let output = "";
    for(let i = 1; i <= multiplyBy; i++){
        let res = num * i;
        output += num + " * " + i + ": " + res + "\n";
    }
    return output;
}

console.log(multipicationTable(5,10));