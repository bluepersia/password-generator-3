

function genRandomChar (allChars)
{
    return allChars[Math.floor(Math.random() * allChars.length)];
}


function genPassword(config, letters, symbols, numbers)
{
    const allChars = [...letters];

    if(config.useSymbols)
    {
        allChars.push(...symbols);
    }

    if(config.useNumbers)
    {
        allChars.push(...numbers);
    }

    let password = '';

    for(let i = 0; i < config.length; i++)
    {
        password += genRandomChar (allChars);
    }

    return password;
}


export { genPassword }