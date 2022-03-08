
import { Project } from "../mock-data";

export function updateProjectUtil (target: Project, update: Project): Project | null { 
  let result = { ...target };

  Object.keys(update).forEach(key => {
    const k = key as keyof Project;
    const updatingValue = update[k];
    if (target.hasOwnProperty(k) && updatingValue) {
      if (typeof(target[k]) !== typeof(updatingValue)){
        return null;
      }
      result = { ...result, [k]: updatingValue };
    }
  })

  result = {...result, updatedAt: new Date};

  return result;
}


