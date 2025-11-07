const copyCodeLatex = document.querySelectorAll('.copy');
const codeLatex = document.querySelectorAll('.tex2jax_ignore');
const textCopied = document.querySelector('.msg-copied-text');
const boxTextCopied = document.querySelector('.msg-copied');
const ltxImg = document.querySelectorAll('.ltx-img');
 console.log(codeLatex.length);

for (let i = 0; i < ltxImg.length; i++) {
     copyCodeLatex[i].addEventListener('click', () => {
          const latexContent = codeLatex[i].textContent;
          const symboleLtx = ltxImg[i].textContent;
          navigator.clipboard.writeText(latexContent).then(() => {
               textCopied.textContent = `Le code de "${symboleLtx}" est copiée`;
               boxTextCopied.style.opacity = '0.8';
               setTimeout(() => {
                    boxTextCopied.style.opacity = '0';
               }, 2000);

          }).catch(err => {
               console.error('Failed to copy text: ', err);
          });
     });
     ltxImg[i].addEventListener('click', () => {
          const latexContent = codeLatex[i].textContent;

          navigator.clipboard.writeText(latexContent).then(() => {
               textCopied.textContent = "Le code est copiée";
               boxTextCopied.style.opacity = '0.8';
               setTimeout(() => {
                    boxTextCopied.style.opacity = '0';
               }, 2000);

          }).catch(err => {
               console.error('Failed to copy text: ', err);
          });
     });
}