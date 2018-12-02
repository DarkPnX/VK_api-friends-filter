window.View = {
    getTemplate_Friend(items){
        const fr_tmp   = document.getElementById("one_fr").innerHTML;
        const template = Handlebars.compile(fr_tmp);
        return template(items);
    },
    addDOM_Friends(id_container,dom_el){
        let cont = document.querySelector(id_container);
        cont.innerHTML ='';
       // console.log(cont);
       // console.log(dom_el);
        cont.innerHTML = dom_el;
    }
}