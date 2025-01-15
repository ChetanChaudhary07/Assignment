document.getElementById('infoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const pronoun = document.querySelector('input[name="pronoun"]:checked').value;
  const contactEmail = document.getElementById('contactEmail').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const city = document.getElementById('city').value;
  const fileUpload = document.getElementById('fileUpload').files[0]?.name || 'No file';
  const bio = document.getElementById('bio').value;

  const row = `
      <tr>
          <td>${fullName}</td>
          <td>${pronoun}</td>
          <td>${contactEmail}</td>
          <td>${phoneNumber}</td>
          <td>${city}</td>
          <td>${fileUpload}</td>
          <td>${bio}</td>
      </tr>
  `;

  document.querySelector('#infoTable tbody').insertAdjacentHTML('beforeend', row);
  this.reset();
});

document.getElementById('downloadHTML').addEventListener('click', function() {
  const tableHTML = document.querySelector('#infoTable').outerHTML;
  const blob = new Blob([tableHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Form_Submissions.html';
  a.click();
});
