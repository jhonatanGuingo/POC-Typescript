import { Skill } from "../protocols/skillType";
import { skillRepositories } from "../repositories/skills.repositories";

async function postSkill(skill: Skill){
    await skillRepositories.postSkill(skill)
}
async function getSkills(){
    const skills = await skillRepositories.getSkills();
    return skills.rows;
}
export const skillServices = {
    postSkill,
    getSkills
}