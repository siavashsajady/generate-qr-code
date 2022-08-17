const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGennerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') {
    alert('Please enter a url');
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 1000);
  }

  console.log(url, size);
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};

const clearUI = () => {
  qr.innerHTML = '';
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3 m-outo my-5';
  link.href = saveUrl;
  link.download = 'qrcode.png';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
};

hideSpinner();

form.addEventListener('submit', onGennerateSubmit);
