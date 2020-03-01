document.addEventListener('DOMContentLoaded', function() {
    var handler = document.getElementById('animate');
    handler.hidden = true;
    var button = document.getElementsByTagName('button').item(0);
    button.onclick = () => {
        var animation = bodymovin.loadAnimation({
            container: handler,
            renderer: 'svg',
            loop: 0.5,
            autoplay: true,
            path: 'data.json'
        });
        button.hidden = true;
        handler.hidden = false;
        animation.onComplete = () => {
            button.hidden = false;
            handler.hidden = true;
            animation.destroy();
        };
    };
}, false);