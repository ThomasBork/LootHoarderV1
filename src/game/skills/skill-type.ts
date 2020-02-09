import { Character } from "../arenas/character";
import { ArenaRoom } from "../arenas/arena-room";

export class SkillType {
    public key: string;
    public cooldown: number;
    public energyCost: number;
    public effect: (user: Character, arenaRoom: ArenaRoom) => void;
}
