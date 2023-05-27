import { SolvedProblems } from "../components/Strategies";

const sortByScore = (solvedProblems: SolvedProblems[]): SolvedProblems[] => {
  // 優先順位：
  // 1. 合計得点が小さい順
  // 2. 得点の最大値が小さい順
  // 3. 解いた問題の数が少ない順
  solvedProblems.sort((a, b) : number => {
    if (a.sumScore === b.sumScore) {
      if (a.maxScore === b.maxScore) {
        return a.solvedProblemIds.length - b.solvedProblemIds.length;
      } else {
        return a.maxScore - b.maxScore
      }
    } else {
      return a.sumScore - b.sumScore;
    }
  })
  return solvedProblems;
}

export default sortByScore;
