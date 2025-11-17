import './style.css'

import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

// Composant pour faire face à la caméra
AFRAME.registerComponent('face-camera', {
  tick: function() {
    const camera = document.querySelector('[camera]');
    if (camera) {
      this.el.object3D.lookAt(camera.object3D.position);
    }
  }
});
