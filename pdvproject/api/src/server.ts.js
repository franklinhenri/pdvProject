import Fastify from 'fastify'

async function start(){
    const fastify = Fastify({
        logger:true,
    })

    fastify.get('/',()=>{
        return{Teste:3242}
    })

    await fastify.listen({
        port:3333
    })
}
start()