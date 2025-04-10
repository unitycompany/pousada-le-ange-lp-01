// Funcionalidade do click no botão
document.getElementById('clickToForm').addEventListener('click', goForm);
document.getElementById('clickToOfert').addEventListener('click', goOfert);

function goForm() {
    const sectionForm = document.getElementById('oferta');
    if (sectionForm) {
        sectionForm.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Não encontramos a seção 'oferta' no seu site");
    }
};

function goOfert() {
    const sectionForm = document.getElementById('oferta');
    if (sectionForm) {
        sectionForm.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Não encontramos a seção 'oferta' no seu site");
    }
}