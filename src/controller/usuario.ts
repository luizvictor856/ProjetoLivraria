
// tratamento de erros

function dividir (a:number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("não é posssivel dividir por zero")
        }
        return a / b;
    } catch (erro) {
        console.log ("Erro encontrado: ", (erro as Error).message);
        return 0;
    }
}