
let name="Aki";
let language="Ember.js";
function introduction (name){
    return (`Hi, my name is ${name}.`);
}
function introductionWithLanguage (name, language= `Ember.js.`){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
name="Gracie";
language="JavaScript"
function introductionWithLanguageOptional(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
language="Python"
function introductionWithLanguageOptional(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}