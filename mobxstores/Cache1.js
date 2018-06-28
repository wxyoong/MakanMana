import { observable, action, decorate } from 'mobx';

class Cache1 {
    username = 'Hello World';
    setusername(username){
        this.username = username
    }
    // password = '';
    // setpassword(password){
    //     this.password = password
    // }
}
decorate(Cache1,{
    username: observable,
    setusername: action,
})
export default Cache1;