import { Character } from "../arenas/character";
import { ArenaRoom } from "../arenas/arena-room";

export type SkillEffect = (user: Character, target: Character, arenaRoom: ArenaRoom) => void;