import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserToGroup } from "./usertogroup.entity";
import { Message } from "./message.entity";
import { User } from "src/user/entities/user.entity";
import * as bcrypt from 'bcryptjs';
import { Exclude } from "class-transformer";

export enum Privacy {
	DM = 'dm',
	PUBLIC = 'public',
	PRIVATE = 'private',
	PROTECTED = 'protected'
}  

@Entity('Group')
export class Group {

	@PrimaryGeneratedColumn()
	id: number;

	// @Column({default: true})
	// is_direct: boolean;

	@Column({
		type: 'enum',
		enum: Privacy,
		default: Privacy.PUBLIC
	})
	privacy: Privacy;

	@Column({nullable: false})
	name: string;

	@Column({default: "../../../default-user-icon.jpeg"})
	avatar: string;

	@Column({nullable: true})
	description: string;

	@Column({nullable: true})
	@Exclude()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(type => User, user => user.groups)
	owner: User;

	@OneToMany(type => Message, message => message.receiver)
	messages: Message[];
	
	@OneToMany(type => UserToGroup, usertogroup => usertogroup.group)
	usertogroup: UserToGroup[];

	@BeforeInsert()
    async hashPassword() : Promise<void> {
		if (this.privacy === Privacy.PROTECTED)
        	this.password = await bcrypt.hash(this.password, 10);
    }

	// constructor(partial : Partial<User>) {
    //     Object.assign(this, partial);
    // }
}