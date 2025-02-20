import { GameState } from "src/gamestate/entities/gamestate.entity";
import { User } from "src/user/entities/user.entity";
import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ default: 0})
    score1: number;
    @Column({ default: 0})
    score2: number;
    @Column({ default: false})
    isRunning: boolean;
    @Column({ nullable: true })
    roomGame: string;
    @ManyToOne(()=> User, (user) => user.gamesAsFirst)
    player1: User;
    @ManyToOne(()=> User, (user) => user.gamesAsSecond)
    player2: User;
    @OneToMany(() => GameState, (gamestate) => gamestate.game)
    gameStates: GameState[];
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}