import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: "unknown"})
    commithash: string;

    @Column({default: "unknown"})
    contributor: string;

    @CreateDateColumn()
    createdAt: string;

    @Column("json")
    data: {
        element_analysis: ElementAnalysis
        file_analysis: FileAnalysis[]
        meta: MetaAnalysis
    };
    
}

type MetaAnalysis = {
    total: number
    zuix: number
    zuixRatio: number
}

type ElementAnalysis = {
    [index: string]: number
}

type FileAnalysis = {
    filename: string
    elementTags: string[]
    zuixElementTags: string[]
    zuixRatio: number
}