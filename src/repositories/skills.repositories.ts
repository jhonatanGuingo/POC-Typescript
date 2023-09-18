import { db } from "../database/db";
import { Skill } from "../protocols/skillType";

async function postSkill(skill: Skill){
    await db.query(`INSERT INTO skills (lv, name, class) VALUES($1, $2, $3)`, [skill.lv, skill.name, skill.class])
}
async function getSkills(){
    const skills = db.query(`SELECT * FROM skills`);
    return skills
}
export const skillRepositories = {
    postSkill,
    getSkills
}