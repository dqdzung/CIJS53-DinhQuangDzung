// A. Problem solving
// 1.
const myFunction = (arr1, arr2) => {
  let arr1Diff = arr1.filter((element) => !arr2.includes(element)),
    arr2Diff = arr2.filter((element) => !arr1.includes(element));
  return (result = arr1Diff.concat(arr2Diff));
};

//test:
let A1 = [1, 2, "a"],
  A2 = [1, 3, "b"];
console.log(myFunction(A1, A2));

// 2.
const compare = (team1, team2) => {
  const team1Points = team1.points,
    team2Points = team2.points,
    team1Gd = team1.GD,
    team2Gd = team2.GD,
    name1 = team1.name.toLowerCase(),
    name2 = team2.name.toLowerCase();

  let comparison = 0;
  if (team1Points > team2Points) {
    comparison = 1;
  } else if (team1Points < team2Points) {
    comparison = -1;
  } else if (team1Points == team2Points) {
    if (team1Gd > team2Gd) {
      comparison = 1;
    } else if (team1Gd < team2Gd) {
      comparison = -1;
    } else if (team1Gd == team2Gd) {
      if (name1 > name2) {
        comparison = -1;
      } else if (name1 < name2) {
        comparison = 1;
      }
    }
  }
  return comparison * -1;
};

const rank = (teams) => {
  teams.sort(compare);
  for (team of teams) {
    team.position = teams.indexOf(team) + 1;
  }
  return teams;
};

//test:
teams = [
  { name: "ManUtd", points: 60, GD: 29 },
  { name: "Chelsea", points: 75, GD: 39 },
  { name: "Liverpool", points: 88, GD: 39 },
  { name: "Arsenal", points: 99, GD: 45 },
];

console.log(rank(teams));