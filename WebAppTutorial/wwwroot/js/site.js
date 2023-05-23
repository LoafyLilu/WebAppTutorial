// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// for animated cursor //
document.onmousemove = animatedCircles;

const colors = ['#eb915e', '#eb5eeb', '#eb5e76'];

        function animatedCircles(event) {
            let circle = document.createElement('div');
            circle.setAttribute('class', 'circle');
            document.body.appendChild(circle);

            circle.style.left = event.clientX + 'px';
            circle.style.top = event.clientY + 'px';

            let color = colors[Math.floor(Math.random() * colors.length)];
            circle.style.borderColor = color;

            circle.style.transition = 'all 0.5s linear 0s';

            circle.style.left = circle.offsetLeft - 20 + 'px';
            circle.style.top = circle.offsetTop - 20 + 'px';

            circle.style.width = '50px';
            circle.style.height = '50px';
            circle.style.borderWidth = '5px';
            circle.style.opacity = 0;
        }