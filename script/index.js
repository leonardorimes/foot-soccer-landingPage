import { Router } from "./router.js"

const router = new Router();
router.add('/', "/main.html");
router.add('/about', "/about.html");
router.add('/videos', "/videos.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();