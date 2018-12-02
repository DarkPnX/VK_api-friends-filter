window.Model = {
    login(){
        return new Promise ((resolve,reject)=>{
            VK.init({
                apiId:6762936
            });
            VK.Auth.login(response => {
                if(response.session){
                    console.log('Авторизация прошла');
                    resolve();
                }else{
                    console.log('не ок');
                    reject(new Error('Авторизация не прошла'));
                }
            },2);
        });
    },
    getMyFriends(){
        return new Promise((resolve,reject)=>{
            VK.api('friends.get',{v:'5.78',fields:'photo_50'},response=>{
                if(response.error){
                    //console.log(response.error);
                    reject(new Error(response.error.error_msg));
                }else{
                    //console.log(response);
                    resolve(response.response);
                }
            });
        });
    },
    setLocalStor(name_ls,obj){
        localStorage.setItem(name_ls,JSON.stringify(obj));
    },
    getLocalStor(name_ls){
        return localStorage.getItem(name_ls);
    }
}