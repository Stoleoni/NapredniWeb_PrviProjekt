import { Map } from "typescript";
import { TeamResult } from "./functions";

export const loginPage =
	"https://dev-qpi2rq7odh4kjotc.eu.auth0.com/u/login?state=hKFo2SA2ZlNvaFEyaWtWSFdheWcwZzhrd3cydHUwb1Z3Y3VvNKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFNuTFFacUNFVHNrendXTmd0bnFuUjgtR3lKeWs1bnkzo2NpZNkgTEk5eWJDSG84SVF2VmliOENFdlhNZHUxV2o4RFJXNUk";

export type MatchType = {
	id: number;
	firstTeam: string;
	secondTeam: string;
	firstTeamGoals: number | undefined;
	secondTeamGoals: number | undefined;
};

export type KoloType = {
	id: number;
	matches: MatchType[];
	comments: CommentType[];
};

export type CommentType = {
	id: number;
	userEmail: string;
	text: string;
	createdDate: string;
};

export const kolaInitial: KoloType[] = [
	{
		id: 1,
		matches: [
			{
				id: 1,
				firstTeam: "Arsenal",
				secondTeam: "Tottenham",
				firstTeamGoals: 5,
				secondTeamGoals: 0,
			},
			{
				id: 2,
				firstTeam: "Manchester City",
				secondTeam: "Manchester United",
				firstTeamGoals: 2,
				secondTeamGoals: 2,
			},
			{
				id: 3,
				firstTeam: "Liverpool",
				secondTeam: "Leeds United",
				firstTeamGoals: 1,
				secondTeamGoals: 0,
			},
		],
		comments: [
			{
				id: 1,
				userEmail: "alan@alinski.alan",
				text: "koja luda tekma 400 golova",
				createdDate: "2022-10-29T12:31:30.950Z",
			},
			{
				id: 2,
				userEmail: "bobo@bobinski.bobo",
				text: "u moe vreme se igrala obrana",
				createdDate: "2022-10-29T12:31:47.686Z",
			},
		],
	},
	{
		id: 2,
		matches: [
			{
				id: 4,
				firstTeam: "Arsenal",
				secondTeam: "Manchester City",
				firstTeamGoals: 5,
				secondTeamGoals: 0,
			},
			{
				id: 5,
				firstTeam: "Tottenham",
				secondTeam: "Liverpool",
				firstTeamGoals: 2,
				secondTeamGoals: 2,
			},
			{
				id: 6,
				firstTeam: "Leeds United",
				secondTeam: "Manchester United",
				firstTeamGoals: 1,
				secondTeamGoals: 0,
			},
		],
		comments: [
			{
				id: 3,
				userEmail: "bobo@bobinski.bobo",
				text: "dosadno kolo",
				createdDate: "2022-10-29T12:41:47.686Z",
			},
		],
	},
	{
		id: 3,
		matches: [
			{
				id: 7,
				firstTeam: "Arsenal",
				secondTeam: "Leeds United",
				firstTeamGoals: undefined,
				secondTeamGoals: undefined,
			},
			{
				id: 8,
				firstTeam: "Manchester City",
				secondTeam: "Liverpool",
				firstTeamGoals: undefined,
				secondTeamGoals: undefined,
			},
			{
				id: 9,
				firstTeam: "Tottenham",
				secondTeam: "Manchester United",
				firstTeamGoals: undefined,
				secondTeamGoals: undefined,
			},
		],
		comments: [
			{
				id: 3,
				userEmail: "bobo@bobinski.bobo",
				text: "jedva cekam",
				createdDate: "2022-10-29T12:41:47.686Z",
			},
		],
	},
];

export const getInitialTeams = () => {
	let map = new Map<string, TeamResult>();
	const emptyTeamResult: TeamResult = {
		won: 0,
		lost: 0,
		draws: 0,
		conceded: 0,
		scored: 0,
	};
	map.set("Arsenal", emptyTeamResult);
	map.set("Tottenham", emptyTeamResult);
	map.set("Manchester United", emptyTeamResult);
	map.set("Manchester City", emptyTeamResult);
	map.set("Leeds United", emptyTeamResult);
	map.set("Liverpool", emptyTeamResult);
	return map;
};
