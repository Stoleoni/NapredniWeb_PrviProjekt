import { getInitialTeams, KoloType } from "./constants";

export const isAdmin = (email: string | undefined) => {
	return email === "admin@adminski.admin";
};

export type TeamResult = {
	won: number;
	draws: number;
	lost: number;
	scored: number;
	conceded: number;
};

export type TeamType = {
	name: string;
	won: number;
	draws: number;
	lost: number;
	scored: number;
	conceded: number;
	points: number;
};

export const getTable = (kola: KoloType[]): TeamType[] => {
	let teams = getInitialTeams();
	kola.forEach((kolo) => {
		kolo.matches.forEach((match) => {
			if (match.firstTeamGoals !== undefined && match.secondTeamGoals !== undefined) {
				//pobedio je prvi tim
				if (match.firstTeamGoals > match.secondTeamGoals) {
					let curr = teams.get(match.firstTeam);
					teams.set(match.firstTeam, { ...curr!, won: curr!.won + 1 });
					curr = teams.get(match.secondTeam);
					teams.set(match.secondTeam, { ...curr!, lost: curr!.lost + 1 });
				}
				//pobedio je drugi tim
				else if (match.firstTeamGoals < match.secondTeamGoals) {
					let curr = teams.get(match.secondTeam);
					teams.set(match.secondTeam, { ...curr!, won: curr!.lost + 1 });
					curr = teams.get(match.firstTeam);
					teams.set(match.firstTeam, { ...curr!, lost: curr!.won + 1 });
				}
				//izjednaceno
				else if (match.firstTeamGoals === match.secondTeamGoals) {
					let curr = teams.get(match.firstTeam);
					teams.set(match.firstTeam, { ...curr!, draws: curr!.draws + 1 });
					curr = teams.get(match.secondTeam);
					teams.set(match.secondTeam, { ...curr!, draws: curr!.draws + 1 });
				}
				let curr = teams.get(match.firstTeam);
				teams.set(match.firstTeam, {
					...curr!,
					scored: curr!.scored + match.firstTeamGoals,
					conceded: curr!.conceded + match.secondTeamGoals,
				});
				curr = teams.get(match.secondTeam);
				teams.set(match.secondTeam, {
					...curr!,
					scored: curr!.scored + match.secondTeamGoals,
					conceded: curr!.conceded + match.firstTeamGoals,
				});
			}
		});
	});
	// return teams;
	const array: TeamType[] = [];
	for (let entry of teams.entries()) {
		console.log(entry);
		array.push({
			name: entry[0],
			won: entry[1].won,
			lost: entry[1].lost,
			scored: entry[1].scored,
			draws: entry[1].draws,
			conceded: entry[1].conceded,
			points: entry[1].won * 3 + entry[1].draws,
		});
	}

	array.sort((a, b) => {
		if (a.points > b.points) return -1;
		if (a.points < b.points) return 1;
		if (a.points === b.points && a.scored - a.conceded > b.scored - b.conceded) return -1;
		return 0;
	});
	array.forEach((e) => console.log(e.name, e.points, e.scored));
	return array;
};
