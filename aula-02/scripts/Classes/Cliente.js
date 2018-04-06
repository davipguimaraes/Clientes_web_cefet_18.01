function PessoaFisica(nome, sobreNome, idade, cpf){
	Pessoa.call(this,nome, sobreNome, idade);
	this._cpf = cpf;
	
	return this;
}

PessoaFisica.prototype = new Pessoa();
PessoaFisica.prototype.constructor = PessoaFisica;

PessoaFisica.prototype.cpf = function(cpf){
	if ("undefined" != cpf) this._cpf = cpf;  
	return this._cpf; 
}

PessoaFisica.prototype.toString = function(){
	return  this.nome()  +" " + this.sobreNome() 
		+"; " + this.idade() + ((this.idade()>1)?' anos':' ano' )
		+ '; documento numero ' + this.cpf();
} 