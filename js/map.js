// === CHARGEMENT DE LA CARTE SVG ===
fetch('assets/images/svg/map-japon.svg')
  .then(response => response.text())
  .then(svgContent => {
    const mapWrapper = document.getElementById('map-wrapper');
    mapWrapper.innerHTML = svgContent;

    // Rendre les préfectures cliquables (basé sur leur id)
    const prefectures = mapWrapper.querySelectorAll('path, polygon, g');
    prefectures.forEach(pref => {
      const id = pref.id?.toLowerCase();
      if (id) {
        pref.addEventListener('click', () => {
          window.location.href = `prefectures/${id}.html`;
        });
      }
    });
  })
  .catch(err => console.error('Erreur de chargement de la carte :', err));
