const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGennerateSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') {
    alert('Please enter a url');
    return;
  }

  console.log(url, size);
};

form.addEventListener('submit', onGennerateSubmit);
