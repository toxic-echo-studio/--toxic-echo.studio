(function () {
    'use strict';

    // Automatyczne otwieranie sekcji manifest-footer przy nawigacji przez hash.
    function openManifestIfTargeted() {
        if (window.location.hash !== '#manifest-footer') {
            return;
        }
        var manifest = document.getElementById('manifest-footer');
        if (manifest) {
            manifest.open = true;
        }
    }

    function bindManifestLinks() {
        var links = document.querySelectorAll('a[href="#manifest-footer"]');
        for (var i = 0; i < links.length; i += 1) {
            links[i].addEventListener('click', function () {
                var manifest = document.getElementById('manifest-footer');
                if (manifest) {
                    manifest.open = true;
                }
            });
        }
    }

    window.addEventListener('hashchange', openManifestIfTargeted);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            bindManifestLinks();
            openManifestIfTargeted();
        });
    } else {
        bindManifestLinks();
        openManifestIfTargeted();
    }
}());
