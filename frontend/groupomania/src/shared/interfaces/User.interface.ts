export interface Users {
    userId: string;
    nom: string;
    prenom: string;
    pseudo: string;
    email: string;
    bio: string;
    isadmin: boolean;
    timestamp: string;
    password: string;
}

export interface UserForm extends Partial<Users> { }

export interface LoginForm {
    password: string;
    email: string;
}