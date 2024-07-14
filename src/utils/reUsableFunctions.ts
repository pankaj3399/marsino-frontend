export const getExperienceString = (experience: string | number) => {
  if (experience == 0) {
    return "Fresher";
  } else if (experience == 1) {
    return "1 year";
  } else if (experience == 2) {
    return "1 - 2 years";
  } else if (experience == 3) {
    return "Over 2 years";
  } else {
    return `${experience} years`;
  }
};

export const getSkillScore = (skill: string) => {
  const skillArr = JSON.parse(skill);
  let skillScore = 0;
  skillArr.forEach((skill: any) => {
    skillScore += (Number(skill.value) * 100) / 6;
  });
  return skillScore.toFixed(2) + "%";
};
