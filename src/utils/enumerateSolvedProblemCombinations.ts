import { Problem, SolvedProblems } from "../components/Strategies";

const enumerateSolvedProblemCombinations = (problems: Problem[]): SolvedProblems[] => {
  const n: number = problems.length;
  let solvedProblemsCombinations: SolvedProblems[] = [];
  for (let bit = 0; bit < (1 << n); bit++) {
    let solvedProblemIds: string[] = [];
    let sumScore = 0;
    let maxScore: number = 0;

    for (let i = 0; i < n; i++) {
      if ((1 << i) & bit) {
        solvedProblemIds.push(problems[i].id);
        sumScore += problems[i].score;
        maxScore = Math.max(maxScore, problems[i].score);
      }
    }
    solvedProblemsCombinations.push({
      solvedProblemIds: solvedProblemIds,
      sumScore: sumScore,
      maxScore: maxScore,
    })
  }
  return solvedProblemsCombinations;
}

export default enumerateSolvedProblemCombinations;
