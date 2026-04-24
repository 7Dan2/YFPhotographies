// ==================== FORMULAIRE PRESTATIONS - MAILTO ====================

const form = document.getElementById('prestations-form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
        const messageField = form.querySelector('textarea').value.trim();
        const nom = form.querySelector('input[name="nom"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const telephone = form.querySelector('input[name="telephone"]').value.trim();

        if (checkboxes.length === 0) {
            alert("Veuillez sélectionner au moins une offre.");
            return;
        }

        // Construction du résumé
        let summary = `Bonjour,\n\n`;
        summary += `Je suis intéressé par les prestations suivantes :\n\n`;

        checkboxes.forEach(cb => {
            const label = cb.parentElement.textContent.trim();
            summary += `• ${label}\n`;
        });

        if (messageField) {
            summary += `\nPrécisions :\n${messageField}\n`;
        }

        summary += `\nNom : ${nom}`;
        if (telephone) summary += `\nTéléphone : ${telephone}`;
        summary += `\nEmail : ${email}`;

        // Construction du mailto
        const subject = encodeURIComponent("Demande de prestation photographique équestre");
        const body = encodeURIComponent(summary);

        const mailtoLink = `mailto:yfphotographies@gmail.com?subject=${subject}&body=${body}`;

        // Confirmation
        if (confirm("Voici le résumé de votre demande :\n\n" + summary + "\n\nVoulez-vous ouvrir votre client mail pour l'envoyer ?")) {
            window.location.href = mailtoLink;
            // Optionnel : reset du formulaire après ouverture
            setTimeout(() => form.reset(), 1000);
        }
    });
}