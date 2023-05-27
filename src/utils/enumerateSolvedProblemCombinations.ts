import { Problem, SolvedProblems } from "../components/Strategies";

const enumerateSolvedProblemCombinations = (problems: Problem[]): SolvedProblems[] => {
  let selectedProblems: Problem[] = [];
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].selected) {
      selectedProblems.push(problems[i]);
    }
  }
  const n: number = selectedProblems.length;
  let solvedProblemsCombinations: SolvedProblems[] = [];
  for (let bit = 0; bit < (1 << n); bit++) {
    let solvedProblemIds: string[] = [];
    let sumScore = 0;
    let maxScore: number = 0;

    for (let i = 0; i < n; i++) {
      if ((1 << i) & bit) {
        solvedProblemIds.push(selectedProblems[i].id);
        sumScore += selectedProblems[i].score;
        maxScore = Math.max(maxScore, selectedProblems[i].score);
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
