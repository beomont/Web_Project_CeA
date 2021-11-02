const form = document.querySelector('.form-auth');
const errorContainer = document.querySelector('.error-message');
const { imagem, nome, descricao, tamanho, estoque, fornecedor } = form.elements;


function validateUrlImageInput() {
    const isValidUrlImage = imagem.value.includes('https://') && imagem.value.includes('.');
    const isUrlImageWithinLimit = imagem.value.trim().length >= 10 && imagem.value.trim().length <= 300;

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

    imagem.style.borderColor = "green";

    return true
}

imagem.onblur = validateUrlImageInput;

function validateNameInput() {
    const isNameWithinLimit = nome.value.trim().length >= 3 && nome.value.trim().length <= 45;

    const span = nome.nextElementSibling;
    span.innerText = "";

    if (!isNameWithinLimit) {
        nome.style.borderColor = "#c12137";
        span.innerText = "O nome do produto deve conter entre 3 e 45 caracteres!"
        nome.insertAdjacentElement('afterend', span);
        return false
    }

    nome.style.borderColor = "green";

    return true
}

nome.onblur = validateNameInput;

function validateDescriptionInput() {
    const isDescriptionWithinLimit = descricao.value.trim().length >= 3 && descricao.value.trim().length <= 250;

    const span = descricao.nextElementSibling;
    span.innerText = "";

    if (!isDescriptionWithinLimit) {
        descricao.style.borderColor = "#c12137";
        span.innerText = "A descrição do produto deve conter entre 3 e 250 caracteres!"
        descricao.insertAdjacentElement('afterend', span);
        return false
    }

    descricao.style.borderColor = "green";

    return true
}

descricao.onblur = validateDescriptionInput;

function validateFornecedorInput() {
    const isFornecedorWithinLimit = fornecedor.value.trim().length >= 3 && fornecedor.value.trim().length <= 45;

    const span = fornecedor.nextElementSibling;
    span.innerText = "";

    if (!isFornecedorWithinLimit) {
        fornecedor.style.borderColor = "#c12137";
        span.innerText = "O campo fornecedor deve conter entre 3 e 45 caracteres!"
        fornecedor.insertAdjacentElement('afterend', span);
        return false
    }

    fornecedor.style.borderColor = "green";

    return true
}

fornecedor.onblur = validateFornecedorInput;

function validateStockInput() {
    const isStockWithinLimit = estoque.value.trim().length >= 1 && estoque.value.trim().length <= 45;

    const span = estoque.nextElementSibling;
    span.innerText = "";

    if (!isStockWithinLimit) {
        estoque.style.borderColor = "#c12137";
        span.innerText = "A quantidade do produto deve ser preenchida!"
        estoque.insertAdjacentElement('afterend', span);
        return false
    }

    estoque.style.borderColor = "green";

    return true
}

estoque.onblur = validateStockInput;

function validateSelect(input) {
    const isSelectEmpty = (input.options[input.selectedIndex].value == "");
    console.log(input.options[input.selectedIndex].value)
    const span = input.nextElementSibling;
    span.innerText = "";

    if (isSelectEmpty) {
        input.style.borderColor = "#c12137";
        span.innerText = "Selecione uma opção válida!"
        input.insertAdjacentElement('afterend', span);
        return false
    }

    input.style.borderColor = "green";

    return true
}
