function Pessoa(nome, sobreNome, idade) {
	// private
	var _this = this;
		this._nome = nome;
		this._sobreNome = sobreNome;
		this._idade = idade;

	return _this;
}

	 // Get/set 
Pessoa.prototype.nome = function(nome) { 
	if ("undefined" != nome) _nome = nome;  
	return this._nome; 
};

Pessoa.prototype.sobreNome = function(sobreNome) { 
	if ("undefined" != sobreNome) _sobreNome = sobreNome;  
	return this._sobreNome; 
};
Pessoa.prototype.idade = function(idade) { 
	if ("undefined" != idade) _idade = idade;  
	return this._idade; 
};

Pessoa.prototype.toString = function(){
	return this.nome()  +" " + this.sobreNome() 
		+"; " + this.idade() + ((this.idade()>1)?' anos':' ano' );
}
