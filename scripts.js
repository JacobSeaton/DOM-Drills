document.addEventListener('DOMContentLoaded', function() {


    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let h1 = document.createElement('h1');
    h1.className = 'h1';
    let h1Text = document.createTextNode('This is an h1');
    h1.appendChild(h1Text);
    div.appendChild(h1);
})