import { Request, Response } from "express";
import { Skill } from "../protocols/skillType";
import { skillServices } from "../services/skills.services";

async function postSkill(req: Request, res: Response){
    const skill = req.body as Skill;
    await skillServices.postSkill(skill);

    return res.status(201).send('Skill adicionada com Sucesso')
}

async function getSkills(req: Request, res: Response){
    const skills = await skillServices.getSkills();

    return res.send(skills)
}

export const skillControllers = {
    postSkill,
    getSkills
}