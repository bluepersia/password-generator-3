import { genPassword } from "./utils.js";

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


export default function PassGen (el)
{

    //--FIELDS--//
    const formEl = el.querySelector('[data-form]');
    const outputsEl = el.querySelector('[data-outputs]');


    //--CONSTRUCTION--//
    formEl.addEventListener('submit', handleSubmit);

    //--FUNCTIONS--//
    function handleSubmit (e)
    {
        e.preventDefault ();

        const formData = new FormData(e.target);

        const length = Number(formData.get('length'));
        const useSymbols = Boolean(formData.get("use-symbols"));
        const useNumbers = Boolean(formData.get('use-numbers'));

        const config = {
            length,
            useSymbols,
            useNumbers
        }

        const password1 = genPassword (config, characters, symbols, numbers);
        const password2 = genPassword (config, characters, symbols, numbers);

        renderOutputs([password1, password2]);
    }

    function renderOutputs (passwords)
    {
        outputsEl.innerHTML = passwords.map(password => `<p class="pass-gen__pass">${password}</p>`).join('\n');
    }
}