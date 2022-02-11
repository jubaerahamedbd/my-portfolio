export default class Animations {
    static animations = new Animations();

    faceInScreen = (screen_name) => {
        let screen = document.getElementById(screen_name)
        if (!screen_name || !screen) return;

        screen.style.opacity = "5";
        screen.style.transform = "translateY(1px)";
    }
}