import {BattleSide} from './battle/BattleSide';
import {WinnerSide} from './battle/BattleSession';

export interface IEditorState {
    code: string;
    scrollX: number;
    scrollY: number;
    cursorX: number;
    cursorY: number;
}

export interface IPlayerState {
    name: string;
    side: BattleSide;
    isReady: boolean;
    isConnected: boolean;

    army: {
        0: string;
        1: string;
        2: string;
        3: string;
    };

    editor: IEditorState;
}

export interface IState {
    roomId: string;
    roomTitle: string;
    left: IPlayerState;
    right: IPlayerState;
    damage: {
        left: number;
        right: number;
    },
    winner: WinnerSide;
}