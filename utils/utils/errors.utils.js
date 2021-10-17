module.exports.signUpErrors = (err) => {
    let errors = { pseudo: '', email: '', password: '' }
    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorect ou déjà pris";

    if (err.message.includes('email'))
        errors.email = "Email incorrect";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire plus que 6 carractère minimun";

    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Cette email est déjà enregistré";

    if (err.code == 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "Cette email est déjà enregistré";
    return errors;
}


module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' }

    if (err.message.includes("email"))
        errors.email = "Email inconnu";

    if (err.message.includes("password"))
        errors.password = "Le mot de passe ne correspond pas";
    return errors;

}

module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: "" };

    if (err.message.includes('invalid file'))
        errors.format = " Format incompatible";

    if (err.message.includes('max size'))
        errors.format = " Le fichier dépasse 500ko";
    return (errors);
};