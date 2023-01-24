interface IOperando{
  getResult(): number
}

class VVariable implements IOperando{
  valor: number;

  constructor(valor: number){
    this.valor = valor;
  }

  getResult(): number{
    return this.valor
  }
}

abstract class OOperador implements IOperando{
  operandos: IOperando[] = new Array();
  
  add(operando: IOperando): void{
    this.operandos.push(operando);
  }

  abstract getResult(): number;
}

class SSuma extends OOperador{
  getResult(): number{
    let cont = 0;
    this.operandos.forEach(element => {
      cont += element.getResult();
      console.log('Suma',cont)
    });
    console.log('Suma',cont)
    return cont;
  }
  
}

class RResta extends OOperador{
  getResult(): number{
    let cont = 0;
    this.operandos.forEach(element => {
      cont -= element.getResult();
      console.log('Resta',cont)
    });
    
    return cont;
  }
  
}


function main(): void{
  const variable1 = new VVariable(5);
  const variable2 = new VVariable(6);
  const variable3 = new VVariable(7);

  

  const resta1 = new RResta(); 

  resta1.add(variable2);
  resta1.add(variable1);

  const suma1 = new SSuma();

   

  suma1.add(variable1);
  suma1.add(variable2);
  suma1.add(variable3);

  suma1.add(resta1); 

  console.log(suma1.getResult()); 
  

  
}

main();
