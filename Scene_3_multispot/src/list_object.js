/*
** Nouvel objet :
**
** tab[x] = fonction_objet(core,
** [tableau de couleur + transparence(0-100) + reflexion(0-2) + brillance(0-2+)]
** [tableau de position + numéro de l'objet + angle ou rayon]
** [tableau de rotation + limite(haute/basse)]);
**
** fonctions : sphere (rayon) / plan (0) / cylindre (rayon + limit H & B) / cone (angle + limit H & B) / ellyps(rayon)
** core : structure générale
*/

function list_object2(core, tab, c)
{
    return (tab);
}

function list_object(core, tab, c)
{
    tab[c] = sphere(core, [50, 50, 50, 100, 0, 1], [-200, 0, 0, c, 200], [0, 0, 0, null]);
    tab[++c] = plan(core, [250, 50, 100, 100, 0, 1], [0, -100, 0, c, 50], [90, 0, 0, null]);
    tab[++c] = cylindre(core, [100, 255, 50, 100, 0, 1], [200, 0, -400, c, 100], [90, 0, 0, null, null]);
    tab[++c] = cone(core, [255, 150, 50, 100, 0, 1], [0, 300, 400, c, 10], [90, 0, 0, 0, -500]);
    tab = list_object2(core, tab, c);
    return (tab);
}
