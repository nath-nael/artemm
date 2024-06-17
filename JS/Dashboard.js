document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const klikElements = document.querySelectorAll('.klik');
    const backButton = document.querySelector('.back');
    const loadMoreButton = document.querySelector('.load-more button');
    const templateSection = document.getElementById('template-section');
    const hiddenTemplates = document.querySelectorAll('.hidden');

    klikElements.forEach(element => {
        element.addEventListener('click', () => {
            overlay.style.visibility = 'visible';
            setTimeout(() => {
                overlay.style.visibility = 'hidden';
            }, 2000);
        });
    });

    backButton.addEventListener('click', () => {
        window.history.back();
    });

    loadMoreButton.addEventListener('click', () => {
        if (loadMoreButton.textContent === 'Load more') {
            hiddenTemplates.forEach(template => {
                template.classList.remove('hidden');
            });
            templateSection.style.maxHeight = '1000px';
            loadMoreButton.textContent = 'Show less';
        } else {
            hiddenTemplates.forEach(template => {
                template.classList.add('hidden');
            });
            templateSection.style.maxHeight = '600px';
            loadMoreButton.textContent = 'Load more';
        }
    });
});



