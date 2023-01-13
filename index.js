// Selected all inputs field
const inputs = document.querySelectorAll('.controls input'); // I have got a Node list.look like array but is not array
// console.log(inputs);
function updateCssVariablesWithJs (){
    // console.log('Hello css variables');
    // console.log(this.name); //It's give input name 
    // console.log(this.value); //It's give input value 
    const suffix = this.dataset.size || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);

}
inputs.forEach((input)=>input.addEventListener("change",updateCssVariablesWithJs));
