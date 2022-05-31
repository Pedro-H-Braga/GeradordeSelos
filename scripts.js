const form = document.getElementById("form");
const nomecompleto = document.getElementById("nomecompleto");
const email = document.getElementById("email");
const ncnh = document.getElementById("ncnh");
const catcnh = document.getElementById("catcnh");
const cpfoucnpj = document.getElementById("cpfoucnpj");
const validade = document.getElementById("validade");
const chassi = document.getElementById("chassi");
const placa = document.getElementById("placa");
const modelo = document.getElementById("modelo");
const cor = document.getElementById("cor");
const fabricacao = document.getElementById("fabricacao");
const ipva = document.getElementById("ipva");
const ranavam = document.getElementById("ranavam");
//const copia = document.getElementById("copia");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomecompletoValue = nomecompleto.value;
  const emailValue = email.value;
  const ncnhValue = ncnh.value;
  const catcnhValue = catcnh.value;
  const cpfoucnpjValue = cpfoucnpj.value;
  const validadeValue = validade.value;
  const chassiValue = chassi.value;
  const placaValue = placa.value;
  const modeloValue = modelo.value;
  const corValue = cor.value;
  const fabricacaoValue = fabricacao.value;
  const ipvaValue = ipva.value;
  const renavamValue = renavam.value;
  //const copiaValue = copia.value;


  if (nomecompletoValue === "") {
    setErrorFor(nomecompleto, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(nomecompleto);
  }

  if (emailValue === "") {
    setErrorFor(email, "O preenchimento deste campo é obrigatório!");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (ncnhValue === "") {
    setErrorFor(ncnh, "O preenchimento deste campo é obrigatório!");
  } else if (ncnhValue.length > 7) {
    setErrorFor(ncnh, "O Nº da CNH precisa deve ser válido.");
  } else {
    setSuccessFor(ncnh);
  }

  if (catcnhValue === "") {
    setErrorFor(catcnh, "O preenchimento deste campo é obrigatório!");
  } else if (catcnhValue !== catcnhValue) {
    setErrorFor(catcnh, "A categoria é invalida");
  } else {
    setSuccessFor(catcnh);
  }

  if (cpfoucnpjValue === "") {
    setErrorFor(cpfoucnpj, "O preenchimento deste campo é obrigatório!");
  } else if (cpfoucnpjValue!==cpfoucnpjValue) {
    setErrorFor(cpfoucnpj, "O CPF ou CNPJ é obrigatório.");
  } else {
    setSuccessFor(cpfoucnpj);
  }

  if (validadeValue === "") {
    setErrorFor(validade, "O preenchimento deste campo é obrigatório!");
  } else if (validadeValue.length < 7) {
    setErrorFor(validade, "A validade é obrigatória.");
  } else {
    setSuccessFor(validade);
  }

  if (chassiValue === "") {
    setErrorFor(chassi, "O preenchimento deste campo é obrigatório!");
  } else if (chassiValue !== chassiValue) {
    setErrorFor(chassi, "O CHASSIU não confere.");
  } else {
    setSuccessFor(chassi);
  }
  
  if (placaValue === "") {
    setErrorFor(placa, "O preenchimento deste campo é obrigatório!");
  } else if (placaValue !== placaValue) {
    setErrorFor(placa, "Por favor, insira uma placa válida.");
  } else {
    setSuccessFor(placa);
  }

  if (modeloValue === "") {
    setErrorFor(modelo, "O preenchimento deste campo é obrigatório!");
  } else if (modeloValue.length < 7) {
    setErrorFor(modelo, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(modelo);
  }

  if (corValue === "") {
    setErrorFor(cor, "O preenchimento deste campo é obrigatório!");
  } else if (corValue !== corValue) {
    setErrorFor(cor, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(cor);
  }
  
  if (fabricacaoValue === "") {
    setErrorFor(fabricacao, "O preenchimento deste campo é obrigatório!");
  } else if (fabricacaoValue!==fabricacaoValue) {
    setErrorFor(fabricacao, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(fabricacao);
  }

  if (ipvaValue === "") {
    setErrorFor(ipva, "O preenchimento deste campo é obrigatório!");
  } else if (ipvaValue.length > 7) {
    setErrorFor(ipva, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(ipva);
  }

  if (renavamValue === "") {
    setErrorFor(renavam, "O preenchimento deste campo é obrigatório!");
  } else if (renavamValue !== renavamValue) {
    setErrorFor(renavam, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(renavam);
  }

  /*if (copiaValue === "") {
    setErrorFor(copia, "O preenchimento deste campo é obrigatório!");
  } else if (copiaValue !== copiaValue) {
    setErrorFor(copia, "O preenchimento deste campo é obrigatório!");
  } else {
    setSuccessFor(copia);
  }*/



  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener("click", () => {
        let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
        console.log(setSuccessFor);
    });
});
qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});

