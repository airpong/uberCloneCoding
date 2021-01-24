import { rideStatus } from "src/types/types";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";




@Entity()
class Ride extends BaseEntity {
	@PrimaryGeneratedColumn() id: number

    @Column({type:"text",enum:["ACCEPTED" , "FINISHED" , "CANCELED" , "REQUESTING" , "ONROUTE"]})
    status:rideStatus

    @Column({type:"text"})
    pickUPAddress:string

    @Column({type:"double precision"})
    pickUpLat:number

    @Column({type:"double precision"})
    pickUpLng:number

    @Column({type:"text"})
    dropOffAddress:string

    @Column({type:"double precision"})
    dropOffLat:number

    @Column({type:"double precision"})
    dropOffLng:number

    @Column({type:"double precision"})
    price:number

    @Column({type:"text"})
    distance:string

    @Column({type:"text"})
    duration:string

    @ManyToOne(type => User, user => user.ridesAsPassenger)
    passenger: User

    @ManyToOne(type => User, user => user.ridesAsDriver)
    driver: User

	@CreateDateColumn() createdAt: string;
	@UpdateDateColumn() updatedAt: string;
	
	
}

export default Ride