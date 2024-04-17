$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXX-XXXX'
    })

    $('#cpf').mask('999.999.999-99', {
        placeholder: '999.999.999-99'
    })

    $("#cep").mask('99.999-999', {
        placeholder:'99.999-999'
    })

    $('form').validate({
        rules:{
            nomeCompleto:{
                required: true
            },
            email:{
                required: true
            },
            telefone: {
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nomeCompleto: 'por favor insira o nome completo',
            email: 'insira um e-mail válido',
            telefone: 'insira um telefone valido',
            cpf: 'insira um CPF válido',
            endereco:'Por favor, insira seu endereço',
            cep:'insira um CEP válido'
        },
        submitHandler: function(form) {
            e.preventDefault();
            
            const nomeCompleto = $('nome')
            const email = $('email')
            const telefone = $('telefone')
            const cpf = $('cpf')
            const endereco = $('endereco')
            const cep = $('cep')

            nomeCompleto.value='';
            email.value='';
            telefone.value='';
            cpf.value='';
            endereco.value='';
            cep.value='';
        },
        invalidHandler: function(evento, validador){
            let campoIncorretos = validador.numberOfInvalids();
            if (campoIncorretos) {
                alert(`Existem ${campoIncorretos} campos incorretos`)
            }
        }
    })
})