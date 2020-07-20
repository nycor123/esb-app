export class User {
    constructor(
        public name: string,
        public email: string,
        public photoUrl: string,
        public emailVerified: boolean,
        public uid: string
    ) {}
}