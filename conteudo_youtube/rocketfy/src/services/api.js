export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 01 de NodeJS',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 2,
            content: 'Atualizar Linkedin com novos estudos realizados',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abcdefghijkl.png'
          },
          {
            id: 3,
            content: 'Estudar desenvolvimento de APIs REST',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/edu.png'
          },
          {
            id: 4,
            content: 'Revisar conteúdo de aulas do Bootcamp',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abcdefghijkl.png'
          },
          {
            id: 5,
            content: 'Organizar repositório do Github',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/edu.png'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Pipefy',
            labels: [],
            user: 'https://api.adorable.io/avatars/285/abcdefghijkl.png'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Criação de site pessoal',
            labels: ['#7159c1'],
            user: 'https://api.adorable.io/avatars/285/abcdefghijkl.png'
          },
          {
            id: 8,
            content: 'Criação de logo pessoal',
            labels: ['#54e1f7'],
            user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
          },
          {
            id: 9,
            content: 'Organização lista de estudos',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Desafio 01 Bootcamp',
            labels: [],
          },
          {
            id: 12,
            content: 'Aula API REST com Express Bootcamp',
            labels: ['#54e1f7'],
          }
        ]
      },
    ];
  }