const formularios = {
    template: `
        <form action="" method="post">
            <label>
            Nome:
                <input v-model="nome" type="text" name="nome">
                <div v-if="erros.nome">{{erros.nome}}</div>
            </label>

            <label>
                Sexo:
                <select name="" id="" v-model="sexo">
                    <option selected value="">Escolha</option>
                    <option value="M">Maculino</option>
                    <option value="F">Feminino</option>                   
                </select>
                <div v-if="erros.sexo">{{erros.sexo}}</div>
            </label>

            <label>
                Descrição:
                <textarea v-model="descricao" name="" id=""></textarea>
                <div v-if="erros.descricao">{{erros.descricao}}</div>
            </label>
        
            <label>
                <input v-model="agree" type="checkbox">
                Concordo
            </label>
            <button type="button" @click="enviarForm">Enviar</button>

        </form>
        `,

    data(){
        return{
            nome: 'Breno Felipe',
            sexo: 'M',
            descricao: 'Teste descrição',
            agree: true,

            erros:{
                nome: '',
                sexo: '',
                descricao: '',
                agree: true,
            }
        }
    },

    methods: {
        enviarForm(){
            this.resetaErros()

            if(this.nome === ""){
                this.erros.nome = 'Informe um valor'

                return
            }
            else if(this.sexo === ""){
                this.erros.sexo = 'Informe um valor'

                return
            }
            else if(this.descricao === ""){
                this.erros.descricao = 'Informe um valor'

                return
            }
            console.log(this.nome)
            console.log(this.sexo)
            console.log(this.descricao)
            console.log(this.agree)
        },

        resetaErros(){
            this.erros = {
                nome: '',
                sexo: '',
                descricao: '',
                agree: true,
            }

        }
    },
}

app.component('exemplo-formulario', formularios)