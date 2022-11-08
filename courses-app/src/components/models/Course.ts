// export default interface Course {
//     name: string,
//     price: number,
//     description: string,
//     tipo: string,
//     teacher: string,
//     teacher_image: string,
//     bg_image: string,
//     start_date: string
// }

export class Course {
    constructor(
        public name:string, 
        public price: number, 
        public description: string, 
        public tipo: string, 
        public teacher: string, 
        public teacher_image: string, 
        public bg_image: string, 
        public start_date: string) {
    }
}