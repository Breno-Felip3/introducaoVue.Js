const detalhesProdutos = {
    template: ` 
        <p>{{produto.titulo}}</p>
        <img v-bind:src="produto.imagem" v-bind:alt="produto.titulo" style="max-width: 100px;">
        <strong v-if="produto.avaliacao > 0" >{{ produto.avaliacao}}</strong>
        
        <button
            @click.prevent="addCarrinho(produto)"
            v-bind:disabled="produtoNoCarrinho"

            :class="['color', {'button-disabled' : produtoNoCarrinho}]">

            Adicionar ao Carrinho
        </button>`,
    
    emits:['addProdutoCarrinho'],

    props: {
        produto:{
            type: Object,
            required: true,
        },
        produtoNoCarrinho:{
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            exemplo: 123,
        };
    },

    methods: {
        addCarrinho(produto){
           this.$emit('addProdutoCarrinho', produto)
        }
    },
}

app.component('detalhes-produtos', detalhesProdutos);


