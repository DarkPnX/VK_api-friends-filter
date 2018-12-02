window.Controller = {
    async getFriendsAndAddDom(selector_left,selector_right){
        if(!Model.getLocalStor('my_list')){
            await  Model.login();
            const listFriends = await Model.getMyFriends();
            const all_dom_fr = View.getTemplate_Friend(listFriends);
            View.addDOM_Friends(selector_left,all_dom_fr);
        }else{
            let my_list = JSON.parse(Model.getLocalStor('my_list'));
            document.querySelector(selector_left).innerHTML = my_list.left;
            document.querySelector(selector_right).innerHTML = my_list.right;
        }
    },
    setLS(obj){
        Model.setLocalStor('my_list',obj);
    }
}