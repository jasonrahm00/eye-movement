const balls = document.getElementsByClassName('ball')

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%'
  const y = (event.clientY * 100) / window.innerHeight + '%'

  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i]

    ball.style.left = x
    ball.style.top = y
    ball.transform = 'translate(-' + x + ',-' + y + ')'
    ball.style.left = x
    ball.style.top = y
    ball.transform = 'translate(-' + x + ',-' + y + ')'
  }
}
