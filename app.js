const myApp = {
    data() {
        return {
            titulo: 'Curso de Vue 3',
            nome: 'Breno',
            sobrenome: 'Felipe',
            produtos: [
                {
                    id: 1,
                    titulo: 'Teste',
                    descricao: 'Teste Imagem Vue',
                    imagem: '/assets/imagens/png-transparent-vue-js-hd-logo-thumbnail.png',
                    avaliacao: 10
                },
                {
                    id: 2,
                    titulo: 'Vue',
                    descricao: 'Teste Imagem Vue',
                    imagem: '/assets/imagens/png-transparent-vue-js-hd-logo-thumbnail.png',
                    avaliacao: 2
                }
            ],
            
            carrinho: [],

            styles: {
                color: 'white',
                backgroundColor: 'black',
            },
            temaBlack: true
        }
    },
    computed: {
        nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        }
    },
    methods: {
        addCarrinho(produto) {
            this.carrinho.push(produto)
            console.log(this.carrinho);
        },
        produtoNoCarrinho (produto) {
            return this.carrinho.indexOf(produto) != -1
        },
        // removeCarrinho(produtoCarrinho) {
        //     const novoCarrinho = this.carrinho.filter((produto) => {
        //         return produto != produtoCarrinho
        //     });
        //     this.carrinho = novoCarrinho
        // },
        mudarTema() {
            this.temaBlack = !this.temaBlack
            if (this.temaBlack) {
                this.styles = {
                    color: 'white',
                    backgroundColor: 'black',
                }
            } else {
                this.styles = {
                    color: 'black',
                    backgroundColor: 'white',
                }
            }
        }
    }
}

const app = Vue.createApp(myApp)

