function getComents(idPost) {
	var urlComents = window.app.url + "/posts/" + idPost + "/comments";
	var xhr = ajax(urlComents);
	xhr.done(function() {
		var comentarios = JSON.parse(this.responseText);
		var ul = document.querySelector("#post-" + idPost + " .comentarios ");
		for (var i = 0; i < comentarios.length; i++) {
			ul.appendChild(drawElementComent(comentarios[i]));
		}
	});
}

function drawElementComent(comentario) {
	var div = document.createElement("div");

	var id = document.createElement("input");
	id.setAttribute("type", "hidden");
	id.setAttribute("class", "id");
	id.value = comentario.id;

	var nome = document.createElement("h4");
	nome.innerHTML = comentario.name;

	var conteudo = document.createElement("p");
	conteudo.setAttribute("class", "conteudo");
	conteudo.innerHTML = comentario.body;

	var email = document.createElement("span");
	email.innerHTML = comentario.email;

	div.appendChild(id);
	div.appendChild(nome);
	div.appendChild(conteudo);
	div.appendChild(email);

	return div;
}

function getPosts() {
	var urlPosts = window.app.url + "/posts";
	var xhr = ajax(urlPosts);
	xhr.done( function() {
		var posts = JSON.parse(this.responseText);
		var ul = document.querySelector(".posts .list");
		for (var i = 0; i < posts.length; i++) {
			ul.appendChild(drawElementPost(posts[i]));
		}
	});
}
function drawElementPost(post) {
	var li = document.createElement("li");
	li.setAttribute("id", "post-" + post.id);
	li.setAttribute("class", "post");

	var id = document.createElement("input");
	id.setAttribute("type", "hidden");
	id.setAttribute("class", "id");
	id.value = post.id;

	var userId = document.createElement("input");
	userId.setAttribute("type", "hidden");
	userId.setAttribute("class", "userId");
	userId.value = post.userId;

	var titulo = document.createElement("h2");
	titulo.innerHTML = post.title;

	var conteudo = document.createElement("p");
	conteudo.setAttribute("class", "conteudo");
	conteudo.innerHTML = post.body;

	var comentario = document.createElement("div");
	comentario.setAttribute("class", "comentarios");

	var carregarComentario = document.createElement("button");
	carregarComentario.setAttribute("class", "load");
	carregarComentario.innerHTML = "Carregar comentários";
	carregarComentario.onclick = function(event) {
		var elId = this.parentNode.parentNode.querySelector(".id");
		getComents(elId.value);
	};
	comentario.appendChild(carregarComentario);

	li.appendChild(id);
	li.appendChild(userId);
	li.appendChild(titulo);
	li.appendChild(conteudo);
	li.appendChild(comentario);

	return li;
}

function ajax(url, metod) {
	metod = metod || "GET";
	var xhr = new XMLHttpRequest();
	xhr.open(metod, url, true);
	xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
	xhr._erro = function() {
		console.warn(arguments);
	};
	xhr._sucesso = function() {
		console.log(arguments);
	};
	xhr.erro = function(error) {
		xhr._error = error;
		return xhr;
	};
	xhr.done = function(sucesso) {
		xhr._sucesso = sucesso;
		return xhr;
	};
	xhr.onload = function() {
		if (xhr.status <= 400 && xhr.readyState === 4) {
			xhr._sucesso.apply(xhr, arguments);
		} else {
			xhr._erro.apply(xhr, arguments);
		}
	};

	xhr.onerror = function() {
		xhr._erro.apply(xhr, arguments);
	};
	xhr.send();
	return xhr;
}

window.app = {
	url: "https://jsonplaceholder.typicode.com"
};
window.onload = function() {
	console.log("Hi ebrebody!");
	getPosts();
};
