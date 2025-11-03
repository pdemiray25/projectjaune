document.addEventListener('DOMContentLoaded', () => {

  const submitBtn = document.getElementById('submitBtn');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const closeModal = document.getElementById('closeModal');

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;

    modalMessage.textContent = `Bonjour ${firstname} ${name}, né(e) le ${birthdate} !`;

    modal.style.display = 'flex';

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', restoreFormAndModal);

    function restoreFormAndModal() {
      document.getElementById('myForm').reset();
      modal.style.display = 'none';
    }
  });

});
