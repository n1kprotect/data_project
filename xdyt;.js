    document.oncopy = function(){
        var length = 188;
            var string = "abcdefghijklmnopqrstuvwxyz"; //to upper
            var numeric = '0123456789';
            var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
            var password = "";
            var character = "";
            var crunch = true;
            while( password.length<length ) {
                entity1 = Math.ceil(string.length * Math.random()*Math.random());
                entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
                entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
                hold = string.charAt( entity1 );
                hold = (entity1%2==0)?(hold.toUpperCase()):(hold);
                character += hold;
                character += numeric.charAt( entity2 );
                character += punctuation.charAt( entity3 );
                password = character;
            }
    var body = document.getElementsByTagName('body')[0];
    var selection = window.getSelection();
    var div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.left = '-99999px';
    body.appendChild(div);
    div.innerHTML =  password;
    selection.selectAllChildren(div);

    window.setTimeout(function(){
        body.removeChild(div);
    }, 0);}
