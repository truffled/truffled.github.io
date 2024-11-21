function showContributions(contributor) {
    const contributionDetails = document.getElementById('contribution-details');
    const contributionName = document.getElementById('contribution-name');
    const contributionText = document.getElementById('contribution-text');

    switch(contributor) {
        case 'echo':
            contributionName.textContent = 'Echo';
            contributionText.textContent = 'Games';
            break;
        case 'brunys':
            contributionName.textContent = 'Brunys';
            contributionText.textContent = 'Loading screen & Help with firebase & Games & Buttons';
            break;
        case 'szvy':
            contributionName.textContent = 'Szvy';
            contributionText.textContent = 'Images & Games';
            break;
        case 'reesadle':
            contributionName.textContent = 'Reesadle';
            contributionText.textContent = 'Games';
            break;
        default:
            contributionName.textContent = '';
            contributionText.textContent = '';
            break;
    }

    contributionDetails.style.display = contributionDetails.style.display === 'block' ? 'none' : 'block';
}
