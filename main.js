const source = document.querySelector('#left_list');
const target = document.querySelector('#right_list');
const searchLeft = document.querySelector('#left_search');
const searchRight = document.querySelector('#right_search');

document.addEventListener('click',e => {
    if(e.target.classList.contains('fas')){
        const btn = e.target.parentElement;
        const el = btn.parentElement.parentElement;
        if(btn.classList.contains('btn_action') && el.parentElement===source){
            target.appendChild(el);
        }else{
            source.appendChild(el);
        }
    }
    if(e.target.classList.contains('save')){
        let localObj = {
            left: source.innerHTML,
            right: target.innerHTML
        };
        Controller.setLS(localObj);
    }
});

makeDnD([source,target]);
mySearch([searchLeft,searchRight]);
Controller.getFriendsAndAddDom('#left_list','#right_list');


function makeDnD(zones) {
    let currentDrag;

    zones.forEach(zone => {
        zone.addEventListener('dragstart', (e) => {
            if(!e.target.classList.contains('container_fr')){
                e.preventDefault();
                return false;
            }else{
                e.dataTransfer.setData('text/html', 'dragstart');
                currentDrag = { source: zone, node: e.target };
            }
        });

        zone.addEventListener('dragover', (e) => {
            if(zone === target){
                e.preventDefault();
            }
        });

        zone.addEventListener('drop', (e) => {
            if (currentDrag) {
                e.preventDefault();

                if (currentDrag.source !== zone) {
                    if (e.target.classList.contains('container_fr')) {
                        zone.insertBefore(currentDrag.node, e.target.nextElementSibling);
                    } else {
                        zone.appendChild(currentDrag.node);
                    }
                }

                currentDrag = null;
            }
        });
    })
}


function mySearch(arr_inp) {
    arr_inp.forEach(inp => {
        inp.addEventListener('input',()=>{
            if(inp.value===''){
                let foo = document.querySelectorAll('#'+inp.dataset.namesearch+' .container_fr');
                if(foo.length!==0){
                    foo.forEach(el=>{
                        el.style.display = 'flex';
                    });
                }
            }else{
                document.querySelectorAll('#'+inp.dataset.namesearch+' .name_fr div').forEach(el=>{
                    if(!el.innerHTML.toUpperCase().includes(inp.value.toUpperCase())){
                        el.parentElement.parentElement.style.display='none';
                    }else{
                        el.parentElement.parentElement.style.display='flex';
                    }
                });
            }
        });
    })
}
