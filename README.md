# Projeto de Página Simples em Angular

Página simples criada com componentes para denominar alguns itens e atributos.

É uma página com finalidade apenas de criação para teste, portanto os valores na tabela são fictícios.


# Conceitos exercidos na aplicação

Componente com atributos interdependentes
Injeção de Dependência
Eventos com Data Binding
Rotas e Ativação de Rotas
Consistência dos Templates


## Algumas Explicações de Interação da Aplicação

-A interface principal apresenta uma tabela com cursos feito com componentes na qual utilizei injeção de dependências para atribuirsuas características, tais como id, nome, preço, etc. nas quais estão apresentadas na pasta course.service.ts;

-Ainda na interface principal criei um input com filtro para os objetos criados, tal filtro que corresponde ao nome do objeto, no qual o funcionamento se encontra em CurseListComponent;

-O outro componente criado corresponde à um form de cada curso, podendo ser acessado no botão de "Edit", este form tem o formato padrão do curso, e pode ser alterado, mas tem atributos de obrigatoriedade de preenchimento para acesso do botão "Save";

-O botão "Save" salva temporariamente os alterações do input no form do CourseInfo, porém pode ser resetado com a atualização da página;

-Há também um componente chamado Error404, que consiste literalmente em uma página com a descrição de Error404, padrão de páginas web,  onde criei uma rota específica para quando houver algum erro, ou a página/rota não for encontrada;

-Adicionei algumas rotas em botão específicos, para encaminhar para componentes específicos, e coloquei uma rota "padrão" em 'courses' para levar à interface principal, caso não haja complemento na URL, será encaminhada para esta;


## Outros

Utilizei bootstrap para formato padrão da interface.

Utilizei também o font-awesome para ajudar na estilização, mais especificamente na estrelas de avaliação.
