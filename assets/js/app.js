/**
 * CHRICE — app.js
 * Mission 2 : Gestion du menu mobile accessible
 *
 * - Ouverture / fermeture par clic sur le burger
 * - Fermeture via la touche Escape
 * - Fermeture au clic sur un lien du menu mobile
 * - Synchronisation des attributs ARIA (aria-expanded, aria-hidden)
 * - Pas de dépendances externes
 */

(function () {
  'use strict';

  // — Sélecteurs
  const burgerBtn  = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!burgerBtn || !mobileMenu) return; // Garde-fou

  // — État courant
  let isOpen = false;

  /**
   * Ouvre ou ferme le menu mobile.
   * @param {boolean} open
   * @param {boolean} [returnFocus=true] - Focalise le bouton burger à la fermeture
   */
  function setMenuState(open, returnFocus) {
    if (returnFocus === undefined) returnFocus = true;
    isOpen = open;

    burgerBtn.setAttribute('aria-expanded', String(open));
    burgerBtn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    mobileMenu.setAttribute('aria-hidden', String(!open));

    if (open) {
      mobileMenu.classList.add('is-open');
      // Mettre le focus sur le premier lien du menu
      const firstLink = mobileMenu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    } else {
      mobileMenu.classList.remove('is-open');
      // Retourner le focus sur le burger uniquement si demandé (ex: fermeture par Escape ou clic burger)
      if (returnFocus) {
        burgerBtn.focus();
      }
    }
  }

  // — Clic sur le burger
  burgerBtn.addEventListener('click', function () {
    setMenuState(!isOpen, true);
  });

  // — Touche Escape : ferme le menu et replace le focus sur le burger
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      setMenuState(false, true);
    }
  });

  // — Clic sur un lien du menu mobile : ferme le menu sans voler le focus de navigation
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setMenuState(false, false);
    });
  });

  // — Clic en dehors du menu : ferme le menu discrètement
  document.addEventListener('click', function (e) {
    if (isOpen && !mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      setMenuState(false, false);
    }
  });

})();
