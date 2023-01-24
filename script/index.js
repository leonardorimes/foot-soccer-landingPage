import { Router } from "./router.js"

const router = new Router();
router.add('/', "/main.html");
router.add('/about', "/about.html");
router.add('/videos', "/videos.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();


function createMap() {
    const map = new mapboxgl.Map({
     
    });
  }


    // window.addEventListener('DOMContentLoaded', () => {
    //     document.querySelector(".btn-about").addEventListener('click', () => {
    //       console.log('Load script from file');
    //       const script = document.createElement('script');
    //       script.src = ''
    //       script.id = 'mapboxgljs';
    //       script.src = './utilities.js'
    //       script.async = true;
    //       script.onload = function() {
    //         console.log('script loaded, you can use it now.');
    //         // createMap();
    //       }
    //       document.body.append(script);
          
    //     },{ once: true }); // Make sure that the button can only be pressed once.
    //   });

      window.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.btn-about').addEventListener('click', async() => {
          const module = await import('../utilities.js');
        //   console.log(`module is loaded: ${Object.keys(mapboxgl)}`);
        });
      });

  

