document.getElementById('url-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const url = document.getElementById('url-input').value;

    const response = await fetch('/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });

    const result = await response.json();
    const resultDiv = document.getElementById('result');

    if (response.ok) {
        resultDiv.textContent = `Shortened URL: http://localhost:3000/${result.shortId}`;
    } else {
        resultDiv.textContent = `Error: ${result.message}`;
    }
});
