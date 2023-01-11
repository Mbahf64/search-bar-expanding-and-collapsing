// const input = document.querySelector('input'),
//       btn = document.querySelector('.btn'),
//       parent = document.querySelector('.parent');

// btn.addEventListener("click", () => {//add the click function
//     parent.classList.toggle("active");
//     input.focus(); //put text cusor into <input>
// });

// var question = 'your name?'
// var defultAnswer = 'human'
// var spec = prompt(question, defultAnswer);


const input =  document.querySelector('input'),
      btn = document.querySelector('.btn'),
      parent = document.querySelector('.parent');

      btn.addEventListener('click', () => {
        parent.classList.toggle("active");
        input.focus();
      });