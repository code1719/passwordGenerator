function generatePassword() {
    const length = document.getElementById("length").value || 12;
    const lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "1234567890";
    const symbolCharset = "!@#$%^&*()_+{}[]|;:,.<>?";

    let charset = lowercaseCharset;

    if (document.getElementById("uppercase").checked) {
        charset += uppercaseCharset;
    }

    if (document.getElementById("numbers").checked) {
        charset += numberCharset;
    }

    if (document.getElementById("symbols").checked) {
        charset += symbolCharset;
    }

    let password = "";

    for (let i = 0; i < length; ++i) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value =password;

}