export class User{
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(id: number=0,email: string="",
                password: string="",
                firstName: string="",
                lastName: string=""){
                    this.id=id;
                    this.password=password;
                    this.email=email;
                    this.firstName=firstName;
                    this.lastName=lastName;
                }
}