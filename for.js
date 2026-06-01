const buscarBtn = document.getElementById('buscar');
const inputNome = document.getElementById('nome');



const contatos = [
    {
        nome: 'João Silva',
        telefone: '1234-5678',
        endereco: 'Rua A, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        email: 'joao.silva@email.com'
    },
    {
        nome: 'Maria Oliveira',
        telefone: '9876-5432',
        endereco: 'Avenida B, 456',
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        email: 'maria.oliveira@email.com'
    },
    {
        nome: 'Carlos Santos',
        telefone: '5555-1234',
        endereco: 'Praça C, 789',
        cidade: 'Belo Horizonte',
        estado: 'MG',
        email: 'carlos.santos@email.com'
    },
    {
        nome: 'Ana Costa',
        telefone: '4444-5678',
        endereco: 'Rua D, 321',
        cidade: 'Curitiba',
        estado: 'PR',
        email: 'ana.costa@email.com'
    },
    {
        nome: 'Pedro Almeida',
        telefone: '3333-9876',
        endereco: 'Avenida E, 654',
        cidade: 'Porto Alegre',
        estado: 'RS',
        email: 'pedro.almeida@email.com'
    },
    {
        nome: 'Luiza Ferreira',
        telefone: '2222-5555',
        endereco: 'Praça F, 987',
        cidade: 'Salvador',
        estado: 'BA',
        email: 'luiza.ferreira@email.com'
    },
    {
        nome: 'Rafael Gomes',
        telefone: '1111-4444',
        endereco: 'Rua G, 654',
        cidade: 'Fortaleza',
        estado: 'CE',
        email: 'rafael.gomes@email.com'
    },
    {
        nome: 'Carla Mendes',
        telefone: '6666-2222',
        endereco: 'Avenida H, 321',
        cidade: 'Recife',
        estado: 'PE',
        email: 'carla.mendes@email.com'
    },
    {
        nome: 'Bruno Rodrigues',
        telefone: '7777-3333',
        endereco: 'Praça I, 123',
        cidade: 'Manaus',
        estado: 'AM',
        email: 'bruno.rodrigues@email.com'
    }
];

function buscarContato() {
    for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].nome.toLowerCase() === inputNome.value.toLowerCase()) {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `
                <h2>Contato Encontrado:</h2>
                <p>Nome: ${contatos[i].nome}</p>
                <p>Telefone: ${contatos[i].telefone}</p>
                <p>Endereço: ${contatos[i].endereco}</p>
                <p>Cidade: ${contatos[i].cidade}</p>
                <p>Estado: ${contatos[i].estado}</p>
                <p>Email: ${contatos[i].email}</p>
            `;
            break;
            
        } else {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = 'Contato não encontrado.';
        }
    }
    inputNome.value = '';
}

buscarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    buscarContato();
});