
import { Project } from "../mock-data";

export const updateProjectUtil = (target: Project, update: Project): Project => {
  // let key: keyof typeof update;
  let result = { ...target };

  Object.keys(update).forEach(key => {
    const k = key as keyof Project;
    const updatingValue = update[k];
    if (target.hasOwnProperty(k) && updatingValue) {
      // target[k] = update[k];
      result = { ...result, [k]: updatingValue };
    }
  })

  // type Entries<T> = {
  //   [K in keyof T]: [K, T[K]];

  // }[keyof T][]

  // function entries<T>(obj:T):Entries<T> {
  //   return Object.entries(obj) as any;
  // }

  // type Entries<T> = {
  //   [K in keyof T]: [K, T[K]];
  // }[keyof T][];
  
  // function entries<T>(obj: T): Entries<T> {
  //   return Object.entries(obj) as any;
  // }

  
  // entries(update).forEach((keyValuePer) => {
  //   if(keyValuePer?.[0]){ 
  //     console.log(target[keyValuePer?.[0]]);
  //   }
  
  //   Object.entries(target);
  // });
  

  // entries(update).forEach(([key, value]) => {
  //   if (value) {
  //     target[key] = value;
  //   }
  // });
  // entries(update).forEach(([key, value]) => {
  // });

  return target;
}


