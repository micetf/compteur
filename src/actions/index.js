import compteurs from "../compteurs";
export const getHash = () => {
    const [
        ,
        hashChoix = "milliers",
        hashNombre = 0,
    ] = document.location.hash.match(
        /^(?:#(milliards|millions|milliers|unites|decimaux))?(?:=([0-9]*(?:[\.,][0-9]{1,3})?))?/
    );

    const selectedCount = compteurs.byId[hashChoix];
    const nombre =
        hashNombre !== 0 ? hashNombre.toString().replace(",", ".") : 0;

    document.location.hash = `#${hashChoix}`;
    return {
        choix: hashChoix,
        nombre: nombre < selectedCount.max ? nombre : 0,
    };
};

const incrementCompteur = (compteur, coef) => {
    const next = Math.round(compteur.nombre * 1000 + Math.pow(10, coef + 3));
    return {
        ...compteur,
        nombre:
            next < compteurs.byId[compteur.choix].max * 1000
                ? next / 1000
                : compteur.nombre,
    };
};
const decrementCompteur = (compteur, coef) => {
    const prev = Math.round(compteur.nombre * 1000 - Math.pow(10, coef + 3));
    return {
        ...compteur,
        nombre: prev >= 0 ? prev / 1000 : compteur.nombre,
    };
};

const changeChoix = (choix) => {
    document.location.hash = `#${choix}`;
    return {
        choix: choix,
        nombre: 0,
    };
};

export const updateCompteur = (compteur, { type, payload }) => {
    switch (type) {
        case "CHANGE_CHOIX":
            return changeChoix(payload);
        case "INCREMENT":
            return incrementCompteur(compteur, payload);
        case "DECREMENT":
            return decrementCompteur(compteur, payload);
        default:
            return compteur;
    }
};
