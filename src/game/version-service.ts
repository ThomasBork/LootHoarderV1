import { DBGame } from "../game-state/db-game";

export class VersionService {
    public currentVersion: string = "0.0.1";

    public upgradeSaveGameToCurrentVersion (dbGame: DBGame): DBGame {
        return dbGame;
    }
}
