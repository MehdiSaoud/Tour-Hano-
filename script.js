let memo;
let uls = document.querySelectorAll('.hanoi ul');
console.log(uls);
for (let i = 0; i < uls.length; i++) {   
    uls[i].addEventListener('click', function(event) {
    let ul = event.currentTarget;
    let firstChild = ul.querySelector('li');
    if (memo) {
      if (firstChild && firstChild.dataset.weight < memo.dataset.weight) {
        return;
      }
      ul.prepend(memo);
        memo = undefined;
     } 
     else {
      memo = firstChild;
     }
     if (ul.classList.contains('tower-target') && ul.querySelectorAll('li').length === 6) {
      ul.classList.add('success');
     }
  });
}