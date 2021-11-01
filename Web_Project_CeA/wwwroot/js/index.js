const form = document.querySelector('.form-auth');
const errorContainer = document.querySelector('.error-message');
const { imagem, nome, descricao, tamanho, estoque, fornecedor } = form.elements;
const formElements = [imagem, nome, descricao, tamanho, fornecedor];

function validateUrlImageInput() {
    const isValidUrlImage = imagem.value.includes('https://') && email.value.includes('.');
    const isUrlImageWithinLimit = imagem.value.trim().length >= 10 && imagem.value.trim().length <= 245;

    const span = imagem.nextElementSibling;
    span.innerText = "";

    if (!isValidUrlImage) {
        imagem.style.borderColor = "#c12137";
        span.innerText = "A URL da imagem deve ser válida"
        imagem.insertAdjacentElement('afterend', span);
        return false
    }

    if (!isUrlImageWithinLimit) {
        imagem.style.borderColor = "#c12137";
        span.innerText = "A URL da imagem deve conter entre 10 e 245 caracteres!"
        imagem.insertAdjacentElement('afterend', span);
        return false
    }

    imagem.style.borderColor = "#dfe4ef";

    return true
}

imagem.onblur = validateUrlImageInput;

function validateNameInput() {
    const isNameWithinLimit = nome.value.trim().length >= 10 && nome.value.trim().length <= 45;

    const span = nome.nextElementSibling;
    span.innerText = "";

    if (!isNameWithinLimit) {
        nome.style.borderColor = "#c12137";
        span.innerText = "O nome do produto deve conter entre 10 e 45 caracteres!"
        nome.insertAdjacentElement('afterend', span);
        return false
    }

    nome.style.borderColor = "#dfe4ef";

    return true
}

nome.onblur = validateNameInput;

function validateDescriptionInput() {
    const isDescriptionWithinLimit = descricao.value.trim().length >= 10 && descricao.value.trim().length <= 240;

    const span = nome.nextElementSibling;
    span.innerText = "";

    if (!isDescriptionWithinLimit) {
        nome.style.borderColor = "#c12137";
        span.innerText = "A descrição do produto deve conter entre 10 e 240 caracteres!"
        nome.insertAdjacentElement('afterend', span);
        return false
    }

    descricao.style.borderColor = "green";

    return true
}

descricao.onblur = validateDescriptionInput;